import React from 'react';
import { Shield, Lock, Key, Server, Globe, Zap, Database, Eye, ArrowRight } from 'lucide-react';

const cards = [
  {
    icon: <Database size={20} className="text-fuchsia-600" />,
    title: 'Data Discovery & Classification',
    desc: 'Continuously map sensitive data across clouds, databases, data lakes, SaaS, and endpoints. Classify with AI-powered detectors for PII, PHI, PCI, secrets, and IP.'
  },
  {
    icon: <Lock size={20} className="text-purple-600" />,
    title: 'Encryption & Tokenization',
    desc: 'Apply field-level encryption, masking, and tokenization on the fly. Manage keys with your KMS or HSM and enforce crypto policies everywhere.'
  },
  {
    icon: <Key size={20} className="text-cyan-600" />,
    title: 'Access Governance',
    desc: 'Right-size access with just-in-time permissions, automated reviews, and continuous monitoring to prevent data overexposure.'
  },
  {
    icon: <Eye size={20} className="text-fuchsia-600" />,
    title: 'Real-time Threat Prevention',
    desc: 'Detect exfiltration, anomalous queries, and misuse with streaming analytics. Block risky actions before data leaves your perimeter.'
  },
  {
    icon: <Globe size={20} className="text-purple-600" />,
    title: 'Privacy & Compliance',
    desc: 'Operationalize GDPR, HIPAA, SOC 2, ISO 27001, CCPA and more with built-in controls, evidence collection, and auditor-ready reporting.'
  },
  {
    icon: <Server size={20} className="text-cyan-600" />,
    title: 'Multi-cloud & Hybrid',
    desc: 'Consistent policies across AWS, Azure, GCP, Snowflake, BigQuery, Databricks, and on‑prem—without re‑architecting your data stack.'
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-20%,rgba(168,85,247,0.12),transparent)]" aria-hidden></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">A unified platform for data security</h2>
            <p className="mt-3 text-gray-700 max-w-2xl">Stop breaches and ensure privacy with a modern platform that brings visibility, encryption, access control, and prevention into one place.</p>
          </div>
          <a href="#platform" className="inline-flex items-center gap-2 h-11 px-5 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition">
            How the platform works <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, idx) => (
            <div key={idx} className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-purple-50 via-fuchsia-50 to-cyan-50 pointer-events-none" />
              <div className="relative z-10">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-100 via-fuchsia-100 to-cyan-100 flex items-center justify-center">
                  {c.icon}
                </div>
                <h3 className="mt-4 font-semibold text-lg">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="platform" className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="inline-flex items-center gap-2 text-xs rounded-full border border-gray-200 px-3 py-1 bg-white mb-3">
              <Zap size={14} className="text-cyan-600" /> Zero Trust by design
            </div>
            <h3 className="text-2xl font-semibold">How CryptoPix Security works</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li><span className="font-medium">Discover:</span> Agentless connectors inventory data stores and flows in minutes.</li>
              <li><span className="font-medium">Classify:</span> AI detectors label sensitive data with confidence scores and lineage.</li>
              <li><span className="font-medium">Protect:</span> Enforce encryption, masking, and tokenization at rest and in use.</li>
              <li><span className="font-medium">Govern:</span> Automate least-privilege access and continuous reviews.</li>
              <li><span className="font-medium">Prevent:</span> Real-time analytics detect and block exfiltration and risky queries.</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-xl border border-gray-200 bg-white px-3 py-1">AWS • Azure • GCP</span>
              <span className="rounded-xl border border-gray-200 bg-white px-3 py-1">Snowflake • BigQuery • Databricks</span>
              <span className="rounded-xl border border-gray-200 bg-white px-3 py-1">Salesforce • Google Workspace • M365</span>
            </div>
          </div>
          <div id="compliance" className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="inline-flex items-center gap-2 text-xs rounded-full border border-gray-200 px-3 py-1 bg-white mb-3">
              <Shield size={14} className="text-purple-600" /> Compliance, simplified
            </div>
            <h3 className="text-2xl font-semibold">Privacy and compliance coverage</h3>
            <p className="mt-2 text-sm text-gray-700">Map controls to frameworks and automate evidence collection. Generate auditor-ready reports in a click.</p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              <div className="rounded-xl border border-gray-200 bg-white px-3 py-2">GDPR</div>
              <div className="rounded-xl border border-gray-200 bg-white px-3 py-2">HIPAA</div>
              <div className="rounded-xl border border-gray-200 bg-white px-3 py-2">SOC 2</div>
              <div className="rounded-xl border border-gray-200 bg-white px-3 py-2">ISO 27001</div>
              <div className="rounded-xl border border-gray-200 bg-white px-3 py-2">PCI DSS</div>
              <div className="rounded-xl border border-gray-200 bg-white px-3 py-2">CCPA/CPRA</div>
            </div>
            <a href="#resources" className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition">
              Download overview <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
