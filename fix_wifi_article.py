"""Fix wifi article: convert HTML content to proper markdown"""
import sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import json
import re

article_path = r"public\data\articles\why-is-my-wifi-slow-fixes-2026.json"

with open(article_path, "r", encoding="utf-8") as f:
    article = json.load(f)

content = article["content"]

# Check if content has HTML tags (indicating the problem)
if "<h1>" not in content and "<p>" not in content:
    print("Content already looks like markdown. No fix needed.")
    sys.exit(0)

print(f"Found HTML content ({len(content)} chars). Converting to markdown...")

# --- HTML to Markdown conversion ---

# First, keep the markdown parts at the end (after the closing HTML).
# The content has a mix: starts with markdown disclosure, then HTML body,
# then markdown links at the end.

# Split: find where the pure markdown at the end starts
# Look for the pattern where HTML stops and markdown begins

# Remove the leading markdown affiliate disclosure that duplicates the HTML one
# The content starts with markdown "*Affiliate disclosure..." then jumps to <h1>
# Remove everything up to and including the first <h1>...</h1> since the title 
# is already rendered by the component header

def html_to_md(html_content):
    """Convert HTML content to clean markdown"""
    s = html_content
    
    # Remove leading markdown affiliate disclosure (it's duplicated in HTML)
    s = re.sub(r'^\*Affiliate disclosure:.*?\*\s*\n*', '', s)
    
    # Remove the <h1> title (rendered separately by PremiumArticlePage)
    s = re.sub(r'<h1>.*?</h1>\s*\n*', '', s)
    
    # Remove the HTML affiliate disclosure paragraph
    s = re.sub(r'<p><em>Affiliate disclosure:.*?</em></p>\s*\n*', '', s)
    
    # Convert HTML entities first
    s = s.replace('&mdash;', '—')
    s = s.replace('&ndash;', '–')
    s = s.replace('&rsquo;', "'")
    s = s.replace('&lsquo;', "'")
    s = s.replace('&rdquo;', '"')
    s = s.replace('&ldquo;', '"')
    s = s.replace('&amp;', '&')
    s = s.replace('&rarr;', '→')
    s = s.replace('&lt;', '<')
    s = s.replace('&gt;', '>')
    
    # Convert headings
    s = re.sub(r'<h2>(.*?)</h2>', r'## \1', s)
    s = re.sub(r'<h3>(.*?)</h3>', r'### \1', s)
    s = re.sub(r'<h4>(.*?)</h4>', r'#### \1', s)
    
    # Convert emphasis/strong
    s = re.sub(r'<strong>(.*?)</strong>', r'**\1**', s)
    s = re.sub(r'<em>(.*?)</em>', r'*\1*', s)
    s = re.sub(r'<code>(.*?)</code>', r'`\1`', s)
    
    # Convert links - handle escaped quotes in href
    s = re.sub(r'<a\s+href=\\"(.*?)\\"(?:\s+rel=\\"[^"]*\\")?\s*>(.*?)</a>', r'[\2](\1)', s)
    s = re.sub(r'<a\s+href="(.*?)"(?:\s+rel="[^"]*")?\s*>(.*?)</a>', r'[\2](\1)', s)
    
    # Convert horizontal rules
    s = re.sub(r'<hr\s*/?\s*>', '\n---\n', s)
    
    # Convert tables
    def convert_table(match):
        table_html = match.group(0)
        rows = []
        
        # Extract header row
        thead_match = re.search(r'<thead>(.*?)</thead>', table_html, re.DOTALL)
        if thead_match:
            headers = re.findall(r'<th>(.*?)</th>', thead_match.group(1))
            # Clean any remaining HTML from headers
            headers = [re.sub(r'<[^>]+>', '', h) for h in headers]
            rows.append('| ' + ' | '.join(headers) + ' |')
            rows.append('| ' + ' | '.join(['---'] * len(headers)) + ' |')
        
        # Extract body rows
        tbody_match = re.search(r'<tbody>(.*?)</tbody>', table_html, re.DOTALL)
        if tbody_match:
            tr_matches = re.findall(r'<tr>(.*?)</tr>', tbody_match.group(1), re.DOTALL)
            for tr in tr_matches:
                cells = re.findall(r'<td>(.*?)</td>', tr, re.DOTALL)
                # Clean remaining HTML tags and convert links
                cleaned = []
                for cell in cells:
                    c = re.sub(r'<a\s+href=\\"(.*?)\\"(?:\s+[^>]*)?\s*>(.*?)</a>', r'[\2](\1)', cell)
                    c = re.sub(r'<a\s+href="(.*?)"(?:\s+[^>]*)?\s*>(.*?)</a>', r'[\2](\1)', c)
                    c = re.sub(r'<strong>(.*?)</strong>', r'**\1**', c)
                    c = re.sub(r'<em>(.*?)</em>', r'*\1*', c)
                    c = re.sub(r'<[^>]+>', '', c)
                    c = c.replace('&mdash;', '—').replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>')
                    cleaned.append(c.strip())
                rows.append('| ' + ' | '.join(cleaned) + ' |')
        
        return '\n' + '\n'.join(rows) + '\n'
    
    s = re.sub(r'<table>.*?</table>', convert_table, s, flags=re.DOTALL)
    
    # Convert ordered lists
    def convert_ol(match):
        ol_html = match.group(0)
        # Check for start attribute
        start_match = re.search(r'start=\\"?(\d+)\\"?', ol_html)
        start = int(start_match.group(1)) if start_match else 1
        
        items = re.findall(r'<li>(.*?)</li>', ol_html, re.DOTALL)
        result = '\n'
        for i, item in enumerate(items):
            # Clean nested HTML
            clean_item = re.sub(r'<strong>(.*?)</strong>', r'**\1**', item)
            clean_item = re.sub(r'<em>(.*?)</em>', r'*\1*', clean_item)
            clean_item = re.sub(r'<a\s+href=\\"(.*?)\\"(?:\s+[^>]*)?\s*>(.*?)</a>', r'[\2](\1)', clean_item)
            clean_item = re.sub(r'<a\s+href="(.*?)"(?:\s+[^>]*)?\s*>(.*?)</a>', r'[\2](\1)', clean_item)
            
            # Handle nested lists
            nested_ul = re.search(r'<ul>(.*?)</ul>', clean_item, re.DOTALL)
            if nested_ul:
                nested_items = re.findall(r'<li>(.*?)</li>', nested_ul.group(1), re.DOTALL)
                clean_item = re.sub(r'<ul>.*?</ul>', '', clean_item, flags=re.DOTALL)
                clean_item = re.sub(r'<[^>]+>', '', clean_item)
                clean_item = clean_item.replace('&mdash;', '—').replace('&rsquo;', "'").replace('&ldquo;', '"').replace('&rdquo;', '"').replace('&amp;', '&').replace('&rarr;', '→')
                result += f"{start + i}. {clean_item.strip()}\n"
                for ni in nested_items:
                    ni_clean = re.sub(r'<[^>]+>', '', ni)
                    ni_clean = re.sub(r'<a\s+href=\\"(.*?)\\"(?:\s+[^>]*)?\s*>(.*?)</a>', r'[\2](\1)', ni)
                    ni_clean = re.sub(r'<a\s+href="(.*?)"(?:\s+[^>]*)?\s*>(.*?)</a>', r'[\2](\1)', ni_clean)
                    ni_clean = re.sub(r'<[^>]+>', '', ni_clean)
                    ni_clean = ni_clean.replace('&mdash;', '—').replace('&rsquo;', "'").replace('&amp;', '&')
                    result += f"   - {ni_clean.strip()}\n"
            else:
                clean_item = re.sub(r'<[^>]+>', '', clean_item)
                clean_item = clean_item.replace('&mdash;', '—').replace('&rsquo;', "'").replace('&ldquo;', '"').replace('&rdquo;', '"').replace('&amp;', '&').replace('&rarr;', '→')
                result += f"{start + i}. {clean_item.strip()}\n"
        return result
    
    s = re.sub(r'<ol(?:\s+[^>]*)?>(.*?)</ol>', convert_ol, s, flags=re.DOTALL)
    
    # Convert unordered lists
    def convert_ul(match):
        ul_html = match.group(0)
        items = re.findall(r'<li>(.*?)</li>', ul_html, re.DOTALL)
        result = '\n'
        for item in items:
            clean_item = re.sub(r'<strong>(.*?)</strong>', r'**\1**', item)
            clean_item = re.sub(r'<em>(.*?)</em>', r'*\1*', clean_item)
            clean_item = re.sub(r'<a\s+href=\\"(.*?)\\"(?:\s+[^>]*)?\s*>(.*?)</a>', r'[\2](\1)', clean_item)
            clean_item = re.sub(r'<a\s+href="(.*?)"(?:\s+[^>]*)?\s*>(.*?)</a>', r'[\2](\1)', clean_item)
            clean_item = re.sub(r'<[^>]+>', '', clean_item)
            clean_item = clean_item.replace('&mdash;', '—').replace('&rsquo;', "'").replace('&ldquo;', '"').replace('&rdquo;', '"').replace('&amp;', '&').replace('&rarr;', '→')
            result += f"- {clean_item.strip()}\n"
        return result
    
    s = re.sub(r'<ul>(.*?)</ul>', convert_ul, s, flags=re.DOTALL)
    
    # Remove remaining <p> tags 
    s = re.sub(r'<p>(.*?)</p>', r'\1', s, flags=re.DOTALL)
    
    # Clean any remaining HTML tags
    s = re.sub(r'</?(?:div|span|br)\s*/?>', '', s)
    
    # Clean up extra newlines
    s = re.sub(r'\n{4,}', '\n\n\n', s)
    
    # Final entity cleanup
    s = s.replace('&mdash;', '—')
    s = s.replace('&rsquo;', "'")
    s = s.replace('&ldquo;', '"')
    s = s.replace('&rdquo;', '"')
    s = s.replace('&amp;', '&')
    s = s.replace('&rarr;', '→')
    
    return s.strip()

# Convert the content
new_content = html_to_md(content)

# Verify no HTML tags remain (except allowed markdown-compatible ones)
remaining_html = re.findall(r'<(?!/?(?:br|img)\b)[a-z][^>]*>', new_content)
if remaining_html:
    print(f"WARNING: {len(remaining_html)} remaining HTML tags found:")
    for tag in remaining_html[:10]:
        print(f"  {tag[:80]}")

# Count markdown elements to verify conversion worked
h2_count = len(re.findall(r'^## ', new_content, re.MULTILINE))
table_count = len(re.findall(r'^\|', new_content, re.MULTILINE))
print(f"Conversion result: {len(new_content)} chars, {h2_count} H2 headings, {table_count} table rows")

article["content"] = new_content

with open(article_path, "w", encoding="utf-8") as f:
    json.dump(article, f, indent=2, ensure_ascii=False)

print("WiFi article fixed successfully!")
