"use client";

import React from 'react';

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-[#F4F2EC] py-24 px-6 font-sans text-[#5F6F52]">
      {/* Definição da Animação */}
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

      <div className="max-w-6xl mx-auto">
        
        {/* CABEÇALHO - Animação Inicial (Apresentação, pág. 19) */}
        <div className="text-center mb-20 space-y-4 animate-cascade" style={{ animationDelay: '0.1s' }}>
          <span className="text-[#8FAE7A] uppercase tracking-[0.4em] text-xs font-bold">Get in Touch</span>
          <h1 className="font-serif text-6xl md:text-8xl text-[#5F6F52]">Fale conosco</h1>
          <p className="text-[#7A5C3E] text-lg md:text-xl italic font-medium">
            "Onde moda encontra propósito." 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* COLUNA DE INFORMAÇÕES */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card: Sede - Delay 0.3s (Apresentação, pág. 4) */}
              <div 
                className="animate-cascade p-8 bg-white rounded-[2.5rem] border-b-4 border-[#8FAE7A] shadow-sm"
                style={{ animationDelay: '0.3s' }}
              >
                <div className="w-8 h-1 bg-[#8FAE7A] mb-4"></div>
                <h4 className="font-serif text-2xl mb-2 text-[#5F6F52]">Nossa Sede</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Idealizada dentro do <strong>Espro</strong>. Nossa jornada começou em Janeiro.
                </p>
              </div>

              {/* Card: Marketing - Delay 0.45s (Apresentação, pág. 11) */}
              <div 
                className="animate-cascade p-8 bg-white rounded-[2.5rem] border-b-4 border-[#7A5C3E] shadow-sm"
                style={{ animationDelay: '0.45s' }}
              >
                <div className="w-8 h-1 bg-[#7A5C3E] mb-4"></div>
                <h4 className="font-serif text-2xl mb-2 text-[#5F6F52]">Conexão</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Nosso <strong>Setor de Marketing</strong> traduz nossos valores em narrativas.
                </p>
              </div>

              {/* Card: Email - Delay 0.6s */}
              <div 
                className="animate-cascade p-8 bg-white rounded-[2.5rem] border-b-4 border-[#5F6F52] shadow-sm md:col-span-2"
                style={{ animationDelay: '0.6s' }}
              >
                <div className="w-8 h-1 bg-[#5F6F52] mb-4"></div>
                <h4 className="font-serif text-2xl mb-2 text-[#5F6F52]">E-mail Direto</h4>
                <p className="text-lg text-[#7A5C3E] font-bold">
                  contato@maisonorganic.com.br
                </p>
              </div>
            </div>

            {/* Banner de Impacto Social - Delay 0.75s (Apresentação, pág. 17) */}
            <div 
              className="animate-cascade p-10 bg-[#5F6F52] rounded-[3rem] text-[#F4F2EC] relative overflow-hidden"
              style={{ animationDelay: '0.75s' }}
            >
              <p className="relative z-10 text-xl font-serif leading-relaxed">
                "Acreditamos que a moda é uma ferramenta de transformação social e regeneração do meio ambiente."
              </p>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#8FAE7A] rounded-full opacity-10"></div>
            </div>
          </div>

          {/* COLUNA DO FORMULÁRIO - Delay 0.9s */}
          <div 
            className="animate-cascade bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl shadow-[#5F6F52]/10 border border-[#5F6F52]/5"
            style={{ animationDelay: '0.9s' }}
          >
            <h3 className="font-serif text-3xl mb-8 text-[#5F6F52]">Envie sua mensagem</h3>
            <form className="space-y-5">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#8FAE7A] ml-1">Nome Completo</label>
                <input 
                  type="text" 
                  className="w-full p-5 rounded-2xl bg-[#F4F2EC] border-none focus:ring-2 focus:ring-[#8FAE7A] outline-none transition-all placeholder:text-gray-400" 
                  placeholder="Como prefere ser chamado?" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#8FAE7A] ml-1">E-mail</label>
                <input 
                  type="email" 
                  className="w-full p-5 rounded-2xl bg-[#F4F2EC] border-none focus:ring-2 focus:ring-[#8FAE7A] outline-none transition-all" 
                  placeholder="seu@email.com" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#8FAE7A] ml-1">Mensagem</label>
                <textarea 
                  className="w-full p-5 rounded-2xl bg-[#F4F2EC] border-none focus:ring-2 focus:ring-[#8FAE7A] outline-none transition-all h-32 resize-none" 
                  placeholder="Conte-nos seu propósito..."
                ></textarea>
              </div>

              <button className="w-full bg-[#5F6F52] hover:bg-[#7A5C3E] text-white font-bold py-6 rounded-2xl transition-all shadow-lg uppercase tracking-[0.2em] text-xs mt-4 active:scale-95">
                Enviar para a Maison
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}