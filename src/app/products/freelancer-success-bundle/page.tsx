import ProductLanding from '@/components/landing/ProductLanding';

export const metadata = {
    title: 'Freelancer Success Bundle - Contracts, Proposals & Pricing | Nest Digital Studio',
    description: 'Everything you need to charge more and work less. Contract templates, winning proposals, pricing calculator.',
};

const freelancerBundle = {
    title: 'Stop winging your freelance business',
    tagline: 'Bulletproof contracts, proposals that close, and pricing that commands respect. The complete professional freelancer system.',
    price: 37,
    originalPrice: 149,
    checkoutUrl: 'https://nest-digital-studio.myshopify.com/cart/51362234368296:1',
    heroImage: '/mockups/freelancer_mockup_v2.png',

    painPoints: [
        'Charging less than you\'re worth because you don\'t know how to justify your prices',
        'Clients asking for "one more small change" that turns into weeks of free work',
        'Spending hours creating proposals from scratch that sometimes get no response',
        'Afraid of contracts because you don\'t know what they should include',
        'Cash flow is a mess because clients pay whenever they feel like it',
    ],

    features: [
        {
            title: '5 Professional Contracts',
            description: 'Web projects, consulting, retainers, hourly work, NDA. Ready to sign.'
        },
        {
            title: 'Proposal Templates',
            description: 'Proposals that close deals. Proven structure with high success rate.'
        },
        {
            title: 'Pricing Calculator',
            description: 'Never undercharge again. Formula to calculate your real hourly rate.'
        },
        {
            title: 'Client Onboarding System',
            description: 'Impress from day one. Checklist, welcome message, clear expectations.'
        },
        {
            title: 'Negotiation Scripts',
            description: 'What to say when they ask for a discount. How to raise prices without losing clients.'
        },
        {
            title: 'Invoice Template',
            description: 'Professional invoices with payment terms that protect you. Excel + PDF.'
        },
    ],

    testimonials: [
        {
            name: '',
            role: 'Typical for freelancers using negotiation scripts',
            text: 'Confident pricing conversations lead to higher project values.',
            result: 'Charge more'
        },
        {
            name: '',
            role: 'Typical when using clear contract terms',
            text: 'Defined scope and change request clauses prevent unpaid extra work.',
            result: 'No scope creep'
        },
        {
            name: '',
            role: 'Based on template efficiency vs. starting from scratch',
            text: 'Pre-built proposals reduce preparation time significantly.',
            result: 'Save hours'
        },
    ],

    bonuses: [
        { title: 'Lifetime updates (new templates added)', value: '$97' },
        { title: 'Email support for customization help', value: '$47' },
    ],

    faqs: [
        {
            question: 'Does it work for any type of freelancer?',
            answer: 'Yes. Templates are designed to adapt to any service: design, development, marketing, consulting, writing, etc.'
        },
        {
            question: 'Are the contracts legally binding?',
            answer: 'They are solid base templates used by thousands of freelancers. For critical matters, we recommend legal review in your country.'
        },
        {
            question: 'Can I edit them?',
            answer: 'Absolutely. Word, Google Docs, and Notion formats. Customize with your brand and terms.'
        },
        {
            question: 'Is there a guarantee?',
            answer: '30 days. If you don\'t improve your sales process and client management, we refund your money.'
        },
    ],
};

export default function FreelancerBundlePage() {
    return <ProductLanding product={freelancerBundle} />;
}
