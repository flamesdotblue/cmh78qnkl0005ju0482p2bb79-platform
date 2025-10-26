import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[88vh] flex items-center">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-700">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500"></span>
            Live on-chain, curated in pixels
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Curate, trade and showcase crypto art with a vibrant, futuristic aesthetic
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl">
            A fresh reimagining with the same bold colors you love: holographic gradients, neon edges, and immersive 3D. Discover rare digital art and collections.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#features"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-xl text-white bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500 shadow hover:opacity-95 transition"
            >
              Get Started <ArrowRight size={18} />
            </a>
            <a
              href="#collections"
              className="inline-flex h-11 items-center px-5 rounded-xl border border-gray-200 bg-white/80 backdrop-blur hover:border-gray-300 transition"
            >
              Explore Collections
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
