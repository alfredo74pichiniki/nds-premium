'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Loader2 } from 'lucide-react';

export function BuyButton({ slug, price }: { slug: string; price: string }) {
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productSlug: slug }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error('No checkout URL returned');
      }
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.button
      onClick={handleBuy}
      disabled={loading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full py-3.5 px-6 rounded-xl font-bold text-white
        bg-gradient-to-r from-emerald-500 to-cyan-500
        hover:from-emerald-400 hover:to-cyan-400
        transition-all duration-300 shadow-lg hover:shadow-emerald-500/25
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center gap-2"
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <ShoppingCart className="w-5 h-5" />
          Buy Now — {price}
        </>
      )}
    </motion.button>
  );
}
