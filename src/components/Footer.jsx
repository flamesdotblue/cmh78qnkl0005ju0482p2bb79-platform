import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500">CryptoPix</div>
            <p className="mt-2 text-sm text-gray-700 max-w-sm">A modern, vibrant redesign inspired by CryptoPix’s color DNA: reflective cubes, neon gradients, and a clean, art-first interface.</p>
          </div>
          <div className="text-sm">
            <div className="font-semibold mb-3">Product</div>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#features" className="hover:text-gray-900">Features</a></li>
              <li><a href="#collections" className="hover:text-gray-900">Collections</a></li>
              <li><a href="#roadmap" className="hover:text-gray-900">Roadmap</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-semibold mb-3">Resources</div>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#" className="hover:text-gray-900">Support</a></li>
              <li><a href="#" className="hover:text-gray-900">Docs</a></li>
              <li><a href="#" className="hover:text-gray-900">Brand</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} CryptoPix. All rights reserved.</p>
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
