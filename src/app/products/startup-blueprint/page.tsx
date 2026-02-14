import ProductLanding from '@/components/landing/ProductLanding';

export const metadata = {
    title: 'Startup Launch Blueprint - Launch Your Idea | Nest Digital Studio',
    description: 'Step-by-step system to validate and launch your startup. From idea to first customers in 30 days.',
};

const startupBlueprint = {
    title: 'Stop planning. Start launching.',
    tagline: 'The 30-day blueprint to go from "I have an idea" to "I have my first customers."',
    price: 17,
    originalPrice: 49,
    checkoutUrl: 'https://nest-digital-studio.myshopify.com/cart/51362452176168:1',
    heroImage: '/mockups/startup_mockup_v2.png',

    painPoints: [
        'Been sitting on "the idea" for months (years?) but never launching',
        'Don\'t know if people will pay for your product before you build it',
        'Paralyzed by decisions: name, logo, tech stack, pricing...',
        'Spending time on things that don\'t matter and avoiding what does: selling',
        'Watching others launch worse projects than yours and have success',
    ],

    features: [
        {
            title: 'Validation Framework',
            description: 'Validate your idea in 7 days BEFORE building anything. Avoid months of wasted work.'
        },
        {
            title: '30-Day Roadmap',
            description: 'Day by day. Every task. Every decision. No analysis paralysis.'
        },
        {
            title: 'MVP Checklist',
            description: 'The absolute minimum you need to launch. No more, no less.'
        },
        {
            title: 'Landing Page Templates',
            description: 'Pre-sale pages that validate demand before building the product.'
        },
        {
            title: 'Outreach Scripts',
            description: 'Emails and messages to get your first 10 paying customers.'
        },
        {
            title: 'Pricing Framework',
            description: 'How to price something new. The formula that works.'
        },
    ],

    testimonials: [
        {
            name: '',
            role: 'Typical for founders who validate before building',
            text: 'Validation before coding prevents months of building something nobody wants.',
            result: 'Avoid wasted time'
        },
        {
            name: '',
            role: 'Typical when following structured launch roadmap',
            text: 'A clear day-by-day plan eliminates decision fatigue and keeps momentum.',
            result: 'Launch faster'
        },
        {
            name: '',
            role: 'Based on outreach scripts for early adopters',
            text: 'Pre-written outreach messages make finding first customers less awkward.',
            result: 'First customers'
        },
    ],

    bonuses: [
        { title: 'Lifetime updates (new frameworks and templates)', value: '$67' },
        { title: 'Email support for launch strategy questions', value: '$37' },
    ],

    faqs: [
        {
            question: 'What types of startups does it work for?',
            answer: 'Software, info-products, productized services, e-commerce. Anything you sell online.'
        },
        {
            question: 'Do I need to know how to code?',
            answer: 'No. The blueprint includes no-code options for technical MVPs.'
        },
        {
            question: 'What if my idea is very different?',
            answer: 'The frameworks are universal. Validation and launching work the same for all ideas.'
        },
        {
            question: 'Is there a guarantee?',
            answer: '30 days. If it doesn\'t help you launch faster, we refund your money.'
        },
    ],
};

export default function StartupBlueprintPage() {
    return <ProductLanding product={startupBlueprint} />;
}
