'use client';

import { useState } from 'react';
import { DollarSign, TrendingUp, TrendingDown, Percent, UploadCloud } from 'lucide-react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen p-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 bg-black">
      <div className="p-8 rounded-2xl border border-green-400 bg-black/50">
        <DollarSign className="w-12 h-12 text-green-400 mb-4" />
        <h3 className="text-xl font-bold mb-2 text-white">Revenue</h3>
        <div className="text-4xl font-black text-green-400">R 15,000</div>
      </div>
      
      <div className="p-8 rounded-2xl border border-green-400 bg-black/50">
        <TrendingDown className="w-12 h-12 text-green-400 mb-4" />
        <h3 className="text-xl font-bold mb-2 text-white">Expenses</h3>
        <div className="text-4xl font-black text-green-400">R 43,000</div>
      </div>
      
      <div className="p-8 rounded-2xl border border-green-400 bg-black/50">
        <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
        <h3 className="text-xl font-bold mb-2 text-white">Net Profit</h3>
        <div className="text-4xl font-black text-green-400">R 69,200</div>
      </div>
      
      <div className="p-8 rounded-2xl border border-green-400 bg-black/50">
        <Percent className="w-12 h-12 text-green-400 mb-4" />
        <h3 className="text-xl font-bold mb-2 text-white">VAT excl</h3>
        <div className="text-4xl font-black text-green-400">R 3,026</div>
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className="col-span-full p-12 rounded-3xl border-4 border-dashed border-green-400 bg-black/30 font-black text-3xl flex flex-col items-center space-y-4 text-white"
      >
        <UploadCloud className="w-24 h-24 text-green-400" />
        <span>One Click Bank Rec</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/80" onClick={() => setIsOpen(false)}>
          <div className="w-full max-w-2xl p-8 border-4 border-dashed border-green-400 rounded-3xl bg-black text-center">
            <h2 className="text-3xl font-black mb-4 text-white">Bank Reconciliation</h2>
            <p className="text-white/75">Feature coming soon...</p>
          </div>
        </div>
      )}
    </main>
  );
}
