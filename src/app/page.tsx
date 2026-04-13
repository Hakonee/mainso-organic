"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F2EC] font-sans text-[#5F6F52]">
      {/* Definição da Animação em Cascata */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-cascade {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
      
      {/* HERO SECTION - Apresentação Impactante */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F]">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#8FAE7A]/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-white/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#8FAE7A]/5 blur-3xl" />
        </div>

        {/* Padrão sutil de fundo */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:50px_50px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center">
          {/* Badge de identificação */}
          <div className="animate-cascade inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 mb-6 md:mb-8 border border-white/20 shadow-2xl" style={{ animationDelay: '0.2s' }}>
            <div className="w-2 h-2 rounded-full bg-[#8FAE7A] animate-pulse" />
            <span className="text-sm uppercase tracking-[0.2em] text-white/90 font-medium">
              Consciência em cada detalhe
            </span>
          </div>

          {/* Logo principal */}
          <div className="animate-cascade mb-8 md:mb-12" style={{ animationDelay: '0.4s' }}>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8FAE7A]/20 to-transparent blur-2xl rounded-3xl" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
                <div className="w-32 h-16 md:w-48 md:h-24 lg:w-64 lg:h-32 mx-auto">
                  <Image
                    src="/logo-maison.png"
                    alt="Maison Organic Logo"
                    width={256}
                    height={128}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Título principal */}
          <h1 className="animate-cascade font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 md:mb-8" style={{ animationDelay: '0.6s' }}>
            Vista o mundo que você <br className="hidden md:block" />
            <span className="text-[#8FAE7A]">quer preservar</span>
          </h1>

          {/* Subtítulo */}
          <p className="animate-cascade max-w-xl sm:max-w-2xl mx-auto text-white/70 text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-12" style={{ animationDelay: '0.8s' }}>
            Maison Organic cria peças sustentáveis com sensibilidade e estilo, usando materiais orgânicos, processos limpos e design pensado para durar.
          </p>

          {/* Call-to-action buttons */}
          <div className="animate-cascade flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mb-12 md:mb-16" style={{ animationDelay: '1s' }}>
            <Link href="/produtos" className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-[#8FAE7A] text-white font-semibold uppercase tracking-[0.15em] text-sm rounded-full shadow-2xl transition-all duration-300 hover:bg-white hover:text-[#5F6F52] focus:bg-white focus:text-[#5F6F52] hover:shadow-[#8FAE7A]/25 focus:shadow-[#8FAE7A]/25 hover:scale-105 focus:scale-105">
              <span className="relative z-10">Conheça a coleção</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8FAE7A] to-[#7A9B6A] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link href="/quem-somos" className="group inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white font-semibold uppercase tracking-[0.15em] text-sm rounded-full shadow-xl transition-all duration-300 hover:border-[#8FAE7A] hover:bg-[#8FAE7A]/10 focus:border-[#8FAE7A] focus:bg-[#8FAE7A]/10 hover:shadow-[#8FAE7A]/10 focus:shadow-[#8FAE7A]/10">
              Nossa história
            </Link>
          </div>

          {/* Cards de destaque */}
          <div className="animate-cascade grid gap-4 md:gap-6 md:grid-cols-3 max-w-5xl mx-auto" style={{ animationDelay: '1.2s' }}>
            <div className="group bg-white/5 backdrop-blur-lg rounded-2xl md:rounded-3xl p-5 md:p-8 border border-white/10 shadow-xl transition-all duration-300 hover:bg-white/10 hover:border-[#8FAE7A]/50 hover:scale-105">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#8FAE7A]/20 flex items-center justify-center mb-3 md:mb-5 group-hover:bg-[#8FAE7A]/30 transition-colors">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#8FAE7A]" />
              </div>
              <h3 className="text-white font-semibold text-sm md:text-base mb-2 md:mb-3">Algodão Orgânico</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Tecidos naturais, conforto e menos impacto ambiental.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 shadow-xl transition-all duration-300 hover:bg-white/10 hover:border-[#8FAE7A]/50 hover:scale-105">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#8FAE7A]/20 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#8FAE7A]/30 transition-colors">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#8FAE7A]" />
              </div>
              <h3 className="text-white font-semibold text-base md:text-lg mb-2 md:mb-3">Produção Local</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Valorização de comunidades e processos responsáveis.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 shadow-xl transition-all duration-300 hover:bg-white/10 hover:border-[#8FAE7A]/50 hover:scale-105">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#8FAE7A]/20 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#8FAE7A]/30 transition-colors">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#8FAE7A]" />
              </div>
              <h3 className="text-white font-semibold text-base md:text-lg mb-2 md:mb-3">Design Atemporal</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Peças que atravessam temporadas com elegância e consciência.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* SEÇÃO MANIFESTO: O LINO (Apresentação, pág. 9) */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-br from-[#F4F2EC] via-white to-[#F4F2EC] relative overflow-hidden">
        {/* Elementos decorativos sutis */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#8FAE7A]/5 blur-2xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#5F6F52]/5 blur-2xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#8FAE7A]/3 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto grid gap-8 md:gap-20 lg:grid-cols-2 items-center relative z-10">
          <div className="relative animate-cascade" style={{ animationDelay: '0.3s' }}>
            {/* Badge flutuante */}
            <div className="absolute -top-8 -left-8 z-20 animate-bounce">
              <div className="bg-[#8FAE7A] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                🐌 Lino
              </div>
            </div>

            {/* Container da imagem com efeitos */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#8FAE7A]/20 to-[#5F6F52]/20 rounded-[3rem] blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative overflow-hidden rounded-[3rem] bg-[#F4F2EC] shadow-[0_40px_100px_rgba(95,111,82,0.12)] group-hover:shadow-[0_50px_120px_rgba(95,111,82,0.18)] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src="/lino-mascote.png"
                  alt="Lino Mascote"
                  width={700}
                  height={700}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay com mensagem */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-[#5F6F52] text-sm font-medium text-center">
                    "Calma, consciência e respeito pela natureza"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10 animate-cascade" style={{ animationDelay: '0.5s' }}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-[#8FAE7A]/10 px-4 py-2 rounded-full border border-[#8FAE7A]/20">
                <div className="w-2 h-2 rounded-full bg-[#8FAE7A] animate-pulse" />
                <span className="text-[#5F6F52] text-sm font-medium uppercase tracking-wide">
                  Nosso Manifesto
                </span>
              </div>

              <h2 className="text-[#5F6F52] text-5xl md:text-7xl leading-tight font-serif">
                Lino: O ritmo <br />
                <span className="text-[#8FAE7A]">da natureza</span>
              </h2>

              <div className="space-y-4">
                <p className="text-[#7A5C3E] text-xl leading-relaxed font-medium italic border-l-4 border-[#8FAE7A] pl-6">
                  "O bicho-preguiça representa calma, consciência e respeito absoluto pela natureza."
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Segundo a <strong className="text-[#5F6F52]">Maison Organic</strong>, ele simboliza o movimento <strong className="text-[#8FAE7A]">slow fashion</strong>, valorizando uma moda mais calma e roupas feitas para durar.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F4F2EC] to-[#E9E6DC] p-8 border border-[#E9E6DC] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8FAE7A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#8FAE7A]/20 flex items-center justify-center mb-4 group-hover:bg-[#8FAE7A]/30 transition-colors">
                    <svg className="w-6 h-6 text-[#5F6F52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-[#5F6F52] font-bold text-xl mb-3">Peças que duram</h3>
                  <p className="text-[#7A5C3E] text-base leading-relaxed">
                    Uma estética atemporal com materiais de alta qualidade que resistem ao tempo.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F4F2EC] to-[#E9E6DC] p-8 border border-[#E9E6DC] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5F6F52]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#5F6F52]/20 flex items-center justify-center mb-4 group-hover:bg-[#5F6F52]/30 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-[#5F6F52] font-bold text-xl mb-3">Consciência natural</h3>
                  <p className="text-[#7A5C3E] text-base leading-relaxed">
                    Processos pensados para reduzir desperdício e proteger nosso planeta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO PILARES: MISSÃO, VISÃO E VALORES (Apresentação, pág. 6) */}
      <section className="bg-gradient-to-br from-[#5F6F52] via-[#4A5D42] to-[#5F6F52] py-16 md:py-32 px-4 md:px-6 relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/10 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#8FAE7A]/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-white/5 blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 animate-cascade" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#8FAE7A] animate-pulse" />
              <span className="text-white/90 uppercase tracking-[0.2em] text-sm font-medium">
                Essência da Marca
              </span>
            </div>
            <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6">
              Compromisso com <br />
              <span className="text-[#8FAE7A]">o amanhã</span>
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
              Nossa missão vai além da moda. Construímos um futuro mais sustentável, peça por peça.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="animate-cascade group relative" style={{ animationDelay: '0.4s' }}>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#8FAE7A]/30 to-[#7A9B6A]/30 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-white/5 backdrop-blur-lg p-12 rounded-[2.5rem] border border-white/10 hover:bg-white/10 hover:border-[#8FAE7A]/30 transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-2xl">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#8FAE7A] to-[#7A9B6A] flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-white text-4xl mb-8 font-serif text-center">Missão</h3>
                <p className="text-white/80 leading-relaxed text-center text-lg">
                  Oferecer moda acessível, sustentável e inclusiva, que respeita o meio ambiente e valoriza as pessoas em cada etapa do processo.
                </p>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-center justify-center gap-2 text-[#8FAE7A] text-sm font-medium">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Acessibilidade
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-cascade group relative" style={{ animationDelay: '0.6s' }}>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#8FAE7A]/30 to-[#7A9B6A]/30 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-white/5 backdrop-blur-lg p-12 rounded-[2.5rem] border border-white/10 hover:bg-white/10 hover:border-[#8FAE7A]/30 transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-2xl">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#8FAE7A] to-[#7A9B6A] flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-white text-4xl mb-8 font-serif text-center">Visão</h3>
                <p className="text-white/80 leading-relaxed text-center text-lg">
                  Ser a marca de referência em moda orgânica e sustentável, inspirando práticas responsáveis e transformando a indústria da moda.
                </p>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-center justify-center gap-2 text-[#8FAE7A] text-sm font-medium">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    Inspiração
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-cascade group relative" style={{ animationDelay: '0.8s' }}>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#8FAE7A]/30 to-[#7A9B6A]/30 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-white/5 backdrop-blur-lg p-12 rounded-[2.5rem] border border-white/10 hover:bg-white/10 hover:border-[#8FAE7A]/30 transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-2xl">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#8FAE7A] to-[#7A9B6A] flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-white text-4xl mb-8 font-serif text-center">Valores</h3>
                <p className="text-white/80 leading-relaxed text-center text-lg mb-6">
                  Sustentabilidade, Qualidade, Responsabilidade, Transparência e Ética guiam cada decisão que tomamos.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-[#8FAE7A] text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8FAE7A]" />
                    Sustentabilidade
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[#8FAE7A] text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8FAE7A]" />
                    Qualidade
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[#8FAE7A] text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8FAE7A]" />
                    Ética
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ DE CHAMADA */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-br from-[#F4F2EC] via-[#E9E6DC] to-[#F4F2EC] text-center relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#5F6F52]/5 to-transparent" />
          <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-[#8FAE7A]/8 blur-2xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-[#5F6F52]/6 blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-6xl mx-auto space-y-16 animate-cascade relative z-10" style={{ animationDelay: '0.3s' }}>
          {/* Linha decorativa */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-[1px] bg-[#8FAE7A]" />
            <div className="w-3 h-3 rounded-full bg-[#8FAE7A]" />
            <div className="w-16 h-[1px] bg-[#8FAE7A]" />
          </div>

          <div className="space-y-8">
            <h2 className="text-[#5F6F52] text-5xl md:text-7xl lg:text-8xl font-serif leading-tight">
              Faça parte da <br />
              <span className="text-[#8FAE7A]">mudança</span>
            </h2>
            <p className="text-[#7A5C3E] text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
              Acompanhe nossa jornada por uma moda mais humana e consciente. Cada peça que você escolhe faz a diferença.
            </p>
          </div>

          {/* Cards de estatísticas com animação */}
          <div className="grid gap-8 sm:grid-cols-3 py-12">
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-[#F4F2EC] p-8 border border-[#E9E6DC] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8FAE7A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#5F6F52] mb-4 group-hover:text-[#8FAE7A] transition-colors">100%</div>
                <div className="text-base md:text-lg text-[#7A5C3E] font-medium mb-2">Materiais Orgânicos</div>
                <div className="w-full h-1 bg-[#8FAE7A]/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#8FAE7A] rounded-full animate-pulse" style={{ width: '100%' }} />
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-[#F4F2EC] p-8 border border-[#E9E6DC] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5F6F52]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold text-[#5F6F52] mb-4 group-hover:text-[#8FAE7A] transition-colors">0%</div>
                <div className="text-lg text-[#7A5C3E] font-medium mb-2">Produtos Químicos</div>
                <div className="w-full h-1 bg-[#8FAE7A]/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#8FAE7A] rounded-full animate-pulse" style={{ width: '0%' }} />
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-[#F4F2EC] p-8 border border-[#E9E6DC] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8FAE7A]/5 to-[#5F6F52]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold text-[#5F6F52] mb-4 group-hover:text-[#8FAE7A] transition-colors">∞</div>
                <div className="text-lg text-[#7A5C3E] font-medium mb-2">Compromisso Sustentável</div>
                <div className="w-full h-1 bg-gradient-to-r from-[#8FAE7A] to-[#5F6F52] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#8FAE7A] to-[#5F6F52] animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Call-to-action aprimorado */}
          <div className="space-y-12">
            <Link href="/produtos"
              className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-gradient-to-r from-[#5F6F52] to-[#8FAE7A] text-white font-bold uppercase tracking-[0.15em] text-lg rounded-full shadow-2xl transition-all duration-500 hover:shadow-[#8FAE7A]/25 focus:shadow-[#8FAE7A]/25 hover:scale-110 focus:scale-110 hover:-translate-y-1 focus:-translate-y-1">
              <span className="relative z-10">Explorar Loja</span>
              <svg className="w-6 h-6 relative z-10 group-hover:translate-x-1 group-focus:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8FAE7A] to-[#7A9B6A] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 rounded-full" />
            </Link>

            {/* Links de navegação */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-base text-[#7A5C3E]">
              <Link href="/quem-somos" className="group relative hover:text-[#5F6F52] transition-all duration-300">
                <span className="relative z-10">Sobre nós</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8FAE7A] group-hover:w-full transition-all duration-300" />
              </Link>
              <span className="hidden sm:block text-[#8FAE7A]/50">•</span>
              <Link href="/contato" className="group relative hover:text-[#5F6F52] transition-all duration-300">
                <span className="relative z-10">Contato</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8FAE7A] group-hover:w-full transition-all duration-300" />
              </Link>
              <span className="hidden sm:block text-[#8FAE7A]/50">•</span>
              <Link href="/produtos" className="group relative hover:text-[#5F6F52] transition-all duration-300">
                <span className="relative z-10">Produtos</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8FAE7A] group-hover:w-full transition-all duration-300" />
              </Link>
            </div>

            {/* Mensagem final */}
            <div className="pt-8 border-t border-[#8FAE7A]/20">
              <p className="text-[#7A5C3E] text-lg font-medium italic">
                Feito com ❤️ para o planeta 🌱
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}