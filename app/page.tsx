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
      const newTx: Tx = { date: new Date().toLocaleDateString(), desc: files[0].name, amt: -150, cat: 'New Sub' };
      setTxs([newTx, ...txs]);
      setIsOpen(false);
    }
  };

  return (
    <main className="min-h-screen p-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
      {/* Cards */}
      <div className="card-hover p-8 rounded-2xl border border-neon bg-black/50 glow-xl">
        <DollarSign className="w-12 h-12 text-neon mb-4" />
        <h3 className="text-xl font-bold mb-2">Revenue</h3>
        <div className="text-4xl font-black text-neon">R 15,000</div>
      </div>
      <div className="card-hover p-8 rounded-2xl border border-neon bg-black/50 glow-xl">
        <TrendingDown className="w-12 h-12 text-neon mb-4" />
        <h3 className="text-xl font-bold mb-2">Expenses</h3>
        <div className="text-4xl font-black text-neon">R 43,000</div>
      </div>
      <div className="card-hover p-8 rounded-2xl border border-neon bg-black/50 glow-xl">
        <TrendingUp className="w-12 h-12 text-neon mb-4" />
        <h3 className="text-xl font-bold mb-2">Net Profit</h3>
        <div className="text-4xl font-black text-neon">R 69,200</div>
      </div>
      <div className="card-hover p-8 rounded-2xl border border-neon bg-black/50 glow-xl lg:col-span-2 xl:col-span-1">
        <Percent className="w-12 h-12 text-neon mb-4" />
        <h3 className="text-xl font-bold mb-2">VAT excl (ZAR)</h3>
        <div className="text-4xl font-black text-neon">R 3,026</div>
      </div>

      {/* Bank Rec Btn */}
      <button
        onClick={() => setIsOpen(true)}
        className="col-span-full card-hover p-12 rounded-3xl border-4 border-dashed border-neon bg-black/30 glow-xl font-black text-3xl flex flex-col items-center space-y-4 group hover:scale-105"
      >
        <UploadCloud className="w-24 h-24 text-neon group-hover:rotate-12 transition-all" />
        <span>One Click Bank Rec</span>
        <span className="text-lg opacity-75">Drop bank statement here</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="col-span-full fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-4xl p-12 border-4 border-dashed border-neon rounded-3xl glow-xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <UploadCloud className="w-32 h-32 text-neon mx-auto mb-8 animate-pulse" />
            <h2 className="text-4xl font-black mb-4">Drop Bank Statement</h2>
            <p className="text-xl opacity-75 mb-12">We&apos;ll auto-match & categorize</p>
            
            <input 
              type="file" 
              accept=".pdf,.csv,.xlsx" 
              onChange={handleFileSelect}
              className="mb-8 block mx-auto text-neon file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-neon file:text-black hover:file:bg-neon/80"
            />
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Recent Transactions</h3>
              <div className="grid grid-cols-4 gap-4 text-left bg-black/50 rounded-2xl p-6 overflow-x-auto">
                <div className="font-bold">Date</div>
                <div className="font-bold">Description</div>
                <div className="font-bold">Amount</div>
                <div className="font-bold">Category</div>
                {txs.slice(0,5).map((tx, i) => (
                  <div key={i} className="contents">
                    <div>{tx.date}</div>
                    <div>{tx.desc}</div>
                    <div className={tx.amt < 0 ? 'text-red-400' : 'text-green-400'}>{tx.amt.toLocaleString()}</div>
                    <div className="capitalize bg-neon/10 px-3 py-1 rounded-full text-neon font-bold text-sm">{tx.cat}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="col-span-full p-8 rounded-2xl bg-gradient-to-r from-neon/20 to-black border border-neon glow-xl text-center">
        <a href="https://jobos.pro" className="text-2xl font-black text-neon block hover:glow-xl transition-all">
          Upgrade to JobOS Pro → CRM + Accounting
        </a>
      </div>
    </main>
  );
}
