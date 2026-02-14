import ProductLanding from '@/components/landing/ProductLanding';

export const metadata = {
    title: 'Social Media Content Factory - Batch Your Content | Nest Digital Studio',
    description: 'Complete system to create content in batches. Templates, calendars, automation workflows.',
};

const socialMediaFactory = {
    title: 'Create 30 days of content in 4 hours',
    tagline: 'The batching system used by creators who post daily without burning out.',
    price: 19,
    originalPrice: 69,
    checkoutUrl: 'https://nest-digital-studio.myshopify.com/cart/51362231222568:1',
    heroImage: '/mockups/social_factory_mockup_v2.png',

    painPoints: [
        'Creating content "when you can" and sometimes going weeks without posting',
        'Each post takes 1-2 hours because you start from scratch',
        'Burning out creating content because it\'s endless daily work',
        'No system: ideas, production, and publishing are chaotic',
        'Posting inconsistently and the algorithm punishes you for it',
    ],

    features: [
        {
            title: 'Batching System',
            description: 'Create ALL your month\'s content in one 4-hour session. The complete system.'
        },
        {
            title: 'Notion/Sheets Templates',
            description: 'Your organized content factory. Ideas → Production → Scheduled.'
        },
        {
            title: 'Visual Calendar',
            description: 'See your entire month. Distribute content types for maximum impact.'
        },
        {
            title: 'Automation Workflows',
            description: 'Connect tools. Create once, publish on 4 platforms.'
        },
        {
            title: 'Production Checklist',
            description: 'Step by step for each content type. Never forget anything.'
        },
        {
            title: 'Recycling System',
            description: 'Repurpose your best content. One post → Reel → Thread → Newsletter.'
        },
    ],

    testimonials: [
        {
            name: '',
            role: 'Typical time savings with batching vs. daily creation',
            text: 'Batching content in one session frees up the rest of your week for other work.',
            result: 'Save 10+ hrs/week'
        },
        {
            name: '',
            role: 'Typical output using content recycling',
            text: 'One piece of content becomes 4+ when you repurpose for different platforms.',
            result: 'Multiply content'
        },
        {
            name: '',
            role: 'Based on scheduling vs. real-time posting',
            text: 'Never scramble to post. Everything scheduled in advance.',
            result: 'Peace of mind'
        },
    ],

    bonuses: [
        { title: 'Lifetime updates (new workflow integrations)', value: '$67' },
        { title: 'Email support for setup questions', value: '$37' },
    ],

    faqs: [
        {
            question: 'How long does it take to implement?',
            answer: 'One afternoon. Set it up once and use it forever.'
        },
        {
            question: 'Does it work for small teams?',
            answer: 'Yes. Includes collaborative version for up to 5 people.'
        },
        {
            question: 'What tools do I need?',
            answer: 'Notion or Google Sheets (free). Optionally Buffer/Later for scheduling.'
        },
        {
            question: 'Is there a guarantee?',
            answer: '30 days. If you don\'t reduce your content creation time, we refund your money.'
        },
    ],
};

export default function SocialMediaFactoryPage() {
    return <ProductLanding product={socialMediaFactory} />;
}
