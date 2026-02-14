import ProductLanding from '@/components/landing/ProductLanding';

export const metadata = {
    title: 'AI Prompt Engineering Mastery - Master ChatGPT | Nest Digital Studio',
    description: '500+ proven prompts for ChatGPT, Claude, Gemini and more. Master AI prompting.',
};

const aiPromptMastery = {
    title: 'Stop using ChatGPT like a search engine',
    tagline: '500+ prompts for ChatGPT, Claude & Gemini. Turn any AI into your most productive assistant. It\'s not the AI, it\'s your prompts.',
    price: 17,
    originalPrice: 59,
    checkoutUrl: 'https://nest-digital-studio.myshopify.com/cart/51362446573864:1',
    heroImage: '/mockups/ai_prompts_mockup_v2.png',

    painPoints: [
        'ChatGPT gives you generic responses that are useless',
        'Spending more time refining prompts than doing the task yourself',
        'Don\'t understand why it works for others but not for you',
        'Paying $20/month for ChatGPT Plus but not getting real value',
        'The AI "doesn\'t understand" what you want and you get frustrated',
    ],

    features: [
        {
            title: '500+ Prompt Library',
            description: 'Categories: writing, code, marketing, analysis, creativity. Ready to copy.'
        },
        {
            title: 'CRAFT Formula',
            description: 'The system for creating perfect prompts: Context, Role, Action, Format, Tone.'
        },
        {
            title: 'Chained Prompts',
            description: 'Prompt sequences for complex tasks. AI that reasons step by step.'
        },
        {
            title: 'Industry Templates',
            description: 'Marketing, code, writing, research. Every industry has its prompts.'
        },
        {
            title: 'Common Mistakes',
            description: 'The 20 errors that ruin your prompts. And how to avoid them all.'
        },
        {
            title: 'AI Comparison Guide',
            description: 'ChatGPT vs Claude vs Gemini. Which to use for what. Updated guide.'
        },
    ],

    testimonials: [
        {
            name: '',
            role: 'Typical for users applying structured prompts',
            text: 'Structured prompts with context and format instructions get dramatically better AI outputs.',
            result: 'Better AI outputs'
        },
        {
            name: '',
            role: 'Typical for debugging and code assistance',
            text: 'The right prompts turn AI into a powerful debugging assistant.',
            result: 'Faster coding'
        },
        {
            name: '',
            role: 'Based on prompt efficiency vs. trial and error',
            text: 'Stop wasting time with trial and error. Use prompts that work first time.',
            result: 'No more rewrites'
        },
    ],

    bonuses: [
        { title: 'Lifetime updates (new AI models covered)', value: '$97' },
        { title: 'Email support for prompt customization', value: '$47' },
    ],

    faqs: [
        {
            question: 'Does it work with free ChatGPT?',
            answer: 'Yes. The prompts work with the free version. Plus just gives longer responses.'
        },
        {
            question: 'Does it also work for Claude and others?',
            answer: 'Yes. The principles are universal. Includes specific notes for Claude, Gemini, and Copilot.'
        },
        {
            question: 'Does it get updated with new AIs?',
            answer: 'Yes. Lifetime updates when new capabilities and models come out.'
        },
        {
            question: 'Is there a guarantee?',
            answer: '30 days. If you don\'t improve your AI results, we refund your money.'
        },
    ],
};

export default function AIPromptMasteryPage() {
    return <ProductLanding product={aiPromptMastery} />;
}
