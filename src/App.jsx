import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
      </main>
      <Footer />
    </div>
  );
}
