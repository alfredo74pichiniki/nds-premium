import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

export const metadata = {
    title: 'Digital Products - Nest Digital Studio',
    description: 'Premium templates, systems, and tools for entrepreneurs, freelancers, and content creators.',
};

const products = [
    {
        slug: 'shopify-conversion-engine',
        title: 'Shopify Conversion Engine',
        tagline: '15+ Liquid Snippets that replace $100+/month in apps',
        price: 47,
        originalPrice: 197,
        badge: 'BEST SELLER',
        mockup: '/mockups/shopify_mockup_v2.png',
    },
    {
        slug: 'freelancer-success-bundle',
        title: 'Freelancer Success Bundle',
        tagline: 'Contracts, proposals, and professional pricing system',
        price: 37,
        originalPrice: 149,
        mockup: '/mockups/freelancer_mockup_v2.png',
    },
    {
        slug: 'notion-business-system',
        title: 'Notion Business System',
        tagline: 'CRM, projects, finances. Your entire business in Notion',
        price: 27,
        originalPrice: 99,
        mockup: '/mockups/notion_mockup_v2.png',
    },
    {
        slug: 'content-creator-toolkit',
        title: 'Content Creator Empire',
        tagline: '100+ templates, hooks, and content structures',
        price: 27,
        originalPrice: 99,
        mockup: '/mockups/content_creator_mockup_v2.png',
    },
    {
        slug: 'social-media-factory',
        title: 'Social Media Factory',
        tagline: 'Create 30 days of content in 4 hours',
        price: 19,
        originalPrice: 69,
        mockup: '/mockups/social_factory_mockup_v2.png',
    },
    {
        slug: 'ai-prompt-mastery',
        title: 'AI Prompt Mastery',
        tagline: '500+ prompts for ChatGPT, Claude, Gemini and more',
        price: 17,
        originalPrice: 59,
        mockup: '/mockups/ai_prompts_mockup_v2.png',
    },
    {
        slug: 'startup-blueprint',
        title: 'Startup Launch Blueprint',
        tagline: 'From idea to first customers in 30 days',
        price: 17,
        originalPrice: 49,
        mockup: '/mockups/startup_mockup_v2.png',
    },
];

export default function ProductsPage() {
    const totalValue = products.reduce((acc, p) => acc + p.originalPrice, 0);
    const bundlePrice = 67;

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00b4d8]/20 to-[#0077b6]/20 border border-[#00b4d8]/40 rounded-full text-[#00b4d8] text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        Premium Digital Products
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Tools That Pay For Themselves
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Templates, systems, and resources that save time and drive real results
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <Link
                            key={product.slug}
                            href={`/products/${product.slug}`}
                            className="group relative bg-gradient-to-b from-[#141414] to-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00b4d8]/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,180,216,0.15)] hover:-translate-y-1"
                        >
                            {product.badge && (
                                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] rounded-full text-xs font-bold">
                                    {product.badge}
                                </div>
                            )}

                            {/* Mockup Image */}
                            <div className="relative h-56 w-full overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#141414] p-4">
                                <Image
                                    src={product.mockup}
                                    alt={product.title}
                                    fill
                                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#141414] to-transparent" />
                            </div>

                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2 group-hover:text-[#00b4d8] transition-colors">
                                    {product.title}
                                </h2>

                                <p className="text-gray-400 mb-4 text-sm line-clamp-2">
                                    {product.tagline}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-bold text-[#00b4d8]">${product.price}</span>
                                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                                    </div>

                                    <div className="flex items-center gap-1 text-sm text-[#00b4d8] opacity-0 group-hover:opacity-100 transition-opacity">
                                        View <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bundle CTA */}
                <div className="mt-20 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00b4d8]/20 via-[#0077b6]/20 to-[#00b4d8]/20 rounded-3xl blur-xl" />
                    <div className="relative p-10 bg-gradient-to-r from-[#141414] to-[#0f0f0f] border border-[#00b4d8]/30 rounded-3xl text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/40 rounded-full text-red-400 text-sm font-medium mb-6">
                            🔥 Limited Time Offer
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            MEGA BUNDLE: All 7 Products
                        </h3>

                        <div className="flex items-center justify-center gap-4 mb-4">
                            <span className="text-5xl font-bold text-[#00b4d8]">${bundlePrice}</span>
                            <div className="text-left">
                                <span className="text-2xl text-gray-500 line-through block">${totalValue}</span>
                                <span className="text-green-400 font-bold">Save ${totalValue - bundlePrice}</span>
                            </div>
                        </div>

                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Get everything: Shopify snippets, freelancer templates, Notion system, content tools, AI prompts, and more.
                        </p>

                        <Link
                            href="https://nest-digital-studio.myshopify.com/cart/bundle"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] rounded-xl text-xl font-bold hover:shadow-[0_0_60px_rgba(0,180,216,0.5)] transition-all duration-300 hover:scale-105"
                        >
                            GET THE BUNDLE - ${bundlePrice}
                            <ArrowRight className="w-6 h-6" />
                        </Link>

                        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
                            <span>✓ Instant access</span>
                            <span>✓ 30-day guarantee</span>
                            <span>✓ Lifetime updates</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
