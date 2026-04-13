"use client"; // Adicione esta linha para permitir animações e interatividade

import React from 'react';
import Image from 'next/image';

const catalogo = [
  { 
    id: 1, 
    nome: "Ecobag Maison", 
    preco: "R$ 49,90", 
    desc: "Algodão 100% orgânico com selo de sustentabilidade.", 
    img: "/ecobag.png",
    tag: "Essencial"
  },
  { 
    id: 2, 
    nome: "Camisa Polo Verde", 
    preco: "R$ 129,90", 
    desc: "Fibra natural cultivada sem agrotóxicos (Apresentação, pág. 15).", 
    img: "/polo.png",
    tag: "Slow Fashion"
  },
  { 
    id: 3, 
    nome: "Caneca Coffee ++", 
    preco: "R$ 35,00", 
    desc: "Cerâmica artesanal para um dia a dia consciente (Apresentação, pág. 18).", 
    img: "/caneca.png",
    tag: "Lifestyle"
  }
];

export default function ProdutosPage() {
  return (
    <main className="min-h-screen bg-[#F4F2EC] py-16 md:py-24 px-4 md:px-6 font-sans text-[#5F6F52]">
      {/* Estilos de animação em cascata */}
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

      <div className="max-w-7xl mx-auto">

        {/* HEADER - Cores: Verde Escuro #5F6F52 e Verde Claro #8FAE7A (Manual, pág. 4) */}
        <header className="mb-32 text-center space-y-10 animate-cascade relative" style={{ animationDelay: '0.1s' }}>
          {/* Elementos decorativos de fundo */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-[#8FAE7A]/5 blur-2xl" />
            <div className="absolute bottom-10 right-1/4 w-40 h-40 rounded-full bg-[#5F6F52]/5 blur-2xl" />
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-[#8FAE7A]/10 px-6 py-3 rounded-full border border-[#8FAE7A]/20">
              <div className="w-2 h-2 rounded-full bg-[#8FAE7A] animate-pulse" />
              <span className="text-[#5F6F52] text-sm font-medium uppercase tracking-wide">
                Coleção Autoral
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-[#5F6F52] leading-tight">
              Catálogo <br />
              <span className="text-[#8FAE7A]">Consciente</span>
            </h1>

            <div className="max-w-xl sm:max-w-2xl mx-auto space-y-4">
              <p className="text-[#7A5C3E] text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                "Onde moda encontra propósito."
              </p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Descubra nossa coleção de produtos sustentáveis, criados com materiais orgânicos e processos responsáveis.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-[1px] bg-[#8FAE7A]" />
            <div className="w-3 h-3 rounded-full bg-[#8FAE7A]" />
            <div className="w-16 h-[1px] bg-[#8FAE7A]" />
          </div>
        </header>

        {/* GRID DE PRODUTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-32">
          {catalogo.map((item, index) => (
            <div
              key={item.id}
              className="animate-cascade group bg-gradient-to-br from-white to-[#F4F2EC] rounded-[2.5rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#5F6F52]/5 flex flex-col hover:-translate-y-1"
              style={{ animationDelay: `${(index + 2) * 0.15}s` }}
            >
              {/* Container da Imagem */}
              <div className="relative aspect-square bg-gradient-to-br from-[#F4F2EC] to-white rounded-[2rem] mb-8 overflow-hidden flex items-center justify-center shadow-inner">
                <span className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md text-[#5F6F52] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg border border-[#8FAE7A]/20">
                  {item.tag}
                </span>
                <Image
                  src={item.img}
                  alt={item.nome}
                  fill
                  className="object-contain p-8 transform group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Informações - Tipografia Poppins (Manual, pág. 5) */}
              <div className="flex-grow space-y-4">
                <h3 className="font-serif text-2xl md:text-3xl text-[#5F6F52] font-bold leading-tight">
                  {item.nome}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {item.desc}
                </p>
              </div>

              {/* Preço e Ação - Cor Marrom Terra #7A5C3E (Manual, pág. 4) */}
              <div className="mt-8 pt-8 border-t border-[#F4F2EC] flex justify-between items-center">
                <span className="font-bold text-[#7A5C3E] text-2xl">{item.preco}</span>
                <button className="bg-gradient-to-r from-[#5F6F52] to-[#8FAE7A] text-white w-14 h-14 rounded-full flex items-center justify-center hover:shadow-xl hover:shadow-[#8FAE7A]/25 transition-all duration-300 active:scale-90">
                  <span className="text-2xl font-light">+</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SEÇÃO LINO - Baseada na pág. 9 da Apresentação */}
        <div
          className="animate-cascade mt-16 md:mt-32 relative overflow-hidden rounded-[2rem] md:rounded-[4rem] bg-gradient-to-br from-[#5F6F52] via-[#7A9B6A] to-[#8FAE7A] p-8 md:p-12 lg:p-20 text-white shadow-2xl"
          style={{ animationDelay: '1s' }}
        >
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#F4F2EC]/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/3 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl shrink-0 overflow-hidden border-6 md:border-8 border-white/20 hover:scale-105 transition-transform duration-500">
               <span className="text-6xl sm:text-7xl md:text-8xl animate-pulse">🦥</span>
            </div>

            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-white">
                  Lino: O Ritmo da Natureza
                </h2>
                <p className="text-white/90 text-xl leading-relaxed max-w-3xl">
                  Nosso mascote Lino representa os valores de calma e consciência. Ele simboliza o movimento <em>slow fashion</em>, com roupas feitas para durar e respeito ao tempo da natureza.
                </p>
              </div>

              {/* Tags com efeito glassmorphism */}
              <div className="flex flex-wrap gap-4 pt-6">
                {["Sustentável", "Ético", "Consciente"].map((tag, index) => (
                  <span
                    key={tag}
                    className="animate-cascade backdrop-blur-md bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg hover:bg-white/20 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-8">
                <button className="group/btn relative bg-white text-[#5F6F52] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F4F2EC] focus:bg-[#F4F2EC] hover:shadow-2xl focus:shadow-2xl hover:shadow-white/25 focus:shadow-white/25 transition-all duration-500 active:scale-95 flex items-center gap-3 overflow-hidden">
                  <span className="relative z-10">Conheça Nossa História</span>
                  <span className="text-2xl group-hover/btn:translate-x-1 group-focus/btn:translate-x-1 transition-transform duration-300 relative z-10">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}