'use client';

import { useState } from 'react';
import { DollarSign, TrendingUp, TrendingDown, Percent, UploadCloud } from 'lucide-react';

type Tx = { date: string; desc: string; amt: number; cat: string };

const mockTxs: Tx[] = [
  { date: '03 Mar', desc: 'Google Cloud', amt: -281.96, cat: 'AI Cloud' },
  { date: '04 Mar', desc: 'Openrouter', amt: -177.24, cat: 'LLM Subs' },
  { date: '07 Mar', desc: 'Godaddy', amt: -401.35, cat: 'Hosting' },
  { date: '10 Mar', desc: 'Google Ads', amt: -429.99, cat: 'Ads' },
  { date: '24 Mar', desc: 'Elevenlabs', amt: -100.97, cat: 'AI Voice' },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [txs, setTxs] = useState(mockTxs);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const newTx: Tx = { 
        date: new Date().toLocaleDateString(), 
        desc: files[0].name, 
        amt: -150, 
        cat: 'New Sub' 
      };
      setTxs([newTx, ...txs]);
      setIsOpen(false);
    }
  };

  return (
    <main className="min-h-screen p-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 bg-black">
      {/* Cards */}
      <div className="p-8 rounded-2xl border border-green-400 bg-black/50 hover:scale-105 transition-all shadow-[0_0_20px_#39ff14]">
        <DollarSign className="w-12 h-12 text-green-400 mb-4" />
        <h3 className="text-xl font-bold mb-2 text-white">Revenue</h3>
        <div className="text-4xl font-black text-green-400">R 15,000</div>
      </div>
      
      <div className="p-8 rounded-2xl border border-green-400 bg-black/50 hover:scale-105 transition-all shadow-[0_0_20px_#39ff14]">
        <TrendingDown className="w-12 h-12 text-green-400 mb-4" />
        <h3 className="text-xl font-bold mb-2 text-white">Expenses</h3>
        <div className="text-4xl font-black text-green-400">R 43,000</div>
      </div>
      
      <div className="p-8 rounded-2xl border border-green-400 bg-black/50 hover:scale-105 transition-all shadow-[0_0_20px_#39ff14]">
        <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
        <h3 className="text-xl font-bold mb-2 text-white">Net Profit</h3>
        <div className="text-4xl font-black text-green-400">R 69,200</div>
      </div>
      
      <div className="p-8 rounded-2xl border border-green-400 bg-black/50 hover:scale-105 transition-all shadow-[0_0_20px_#39ff14]">
        <Percent className="w-12 h-12 text-green-400 mb-4" />
        <h3 className="text-xl font-bold mb-2 text-white">VAT excl (ZAR)</h3>
        <div className="text-4xl font-black text-green-400">R 3,026</div>
      </div>

      {/* Bank Rec Btn */}
      <button
        onClick={() => setIsOpen(true)}
        className="col-span-full p-12 rounded-3xl border-4 border-dashed border-green-400 bg-black/30 font-black text-3xl flex flex-col items-center space-y-4 group hover:scale-105 transition-all shadow-[0_0_20px_#39ff14]"
      >
        <UploadCloud className="w-24 h-24 text-green-400 group-hover:rotate-12 transition-all" />
        <span className="text-white">One Click Bank Rec</span>
        <span className="text-lg text-white/75">Drop bank statement here</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="col-span-full fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-4xl p-12 border-4 border-dashed border-green-400 rounded-3xl bg-black text-center shadow-[0_0_40px_#39ff14]"
            onClick={(e) => e.stopPropagation()}
          >
            <UploadCloud className="w-32 h-32 text-green-400 mx-auto mb-8 animate-pulse" />
            <h2 className="text-4xl font-black mb-4 text-white">Drop Bank Statement</h2>
            <p className="text-xl text-white/75 mb-12">We&apos;ll auto-match & categorize</p>
            
            <input 
              type="file" 
              accept=".pdf,.csv,.xlsx" 
              onChange={handleFileSelect}
              className="mb-8 block mx-auto text-green-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-400 file:text-black hover:file:bg-green-500"
            />
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-white">Recent Transactions</h3>
              <div className="grid grid-cols-4 gap-4 text-left bg-black/50 rounded-2xl p-6 overflow-x-auto">
                <div className="font-bold text-green-400">Date</div>
                <div className="font-bold text-green-400">Description</div>
                <div className="font-bold text-green-400">Amount</div>
                <div className="font-bold text-green-400">Category</div>
                {txs.slice(0,5).map((tx, i) => (
                  <div key={i} className="contents">
                    <div className="text-white">{tx.date}</div>
                    <div className="text-white">{tx.desc}</div>
                    <div className={tx.amt < 0 ? 'text-red-400' : 'text-green-400'}>{tx.amt.toLocaleString()}</div>
                    <div className="capitalize bg-green-400/10 px-3 py-1 rounded-full text-green-400 font-bold text-sm">{tx.cat}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="col-span-full p-8 rounded-2xl bg-gradient-to-r from-green-400/20 to-black border border-green-400 text-center shadow-[0_0_20px_#39ff14]">
        <a href="https://jobos.pro" className="text-2xl font-black text-green-400 block hover:shadow-[0_0_40px_#39ff14] transition-all">
          Upgrade to JobOS Pro → CRM + Accounting
        </a>
      </div>
    </main>
  );
}
