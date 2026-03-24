import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-01-27.acacia' as Stripe.LatestApiVersion,
  });
}

// Catálogo — slugs y precios EXACTOS del products page
const PRODUCTS: Record<string, { name: string; price: number; description: string }> = {
  'personal-finance-dashboard': {
    name: 'Personal Finance Dashboard',
    price: 2900,
    description: 'Google Sheets template to track income, expenses, investments & net worth. 11 automated sheets.',
  },
  'travel-planner-bundle': {
    name: 'Travel Planner Bundle',
    price: 3499,
    description: 'Google Sheets + Notion templates for trip planning, budgets & itineraries. 10-sheet planner.',
  },
  'habit-tracker-2026': {
    name: 'Habit Tracker Pro 2026',
    price: 999,
    description: 'Visual habit tracking system with streaks, analytics & weekly reviews. 19 sheets.',
  },
  'ai-beginners-guide': {
    name: 'AI for Beginners: 30-Day Guide',
    price: 999,
    description: 'Learn ChatGPT, Claude, Gemini & more — from zero to productive in 30 days. 200+ pages.',
  },
  'side-hustle-income-tracker': {
    name: 'Side Hustle Income Tracker Pro',
    price: 2499,
    description: 'Track multiple income streams, expenses, and profit margins in one dashboard. 15 sheets.',
  },
  'meal-planner-2026': {
    name: 'Ultimate Meal Planner 2026',
    price: 1499,
    description: 'Weekly meal planning, grocery lists, nutrition tracking & recipe organizer. 12 sheets.',
  },
  'student-productivity': {
    name: 'Student Productivity System',
    price: 1299,
    description: 'GPA tracker, assignment planner, study scheduler & exam prep all-in-one. 15 sheets.',
  },
  'content-creator-toolkit': {
    name: 'Content Creator Toolkit',
    price: 2499,
    description: 'Content calendar, analytics dashboard, brand kit & collaboration tracker. 14 sheets.',
  },
  'wedding-planner': {
    name: 'Ultimate Wedding Planner',
    price: 2999,
    description: 'Budget tracker, guest list manager, vendor contacts & timeline planner. 16 sheets.',
  },
};

export async function POST(request: NextRequest) {
  try {
    const { productSlug } = await request.json();

    const product = PRODUCTS[productSlug];
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
      customer_creation: 'always',
      metadata: {
        productSlug,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
