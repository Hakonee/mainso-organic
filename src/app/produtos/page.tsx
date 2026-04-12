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
    <main className="min-h-screen bg-[#F4F2EC] py-24 px-6 font-sans text-[#5F6F52]">
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
        <header className="mb-20 text-center space-y-4 animate-cascade" style={{ animationDelay: '0.1s' }}>
          <span className="text-[#8FAE7A] uppercase tracking-[0.3em] text-sm font-bold">Coleção Autoral</span>
          <h1 className="font-serif text-6xl md:text-7xl text-[#5F6F52]">Catálogo Consciente</h1>
          <p className="text-[#7A5C3E] max-w-2xl mx-auto text-lg italic font-medium">
            "Onde moda encontra propósito." 
            <span className="block text-[10px] not-italic opacity-60 uppercase mt-1"></span>
          </p>
          <div className="w-24 h-1 bg-[#8FAE7A] mx-auto mt-6"></div>
        </header>

        {/* GRID DE PRODUTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {catalogo.map((item, index) => (
            <div 
              key={item.id} 
              className="animate-cascade group bg-white rounded-[2.5rem] p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-[#5F6F52]/5 flex flex-col"
              style={{ animationDelay: `${(index + 2) * 0.15}s` }}
            >
              {/* Container da Imagem */}
              <div className="relative aspect-square bg-[#F4F2EC] rounded-[2rem] mb-6 overflow-hidden flex items-center justify-center">
                <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md text-[#5F6F52] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {item.tag}
                </span>
                <Image 
                  src={item.img} 
                  alt={item.nome}
                  fill
                  className="object-contain p-8 transform group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 25vw"
                />
              </div>

              {/* Informações - Tipografia Poppins (Manual, pág. 5) */}
              <div className="flex-grow space-y-2">
                <h3 className="font-serif text-2xl text-[#5F6F52] group-hover:text-[#8FAE7A] transition-colors">
                  {item.nome}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Preço e Ação - Cor Marrom Terra #7A5C3E (Manual, pág. 4) */}
              <div className="mt-6 pt-6 border-t border-[#F4F2EC] flex justify-between items-center">
                <span className="font-bold text-[#7A5C3E] text-xl">{item.preco}</span>
                <button className="bg-[#5F6F52] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#8FAE7A] transition-all shadow-lg active:scale-90">
                  <span className="text-2xl font-light">+</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SEÇÃO LINO - Baseada na pág. 9 da Apresentação */}
        <div 
          className="animate-cascade mt-32 relative overflow-hidden rounded-[4rem] bg-[#5F6F52] p-12 md:p-20 text-white"
          style={{ animationDelay: '1s' }}
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="w-56 h-56 bg-[#F4F2EC] rounded-full flex items-center justify-center shadow-2xl shrink-0 overflow-hidden border-8 border-[#8FAE7A]/20">
               <span className="text-8xl">🦥</span>
            </div>
            
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Lino: O Ritmo da Natureza
              </h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
                Nosso mascote Lino representa os valores de calma e consciência. Ele simboliza o movimento <em>slow fashion</em>, com roupas feitas para durar e respeito ao tempo da natureza.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {["Sustentável", "Ético", "Consciente"].map((tag) => (
                  <span key={tag} className="border border-[#8FAE7A]/50 text-[#8FAE7A] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}