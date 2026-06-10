'use client';

import React, { useState } from 'react';
import { Download, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

interface LeadMagnetProps {
  productName?: string;
  hook?: string;
}

export default function LeadMagnet({ 
  productName = "Ultimate Meal Planner", 
  hook = "Download our free Excel template to organize your week and save time." 
}: LeadMagnetProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    // Simulate API call for now (will connect to Resend/Database later)
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="my-8 rounded-2xl bg-green-50 border border-green-200 p-8 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-green-900 mb-2">Check your inbox!</h3>
        <p className="text-green-700">
          We've just sent the {productName} to <strong>{email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="my-10 relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 shadow-sm">
      {/* Decorative background element */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-100/50 blur-3xl pointer-events-none" />
      
      <div className="relative p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
        {/* Left column: Copy */}
        <div className="flex-1 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            <Download className="h-3.5 w-3.5" />
            FREE DOWNLOAD
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            Get the {productName}
          </h3>
          
          <p className="text-slate-600">
            {hook}
          </p>
        </div>

        {/* Right column: Form */}
        <div className="w-full md:w-[340px] shrink-0">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>
            
            <button
              type="submit"
              disabled={status === 'loading'}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 disabled:opacity-70"
            >
              {status === 'loading' ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <>
                  Send it to me
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
            <p className="text-center text-xs text-slate-400 mt-1">
              100% free. No spam. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
