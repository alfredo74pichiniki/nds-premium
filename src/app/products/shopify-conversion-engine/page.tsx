import ProductLanding from '@/components/landing/ProductLanding';

export const metadata = {
    title: 'Shopify Conversion Engine - 15+ Liquid Snippets | Nest Digital Studio',
    description: 'Replace $100+/month in apps with native code. Liquid snippets that boost conversions 15-25%. One payment, zero monthly fees.',
};

const shopifyConversionEngine = {
    title: 'Stop paying $100+/month for Shopify apps',
    tagline: '15 native Liquid snippets that replace your most expensive apps. One payment, $0 monthly fees, faster pages.',
    price: 47,
    originalPrice: 197,
    checkoutUrl: 'https://nest-digital-studio.myshopify.com/cart/51362442215720:1',
    heroImage: '/mockups/shopify_mockup_v2.png',

    painPoints: [
        'Paying $10-15/month for a simple countdown timer',
        'Paying $20-30/month for upsell popups that slow down your store',
        'Your Core Web Vitals are destroyed by external app scripts',
        'Every app you install adds more bloat and hurts your Google ranking',
        'Monthly app costs exceed $100 and keep growing',
    ],

    features: [
        {
            title: 'Sticky Add-to-Cart Bar',
            description: 'Floating bar that follows the user. Boosts conversions 15-25%. Zero apps.'
        },
        {
            title: 'Dynamic Countdown Timer',
            description: 'Create real urgency. Configurable per product. No monthly subscriptions.'
        },
        {
            title: 'Stock Scarcity Indicator',
            description: '"Only 3 left" - FOMO that converts browsers into buyers.'
        },
        {
            title: 'Exit Intent Popup',
            description: 'Capture visitors before they leave. Built-in email capture.'
        },
        {
            title: 'Native Upsell Popup',
            description: 'Increase AOV without $30/month apps. "Customers also bought..."'
        },
        {
            title: 'Free Shipping Progress Bar',
            description: '"Add $15 more for free shipping" - Increases cart value.'
        },
        {
            title: 'Quick Buy Button',
            description: 'Buy without going to product page. Reduces friction, increases sales.'
        },
        {
            title: 'Social Proof Notifications',
            description: '"John from NYC just bought..." - No $15/month apps needed.'
        },
        {
            title: 'Animated Trust Badges',
            description: 'Instant credibility. Guarantees, secure payments, free shipping.'
        },
    ],

    // Expected results without fake names - generic outcomes
    testimonials: [
        {
            name: '',
            role: 'Typical for store owners with 3+ paid apps',
            text: 'Replace countdown, upsell, and popup apps with native code that loads 10x faster.',
            result: 'Save $50-100/mo'
        },
        {
            name: '',
            role: 'Typical for stores with slow PageSpeed scores',
            text: 'Remove external app scripts and see immediate improvement in Core Web Vitals.',
            result: 'Faster loading'
        },
        {
            name: '',
            role: 'Based on conversion rate optimization studies',
            text: 'Countdown timers and scarcity indicators create urgency that drives immediate purchases.',
            result: 'Higher conversions'
        },
    ],

    bonuses: [
        { title: 'Lifetime updates (when Shopify changes, we update)', value: '$197' },
        { title: 'Email support for installation help', value: '$97' },
    ],

    faqs: [
        {
            question: 'Do I need coding skills?',
            answer: 'No. Every snippet is copy-paste with clear instructions.'
        },
        {
            question: 'Does it work with any Shopify theme?',
            answer: 'Yes. Snippets are tested with Dawn, Debut, and all popular themes. If you have issues, we help you free of charge.'
        },
        {
            question: 'Can I really cancel my current apps?',
            answer: 'Yes. These snippets replicate exactly the functionality of countdown, upsell, exit popup, trust badge apps, etc.'
        },
        {
            question: 'Is there a guarantee?',
            answer: '30 days. If you don\'t save more than you paid in app subscriptions, we refund 100%.'
        },
        {
            question: 'Will it slow down my store?',
            answer: 'The opposite. Native Liquid code loads 10x faster than external app scripts. Your PageSpeed will improve.'
        },
    ],
};

export default function ShopifyConversionEnginePage() {
    return <ProductLanding product={shopifyConversionEngine} />;
}
