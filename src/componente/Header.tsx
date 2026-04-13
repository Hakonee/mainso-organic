"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#F4F2EC] via-white to-[#F4F2EC] sticky top-0 z-50 w-full border-b border-[#5F6F52]/10 shadow-lg backdrop-blur-sm">
      {/* Elementos decorativos sutis */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(143,174,122,0.03),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex justify-between items-center relative z-10">

        {/* Logo Principal */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#8FAE7A]/20 to-[#5F6F52]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative text-2xl md:text-3xl font-display text-[#5F6F52] font-bold tracking-tighter transition-all duration-300 group-hover:text-[#8FAE7A] group-hover:scale-105">
              MAISON <span className="text-[#8FAE7A]">ORGANIC</span>
            </span>
          </div>
        </Link>

        {/* Menu de Navegação */}
        <nav className="hidden md:flex items-center gap-12">
          <Link href="/" className="group relative text-sm font-sans font-semibold text-[#5F6F52] hover:text-[#8FAE7A] focus:text-[#8FAE7A] transition-all duration-300 tracking-wide">
            <span className="relative z-10">INÍCIO</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8FAE7A] group-hover:w-full group-focus:w-full transition-all duration-300" />
          </Link>
          <Link href="/quem-somos" className="group relative text-sm font-sans font-semibold text-[#5F6F52] hover:text-[#8FAE7A] focus:text-[#8FAE7A] transition-all duration-300 tracking-wide">
            <span className="relative z-10">NOSSA HISTÓRIA</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8FAE7A] group-hover:w-full group-focus:w-full transition-all duration-300" />
          </Link>
          <Link href="/produtos" className="group relative text-sm font-sans font-semibold text-[#5F6F52] hover:text-[#8FAE7A] focus:text-[#8FAE7A] transition-all duration-300 tracking-wide">
            <span className="relative z-10">PRODUTOS</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8FAE7A] group-hover:w-full group-focus:w-full transition-all duration-300" />
          </Link>

          {/* Botão de Ação de Destaque */}
          <Link
            href="/contato"
            className="group relative bg-gradient-to-r from-[#5F6F52] to-[#8FAE7A] text-[#F4F2EC] px-8 py-3 rounded-full text-xs font-bold hover:shadow-xl focus:shadow-xl hover:shadow-[#8FAE7A]/25 focus:shadow-[#8FAE7A]/25 transition-all duration-300 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">CONTATO</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#8FAE7A] to-[#7A9B6A] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300" />
          </Link>
        </nav>

        <button
          className="md:hidden text-[#5F6F52] focus:outline-none focus:ring-2 focus:ring-[#8FAE7A] rounded-lg p-2 hover:bg-[#8FAE7A]/10 transition-colors"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="relative w-6 h-6">
            <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${menuOpen ? 'rotate-45 top-3' : 'top-1'}`} />
            <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${menuOpen ? '-rotate-45 top-3' : 'top-5'}`} />
          </div>
        </button>
      </div>

      {/* Menu Mobile Aprimorado */}
      <div className={`md:hidden bg-gradient-to-b from-[#F4F2EC] to-white border-t border-[#5F6F52]/10 overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="px-6 pb-8 pt-6 space-y-6">
          <Link href="/" className="group flex items-center gap-3 text-base font-semibold text-[#5F6F52] hover:text-[#8FAE7A] focus:text-[#8FAE7A] transition-all duration-300" onClick={() => setMenuOpen(false)}>
            <div className="w-2 h-2 rounded-full bg-[#8FAE7A] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity" />
            <span>INÍCIO</span>
          </Link>
          <Link href="/quem-somos" className="group flex items-center gap-3 text-base font-semibold text-[#5F6F52] hover:text-[#8FAE7A] focus:text-[#8FAE7A] transition-all duration-300" onClick={() => setMenuOpen(false)}>
            <div className="w-2 h-2 rounded-full bg-[#8FAE7A] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity" />
            <span>NOSSA HISTÓRIA</span>
          </Link>
          <Link href="/produtos" className="group flex items-center gap-3 text-base font-semibold text-[#5F6F52] hover:text-[#8FAE7A] focus:text-[#8FAE7A] transition-all duration-300" onClick={() => setMenuOpen(false)}>
            <div className="w-2 h-2 rounded-full bg-[#8FAE7A] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity" />
            <span>PRODUTOS</span>
          </Link>
          <div className="pt-4">
            <Link
              href="/contato"
              className="group flex items-center justify-center w-full bg-gradient-to-r from-[#5F6F52] to-[#8FAE7A] text-[#F4F2EC] px-8 py-4 rounded-full text-sm font-bold hover:shadow-xl focus:shadow-xl hover:shadow-[#8FAE7A]/25 focus:shadow-[#8FAE7A]/25 transition-all duration-300 active:scale-95"
              onClick={() => setMenuOpen(false)}
            >
              <span className="relative z-10">CONTATO</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8FAE7A] to-[#7A9B6A] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 rounded-full" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}