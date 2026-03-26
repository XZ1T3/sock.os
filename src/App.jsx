import { useState } from 'react';
import { X, Maximize2, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans flex flex-col">
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-center">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#556b2f]/20 rounded-xl overflow-hidden flex items-center justify-center border border-[#556b2f]/30 shadow-lg shadow-green-900/20">
              <img 
                src="https://i.pinimg.com/736x/2f/23/8a/2f238a01ab772cbe9995d79cb27f07d5.jpg" 
                alt="sock.os logo" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter flex items-center gap-1">
              sock<span className="text-[#808000]">.os</span>
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold tracking-tighter opacity-20 text-[#556b2f]">SYSTEM STANDBY</h2>
          <p className="text-xs font-mono text-white/20 uppercase tracking-[0.5em]">Waiting for instructions...</p>
        </div>
      </main>

      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-50">
            <span className="font-bold tracking-tighter uppercase">sock.os</span>
          </div>
          <p className="text-[10px] font-mono text-white/20">
            &copy; 2026 SOCK.OS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
