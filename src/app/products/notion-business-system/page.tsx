import ProductLanding from '@/components/landing/ProductLanding';

export const metadata = {
    title: 'Notion Business System - CRM, Projects, Finance | Nest Digital Studio',
    description: 'Your entire business in one tool. Complete Notion template with CRM, project management, finances and more.',
};

const notionSystem = {
    title: 'Stop using 12 apps to run your business',
    tagline: 'EVERYTHING in Notion: clients, projects, invoices, content, goals. One system that scales with you.',
    price: 27,
    originalPrice: 99,
    checkoutUrl: 'https://nest-digital-studio.myshopify.com/cart/51362225291560:1',
    heroImage: '/mockups/notion_mockup_v2.png',

    painPoints: [
        'Client info scattered across emails, spreadsheets, phone notes, and sticky notes',
        'Forgetting important follow-ups and losing sales opportunities',
        'No idea how much you made last month because your finances are a mess',
        'Every tool has its subscription: CRM, project management, calendars...',
        'Wasting 2+ hours/week searching for information that\'s "somewhere"',
    ],

    features: [
        {
            title: 'Client CRM',
            description: 'All your client info in one place. History, notes, projects, payments.'
        },
        {
            title: 'Project Management',
            description: 'Kanban, timeline, calendar. Every project with tasks, deadlines, and status.'
        },
        {
            title: 'Financial Tracker',
            description: 'Income, expenses, profit. Automatic. Know exactly what you earn in real time.'
        },
        {
            title: 'Content Calendar',
            description: 'Plan posts, newsletters, campaigns. Never run out of ideas again.'
        },
        {
            title: 'Goals System',
            description: 'Quarterly OKRs with weekly tracking. Measure your real progress.'
        },
        {
            title: '50+ Pre-built Views',
            description: 'Ready filters: overdue tasks, top clients, monthly revenue, to-dos...'
        },
    ],

    testimonials: [
        {
            name: '',
            role: 'Typical for solopreneurs consolidating tools',
            text: 'Replace separate CRM, project management, and spreadsheet apps with one unified system.',
            result: 'Reduce tool cost'
        },
        {
            name: '',
            role: 'Typical for small teams (2-5 people)',
            text: 'The system works collaboratively so your entire team stays aligned.',
            result: 'Team ready'
        },
        {
            name: '',
            role: 'Based on time savings from centralized information',
            text: 'Stop searching across multiple apps. Everything in one searchable place.',
            result: 'Save time weekly'
        },
    ],

    bonuses: [
        { title: 'Lifetime updates (new views and features added)', value: '$97' },
        { title: 'Email support for setup questions', value: '$47' },
    ],

    faqs: [
        {
            question: 'Do I need paid Notion?',
            answer: 'No. Works perfectly with Notion\'s free Personal plan.'
        },
        {
            question: 'Is it complicated to set up?',
            answer: 'One-click duplicate. Then just customize with your data.'
        },
        {
            question: 'Can I modify it?',
            answer: 'It\'s yours forever. Add, remove, modify whatever you need.'
        },
        {
            question: 'Is there a guarantee?',
            answer: '30 days. Easy decision if it doesn\'t work for you.'
        },
    ],
};

export default function NotionSystemPage() {
    return <ProductLanding product={notionSystem} />;
}
