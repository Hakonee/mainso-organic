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
      
      {/* HERO SECTION - Overlay Escura para Contraste da Logo Branca */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
        {/* Overlay de Gradiente para profundidade */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/50 to-[#1a1a1a]" />
        
        {/* Elemento de textura sutil (opcional) */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] z-0" />

        <div className="relative z-10 text-center px-6 max-w-5xl flex flex-col items-center">
          
          {/* LOGO BRANCA - Destaque total sobre o fundo escuro */}
          <div className="relative w-72 h-36 md:w-[500px] md:h-[220px] mb-8 animate-cascade" style={{ animationDelay: '0.2s' }}>
            <Image 
              src="/logo-maison.png" 
              alt="Maison Organic Logo"
              fill
              sizes="(max-width: 768px) 80vw, 500px"
              className="object-contain"
              priority
            />
          </div>

          {/* SELO DE CONSCIÊNCIA (Apresentação, pág. 2) */}
          <span className="animate-cascade text-[#8FAE7A] uppercase tracking-[0.4em] text-xs md:text-sm font-bold mb-6 block" style={{ animationDelay: '0.4s' }}>
            Consciência em cada detalhe
          </span>
          
          {/* TÍTULO PRINCIPAL */}
          <h1 className="animate-cascade font-serif text-white text-5xl md:text-8xl mb-8 leading-[1.1]" style={{ animationDelay: '0.6s' }}>
            Vista o mundo que você <br className="hidden md:block" /> quer preservar.
          </h1>
          
          {/* SLOGAN (Apresentação, pág. 19) */}
          <p className="animate-cascade text-white/70 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light italic" style={{ animationDelay: '0.8s' }}>
            "Onde moda encontra propósito."
          </p>

          <div className="animate-cascade flex flex-col md:flex-row gap-6 justify-center items-center" style={{ animationDelay: '1s' }}>
            <Link href="/produtos" 
              className="bg-[#8FAE7A] hover:bg-white hover:text-[#5F6F52] text-white font-bold py-5 px-12 rounded-full transition-all shadow-xl uppercase tracking-widest text-xs">
              Conheça a Coleção
            </Link>
          </div>
        </div>
      </section>

      {/* SEÇÃO MANIFESTO: O LINO (Apresentação, pág. 9) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative animate-cascade" style={{ animationDelay: '0.3s' }}>
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#8FAE7A] rounded-[3rem] z-0" />
            <div className="relative z-10 bg-[#F4F2EC] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="/lino-mascote.png" 
                alt="Lino Mascote"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="space-y-8 animate-cascade" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-[#5F6F52] text-5xl md:text-6xl leading-tight font-serif">
              Lino: O ritmo <br /> da natureza.
            </h2>
            <p className="text-[#7A5C3E] text-xl leading-relaxed font-medium italic">
              "O bicho-preguiça representa calma, consciência e respeito absoluto pela natureza."
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Segundo a <strong>Maison Organic</strong>, ele simboliza o movimento <strong>slow fashion</strong>, valorizando uma moda mais calma e roupas feitas para durar.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO PILARES: MISSÃO, VISÃO E VALORES (Apresentação, pág. 6) */}
      <section className="bg-[#5F6F52] py-28 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-cascade" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-[#8FAE7A] uppercase tracking-[0.3em] text-sm font-bold mb-4">Essência da Marca</h2>
            <p className="text-white text-3xl md:text-4xl font-serif">Compromisso com o amanhã</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-cascade bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-white text-3xl mb-6 font-serif">Missão</h3>
              <p className="text-white/70 leading-relaxed">Oferecer moda acessível, sustentável e inclusiva, que respeita o meio ambiente e valoriza as pessoas.</p>
            </div>
            <div className="animate-cascade bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-white text-3xl mb-6 font-serif">Visão</h3>
              <p className="text-white/70 leading-relaxed">Ser a marca de referência em moda orgânica e sustentável, inspirando práticas responsáveis.</p>
            </div>
            <div className="animate-cascade bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-white text-3xl mb-6 font-serif">Valores</h3>
              <p className="text-white/70 leading-relaxed">Sustentabilidade, Qualidade, Responsabilidade, Transparência e Ética.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ DE CHAMADA */}
      <section className="py-24 px-6 bg-[#F4F2EC] text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-cascade" style={{ animationDelay: '0.3s' }}>
          <div className="inline-block w-12 h-[2px] bg-[#8FAE7A] mb-4"></div>
          <h2 className="text-[#5F6F52] text-4xl md:text-5xl font-serif">Faça parte da mudança</h2>
          <p className="text-[#7A5C3E] text-lg font-medium">
            Acompanhe nossa jornada por uma moda mais humana e consciente.
          </p>
          <div className="pt-6">
            <Link href="/produtos" 
              className="inline-block border-2 border-[#5F6F52] text-[#5F6F52] hover:bg-[#5F6F52] hover:text-[#F4F2EC] font-bold py-4 px-10 rounded-full transition-all uppercase tracking-widest text-xs">
              Explorar Loja
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}