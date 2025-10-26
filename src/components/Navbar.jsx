import React from 'react';
import { Rocket, Wallet, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/60 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-600 to-cyan-400 p-[2px]">
            <div className="h-full w-full rounded-[10px] bg-white flex items-center justify-center">
              <Rocket size={18} className="text-purple-600" />
            </div>
          </div>
          <span className="font-semibold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500">CryptoPix</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#collections" className="hover:text-gray-900 transition">Collections</a>
          <a href="#roadmap" className="hover:text-gray-900 transition">Roadmap</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-xl border border-gray-200 hover:border-gray-300 text-gray-800 bg-white transition">
            <Star size={16} /> Explore
          </button>
          <button className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500 text-white shadow-sm hover:shadow-md transition">
            <Wallet size={16} /> Connect
          </button>
        </div>
      </div>
    </header>
  );
}
