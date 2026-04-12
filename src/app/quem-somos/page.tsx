"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function QuemSomos() {
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

      {/* HERO - ESSÊNCIA */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-cascade" style={{ animationDelay: '0.1s' }}>
          <span className="text-[#8FAE7A] uppercase tracking-[0.3em] text-sm font-bold">Nossa Essência</span>
          <h1 className="text-6xl md:text-7xl font-serif leading-tight text-[#5F6F52]">Sobre Nós</h1>
          <p className="text-xl leading-relaxed text-[#7A5C3E] font-medium">
            Na Maison Organic, acreditamos que o verdadeiro cuidado nasce da simplicidade e da pureza da natureza. 
            Criamos produtos que unem qualidade, leveza e propósito.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Mais do que uma marca, somos um convite para um estilo de vida mais equilibrado, onde o bem-estar caminha junto com o respeito ao planeta. 
            Cada detalhe é pensado com carinho para oferecer uma experiência que cuida de você por inteiro.
          </p>
          <div className="pt-4">
            <p className="italic text-lg border-l-4 border-[#8FAE7A] pl-6 py-2 text-[#5F6F52]">
              "Maison Organic é sobre essência, cuidado e autenticidade — porque o natural também pode ser sofisticado."
            </p>
          </div>
        </div>
        <div className="relative animate-cascade" style={{ animationDelay: '0.4s' }}>
          <div className="absolute -inset-4 border-2 border-[#8FAE7A] rounded-[3rem] z-0 transform rotate-3"></div>
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
            <Image 
              src="/equipe-maison.jpg" 
              alt="Equipe Maison Organic"
              width={800}
              height={600}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* TIMELINE - NOSSA JORNADA (Apresentação, pág. 4) */}
      <section className="bg-[#5F6F52] text-[#F4F2EC] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 animate-cascade" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Nossa História</h2>
            <div className="w-20 h-1 bg-[#8FAE7A] mx-auto"></div>
          </div>
          
          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#8FAE7A]/30 before:to-transparent">
            
            {/* Janeiro */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-cascade" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#8FAE7A] bg-[#5F6F52] text-[#8FAE7A] font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                01
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="font-serif text-2xl text-[#8FAE7A] mb-2">Janeiro</h3>
                <p className="text-white/80">A Maison Organic é criada dentro do ecossistema Espro.</p>
              </div>
            </div>

            {/* Fevereiro */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-cascade" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#8FAE7A] bg-[#5F6F52] text-[#8FAE7A] font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                02
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="font-serif text-2xl text-[#8FAE7A] mb-2">Fevereiro</h3>
                <p className="text-white/80">A empresa estabelece parcerias estratégicas para os novos negócios.</p>
              </div>
            </div>

            {/* Março */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-cascade" style={{ animationDelay: '0.7s' }}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#8FAE7A] bg-[#5F6F52] text-[#8FAE7A] font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                03
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="font-serif text-2xl text-[#8FAE7A] mb-2">Março</h3>
                <p className="text-white/80">Criação de laços e visibilidade no mundo da moda, adequando-se ao mercado atual.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PILARES E LINO (Apresentação, pág. 9) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center mb-24">
            <div className="order-2 md:order-1 animate-cascade" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-serif text-[#5F6F52] text-5xl mb-8">Lino: O Coração da Nossa Criação</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                O bicho-preguiça foi escolhido como mascote por representar os valores da marca: <strong>calma, consciência e respeito pela natureza</strong>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ele simboliza o movimento <strong>slow fashion</strong>, valorizando uma moda mais humana e roupas feitas para durar.
              </p>
            </div>
            
            <div className="relative group animate-cascade" style={{ animationDelay: '0.4s' }}>
              <div className="absolute bottom-0 right-0 w-full h-[80%] bg-[#8FAE7A]/10 rounded-[4rem] -z-10 transform translate-x-10 translate-y-10"></div>
              <div className="relative h-[320px] md:h-[700px] w-full">
                <Image 
                  src="/lino-mascote.png" 
                  alt="Lino Mascote Maison Organic"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-bottom transform group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>

          {/* MISSÃO, VISÃO E VALORES (Apresentação, pág. 6) */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Missão", d: "Oferecer moda acessível, sustentável e inclusão. Que respeita o meio ambiente e valoriza todas as pessoas.", c: "text-gray-600" },
              { t: "Visão", d: "Ser a marca de referência em moda orgânica e sustentável, inspirando as práticas responsáveis.", c: "text-gray-600" },
              { t: "Valores", d: "Sustentabilidade, Qualidade, Responsabilidade, Transparência e Ética.", c: "text-[#7A5C3E] font-medium" }
            ].map((item, i) => (
              <div 
                key={i} 
                className="animate-cascade p-10 bg-[#F4F2EC] rounded-[2.5rem] border border-[#5F6F52]/5"
                style={{ animationDelay: `${0.6 + (i * 0.15)}s` }}
              >
                <h3 className="font-serif text-3xl mb-6 text-[#5F6F52]">{item.t}</h3>
                <p className={`text-sm leading-relaxed ${item.c}`}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRUTURA ORGANIZACIONAL (Apresentação, págs. 11-16) */}
      <section className="py-24 px-6 bg-[#F4F2EC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-cascade" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl font-serif mb-4 text-[#5F6F52]">Nossa Estrutura</h2>
            <p className="text-[#7A5C3E] font-medium">Excelência operacional em cada setor</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Marketing", d: "Área responsável por comunicar, posicionar e conectar a marca com o público." },
              { t: "Inteligência", d: "Analisa tendências de mercado e movimentos culturais ligados à sustentabilidade." },
              { t: "Administrativo", d: "Gerencia compras de matéria orgânica, contratos e suprimentos de forma otimizada." },
              { t: "Financeiro", d: "Administra e controla todos os recursos financeiros visando o crescimento sustentável." },
              { t: "Produção", d: "Focada na confecção sustentável, utilizando matérias-primas naturais sem agrotóxicos." },
              { t: "Sistemas", d: "Crucial para a transformação digital e eficiência operacional da organização." }
            ].map((setor, i) => (
              <div 
                key={i} 
                className="animate-cascade group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border-b-4 border-[#8FAE7A]"
                style={{ animationDelay: `${0.3 + (i * 0.1)}s` }}
              >
                <h4 className="font-serif text-2xl mb-4 text-[#5F6F52] group-hover:text-[#8FAE7A] transition-colors">{setor.t}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{setor.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACTO SOCIAL (Apresentação, pág. 17) */}
      <section className="py-24 px-6 text-center bg-[#5F6F52] text-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 animate-cascade" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-5xl font-serif mb-8">Impacto Social</h2>
          <p className="text-xl opacity-90 leading-relaxed mb-10">
            A empresa acredita que a moda pode ser uma ferramenta de <strong>transformação social</strong>, promovendo inclusão e regenerando o meio ambiente.
          </p>
          <Link href="/contato" className="inline-block bg-[#8FAE7A] text-[#5F6F52] font-bold py-4 px-12 rounded-full hover:bg-[#F4F2EC] transition-all uppercase tracking-widest text-xs">
            Junte-se ao Movimento
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#8FAE7A] opacity-30"></div>
      </section>
    </main>
  );
}