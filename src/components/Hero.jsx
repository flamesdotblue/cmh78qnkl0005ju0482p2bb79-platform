import React from 'react';
import { ShieldCheck, ArrowRight, Fingerprint } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
        <div className="absolute -top-40 right-[-20%] h-[600px] w-[900px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(600px_300px_at_70%_20%,rgba(168,85,247,0.3),transparent)]" />
        <div className="absolute top-40 left-[-10%] h-[500px] w-[800px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(600px_300px_at_30%_40%,rgba(34,211,238,0.25),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-14">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-700">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500" />
            Enterprise-grade Data Security Platform
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Protect sensitive data everywhere it lives, moves, and is used
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl">
            CryptoPix Security unifies discovery, classification, encryption, access governance, and real-time threat prevention—across cloud, SaaS, and on‑prem. Built for Zero Trust. Ready for AI.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-xl text-white bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500 shadow hover:opacity-95 transition"
            >
              Explore solutions <ArrowRight size={18} />
            </a>
            <a
              href="#compliance"
              className="inline-flex h-11 items-center gap-2 px-5 rounded-xl border border-gray-200 bg-white/80 backdrop-blur hover:border-gray-300 transition"
            >
              See compliance coverage <ShieldCheck size={18} />
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div className="rounded-xl border border-gray-200 bg-white p-3 flex items-center gap-2">
              <Fingerprint size={16} className="text-fuchsia-600" />
              PII & PHI protection
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-3">GDPR • HIPAA • SOC 2</div>
            <div className="rounded-xl border border-gray-200 bg-white p-3">Multi‑cloud & SaaS</div>
            <div className="rounded-xl border border-gray-200 bg-white p-3">Agentless & API-first</div>
          </div>
        </div>
      </div>
    </section>
  );
}
