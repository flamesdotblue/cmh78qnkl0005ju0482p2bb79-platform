import React from 'react';
import { Shield, Zap, Image, Wallet, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Image size={20} className="text-fuchsia-600" />,
    title: 'High-fidelity Galleries',
    desc: 'Curated layouts for art and collectibles with crisp, responsive rendering.'
  },
  {
    icon: <Shield size={20} className="text-purple-600" />,
    title: 'Secure & Transparent',
    desc: 'On-chain provenance and verifiable ownership across supported networks.'
  },
  {
    icon: <Zap size={20} className="text-cyan-600" />,
    title: 'Fast & Fluid UX',
    desc: 'Optimized interactions powered by modern React and streaming UI.'
  },
  {
    icon: <Wallet size={20} className="text-fuchsia-600" />,
    title: 'Multi-wallet Ready',
    desc: 'Connect with your favorite wallet to mint, buy, and showcase.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-20%,rgba(168,85,247,0.12),transparent)]" aria-hidden></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Designed for creators and collectors</h2>
            <p className="mt-3 text-gray-700 max-w-2xl">A polished, modern interface with CryptoPix-inspired neon gradients and futuristic edges, reimagined for clarity and speed.</p>
          </div>
          <a href="#collections" className="inline-flex items-center gap-2 h-11 px-5 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition">
            Browse Collections <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-purple-50 via-fuchsia-50 to-cyan-50 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-100 via-fuchsia-100 to-cyan-100 flex items-center justify-center">
                  {f.icon}
                </div>
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="collections" className="mt-16">
          <h3 className="text-2xl font-semibold">Trending Collections</h3>
          <p className="text-gray-700 mt-2">Showcase of vibrant drops with holographic accents and crisp layouts.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-200 via-fuchsia-200 to-cyan-200" />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Neon Pixels #{i}</h4>
                      <p className="text-sm text-gray-600">By Studio Aurora</p>
                    </div>
                    <span className="text-sm font-medium bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">+12.4%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
