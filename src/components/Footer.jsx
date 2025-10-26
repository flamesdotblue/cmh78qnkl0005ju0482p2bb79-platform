import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-600 to-cyan-400 p-[2px]">
                <div className="h-full w-full rounded-[10px] bg-white flex items-center justify-center">
                  <Shield size={16} className="text-purple-600" />
                </div>
              </div>
              <div className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500">CryptoPix Security</div>
            </div>
            <p className="mt-2 text-sm text-gray-700 max-w-sm">
              A unified data security platform to discover, protect, and govern sensitive data across cloud, SaaS, and on‑prem—backed by Zero Trust principles.
            </p>
          </div>
          <div className="text-sm">
            <div className="font-semibold mb-3">Product</div>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#solutions" className="hover:text-gray-900">Solutions</a></li>
              <li><a href="#platform" className="hover:text-gray-900">Platform</a></li>
              <li><a href="#compliance" className="hover:text-gray-900">Compliance</a></li>
            </ul>
          </div>
          <div id="resources" className="text-sm">
            <div className="font-semibold mb-3">Resources</div>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#" className="hover:text-gray-900">Documentation</a></li>
              <li><a href="#" className="hover:text-gray-900">Security whitepaper</a></li>
              <li><a href="#" className="hover:text-gray-900">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} CryptoPix Security. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <span className="text-gray-300">•</span>
            <a href="#" className="hover:text-gray-900">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
