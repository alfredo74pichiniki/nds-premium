import ProductLanding from '@/components/landing/ProductLanding';

export const metadata = {
    title: 'Content Creator Empire Toolkit - 100+ Templates | Nest Digital Studio',
    description: 'Scripts, hooks, post templates, carousels. The complete content creator arsenal.',
};

const contentCreatorToolkit = {
    title: 'Stop staring at a blank screen',
    tagline: '100+ proven templates that generate engagement. Scripts, hooks, carousels, captions. Copy, paste, publish.',
    price: 27,
    originalPrice: 99,
    checkoutUrl: 'https://nest-digital-studio.myshopify.com/cart/51349653225768:1',
    heroImage: '/mockups/content_creator_mockup_v2.png',

    painPoints: [
        'Spending hours deciding what to post and ending up posting nothing',
        'Low engagement because your hooks don\'t capture attention',
        'Copying what works for others but it doesn\'t work for you',
        'No system: posting whenever you remember',
        'Frustrated seeing creators with less talent than you having more success',
    ],

    features: [
        {
            title: '50 Scroll-Stopping Hooks',
            description: 'The first line is everything. Proven hooks with high engagement rate.'
        },
        {
            title: '30 Post Templates',
            description: 'Ready to fill in. Story, list, contrarian, tutorial, behind the scenes...'
        },
        {
            title: '20 Carousel Structures',
            description: 'Carousels that get saved and shared. The format that grows fastest.'
        },
        {
            title: '90-Day Content Calendar',
            description: 'What to post every day. Never again "I don\'t know what to post."'
        },
        {
            title: 'Video/Reel Scripts',
            description: '15, 30, 60 second structures. Hook → Content → CTA.'
        },
        {
            title: 'Caption Formulas',
            description: 'AIDA, PAS, storytelling. Captions that convert scrollers into followers.'
        },
    ],

    testimonials: [
        {
            name: '',
            role: 'Typical for creators using proven hook formulas',
            text: 'Better hooks mean more people stop scrolling and engage with your content.',
            result: 'Higher engagement'
        },
        {
            name: '',
            role: 'Typical time savings using templates vs. blank page',
            text: 'Stop starting from scratch. Fill in templates instead of staring at blank screens.',
            result: 'Create faster'
        },
        {
            name: '',
            role: 'Based on consistent posting schedules',
            text: 'A content calendar removes decision fatigue and keeps you consistent.',
            result: 'Post consistently'
        },
    ],

    bonuses: [
        { title: 'Lifetime updates (new templates added regularly)', value: '$97' },
        { title: 'Email support for content strategy questions', value: '$47' },
    ],

    faqs: [
        {
            question: 'Which platforms does it work for?',
            answer: 'Instagram, TikTok, LinkedIn, Twitter/X, YouTube shorts. The formulas are universal.'
        },
        {
            question: 'Do I need a big following?',
            answer: 'No. In fact it\'s better to start with this. You\'ll grow faster with content that works.'
        },
        {
            question: 'Can I use them in my niche?',
            answer: 'Yes. These are structures you adapt to your topic. Works for fitness, marketing, finance, lifestyle, anything.'
        },
        {
            question: 'Is there a guarantee?',
            answer: '30 days. If your content doesn\'t improve, we refund your money.'
        },
    ],
};

export default function ContentCreatorToolkitPage() {
    return <ProductLanding product={contentCreatorToolkit} />;
}
