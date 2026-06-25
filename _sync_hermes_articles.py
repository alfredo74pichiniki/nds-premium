import sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import os, json
from pathlib import Path
import paramiko

# ---------------------------------------------------------------------------
# Credenciales del VDS: SE LEEN DE .env.local (gitignored). NUNCA hardcodear
# secretos en este archivo — está versionado en un repo público.
# Define en .env.local:
#   HERMES_VDS_HOST=...
#   HERMES_VDS_USER=root
#   HERMES_VDS_PASS=...
# ---------------------------------------------------------------------------
def load_env_local():
    envf = Path('.env.local')
    if envf.exists():
        for line in envf.read_text(encoding='utf-8').splitlines():
            line = line.strip()
            if line and not line.startswith('#') and '=' in line:
                k, v = line.split('=', 1)
                os.environ.setdefault(k.strip(), v.strip())

load_env_local()
VDS_HOST = os.environ.get('HERMES_VDS_HOST')
VDS_USER = os.environ.get('HERMES_VDS_USER', 'root')
VDS_PASS = os.environ.get('HERMES_VDS_PASS')
if not (VDS_HOST and VDS_PASS):
    print('ERROR: faltan credenciales. Define HERMES_VDS_HOST y HERMES_VDS_PASS en .env.local')
    sys.exit(1)

LOCAL_ARTICLES_DIR = Path('public/data/articles')
LOCAL_ARTICLES_JSON = Path('public/data/articles.json')

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect(VDS_HOST, username=VDS_USER, password=VDS_PASS, timeout=15)

# Get the full Hermes articles.json
stdin, stdout, stderr = ssh.exec_command(
    'docker exec hermes cat /opt/data/projects/nds-premium/public/data/articles.json'
)
hermes_json_raw = stdout.read().decode('utf-8', errors='replace')

try:
    hermes_data = json.loads(hermes_json_raw)
    hermes_arts = hermes_data if isinstance(hermes_data, list) else hermes_data.get('articles', [])
    print(f"Hermes articles.json: {len(hermes_arts)} articles")
except Exception as e:
    print(f"ERROR parsing Hermes articles.json: {e}")
    ssh.close()
    exit(1)

# Load local articles.json
local_data = json.loads(LOCAL_ARTICLES_JSON.read_text(encoding='utf-8'))
local_arts = local_data if isinstance(local_data, list) else local_data.get('articles', [])
local_slugs = {a.get('slug') for a in local_arts}
print(f"Local articles.json: {len(local_arts)} articles")

# Find new ones
new_arts = [a for a in hermes_arts if a.get('slug') not in local_slugs]
print(f"New articles to add: {len(new_arts)}")

# MERGE into local articles.json (never overwrite)
merged = local_arts + new_arts
LOCAL_ARTICLES_JSON.write_text(
    json.dumps(merged, ensure_ascii=False, indent=2),
    encoding='utf-8'
)
print(f"\n✅ articles.json updated: {len(local_arts)} + {len(new_arts)} = {len(merged)} articles")

# Now copy the individual JSON files for each new article
sftp = ssh.open_sftp()
copied = 0
failed = []

for art in new_arts:
    slug = art.get('slug', '')
    remote_path = f'/opt/data/projects/nds-premium/public/data/articles/{slug}.json'
    local_path = LOCAL_ARTICLES_DIR / f'{slug}.json'

    if local_path.exists():
        print(f"  SKIP (exists): {slug}")
        continue

    try:
        stdin2, stdout2, stderr2 = ssh.exec_command(f'docker exec hermes cat {remote_path} 2>/dev/null')
        content = stdout2.read().decode('utf-8', errors='replace')

        if not content or len(content) < 50:
            # Try without docker exec (might be on host)
            stdin3, stdout3, stderr3 = ssh.exec_command(f'cat /opt/data/projects/nds-premium/public/data/articles/{slug}.json 2>/dev/null')
            content = stdout3.read().decode('utf-8', errors='replace')

        if content and len(content) > 50:
            # Verify it's valid JSON
            json.loads(content)
            local_path.write_text(content, encoding='utf-8')
            print(f"  ✅ Copied: {slug} ({len(content)} bytes)")
            copied += 1
        else:
            # Article might only exist in articles.json listing, not as individual file
            # Create a minimal JSON from the listing data
            art_json = dict(art)
            art_json['content'] = f"# {art.get('title', slug)}\n\n*Full article coming soon.*"
            local_path.write_text(
                json.dumps(art_json, ensure_ascii=False, indent=2),
                encoding='utf-8'
            )
            print(f"  ⚠️  Minimal stub created: {slug}")
            copied += 1
    except Exception as e:
        print(f"  ❌ Failed: {slug} — {e}")
        failed.append(slug)

sftp.close()
ssh.close()

print(f"\n=== SYNC COMPLETE ===")
print(f"  Copied: {copied}/{len(new_arts)} new articles")
print(f"  Failed: {len(failed)}")
print(f"  Total local: {len(merged)}")
