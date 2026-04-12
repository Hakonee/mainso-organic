"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#F4F2EC] sticky top-0 z-50 w-full border-b border-[#5F6F52]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo Principal */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-display text-[#5F6F52] font-bold tracking-tighter transition-colors group-hover:text-[#8FAE7A]">
            MAISON <span className="text-[#8FAE7A]">ORGANIC</span>
          </span>
        </Link>

        {/* Menu de Navegação */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-sm font-sans font-semibold text-[#5F6F52] hover:text-[#8FAE7A] transition-colors tracking-wide">
            INÍCIO
          </Link>
          <Link href="/quem-somos" className="text-sm font-sans font-semibold text-[#5F6F52] hover:text-[#8FAE7A] transition-colors tracking-wide">
            NOSSA HISTÓRIA
          </Link>
          <Link href="/produtos" className="text-sm font-sans font-semibold text-[#5F6F52] hover:text-[#8FAE7A] transition-colors tracking-wide">
            PRODUTOS
          </Link>
          
          {/* Botão de Ação de Destaque */}
          <Link 
            href="/contato" 
            className="bg-[#5F6F52] text-[#F4F2EC] px-7 py-2.5 rounded-full text-xs font-bold hover:bg-[#8FAE7A] hover:shadow-lg transition-all active:scale-95"
          >
            CONTATO
          </Link>
        </nav>

        <button
          className="md:hidden text-[#5F6F52] focus:outline-none focus:ring-2 focus:ring-[#8FAE7A] rounded-lg"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </div>

      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden bg-[#F4F2EC] border-t border-[#5F6F52]/10`}>
        <nav className="px-6 pb-6 pt-4 space-y-4">
          <Link href="/" className="block text-base font-semibold text-[#5F6F52] hover:text-[#8FAE7A] transition-colors" onClick={() => setMenuOpen(false)}>
            INÍCIO
          </Link>
          <Link href="/quem-somos" className="block text-base font-semibold text-[#5F6F52] hover:text-[#8FAE7A] transition-colors" onClick={() => setMenuOpen(false)}>
            NOSSA HISTÓRIA
          </Link>
          <Link href="/produtos" className="block text-base font-semibold text-[#5F6F52] hover:text-[#8FAE7A] transition-colors" onClick={() => setMenuOpen(false)}>
            PRODUTOS
          </Link>
          <Link 
            href="/contato" 
            className="inline-flex w-full justify-center bg-[#5F6F52] text-[#F4F2EC] px-6 py-3 rounded-full text-sm font-bold hover:bg-[#8FAE7A] hover:shadow-lg transition-all active:scale-95"
            onClick={() => setMenuOpen(false)}
          >
            CONTATO
          </Link>
        </nav>
      </div>
    </header>
  );
}