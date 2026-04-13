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
      <section className="relative py-16 md:py-32 px-4 md:px-6 min-h-screen flex items-center bg-gradient-to-br from-[#F4F2EC] via-white to-[#F4F2EC] overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#8FAE7A]/5 blur-2xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#5F6F52]/5 blur-2xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#8FAE7A]/3 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-10 animate-cascade" style={{ animationDelay: '0.1s' }}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-[#8FAE7A]/10 px-4 py-2 rounded-full border border-[#8FAE7A]/20">
                <div className="w-2 h-2 rounded-full bg-[#8FAE7A] animate-pulse" />
                <span className="text-[#5F6F52] text-sm font-medium uppercase tracking-wide">
                  Nossa Essência
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif leading-tight text-[#5F6F52]">
                Sobre <br />
                <span className="text-[#8FAE7A]">Nós</span>
              </h1>

              <div className="space-y-6">
                <p className="text-xl leading-relaxed text-[#7A5C3E] font-medium">
                  Na Maison Organic, acreditamos que o verdadeiro cuidado nasce da simplicidade e da pureza da natureza.
                  Criamos produtos que unem qualidade, leveza e propósito.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Mais do que uma marca, somos um convite para um estilo de vida mais equilibrado, onde o bem-estar caminha junto com o respeito ao planeta.
                  Cada detalhe é pensado com carinho para oferecer uma experiência que cuida de você por inteiro.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-[#8FAE7A]/10 shadow-lg">
                <p className="italic text-xl border-l-4 border-[#8FAE7A] pl-8 py-4 text-[#5F6F52] font-medium leading-relaxed">
                  "Maison Organic é sobre essência, cuidado e autenticidade — porque o natural também pode ser sofisticado."
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-cascade" style={{ animationDelay: '0.4s' }}>
            {/* Badge flutuante */}
            <div className="absolute -top-6 -left-6 z-20 animate-bounce">
              <div className="bg-[#8FAE7A] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                👥 Nossa Equipe
              </div>
            </div>

            {/* Container da imagem com efeitos */}
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-[#8FAE7A]/20 to-[#5F6F52]/20 rounded-[3rem] blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative overflow-hidden rounded-[3rem] bg-[#F4F2EC] shadow-[0_40px_100px_rgba(95,111,82,0.12)] group-hover:shadow-[0_50px_120px_rgba(95,111,82,0.18)] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src="/equipe-maison.jpg"
                  alt="Equipe Maison Organic"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay com mensagem */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-[#5F6F52] text-sm font-medium text-center">
                    "Pessoas apaixonadas criando moda consciente"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE - NOSSA JORNADA (Apresentação, pág. 4) */}
      <section className="bg-gradient-to-br from-[#5F6F52] via-[#4A5D42] to-[#5F6F52] text-[#F4F2EC] py-16 md:py-32 px-4 md:px-6 relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/10 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#8FAE7A]/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-white/5 blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-24 animate-cascade" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#8FAE7A] animate-pulse" />
              <span className="text-white/90 uppercase tracking-[0.2em] text-sm font-medium">
                Nossa Jornada
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-serif leading-tight mb-6">
              Nossa <br />
              <span className="text-[#8FAE7A]">História</span>
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
              Uma trajetória de paixão pela sustentabilidade e compromisso com um futuro mais consciente.
            </p>
          </div>

          <div className="space-y-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#8FAE7A]/40 before:to-transparent">

            {/* Janeiro */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-cascade" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#8FAE7A] bg-gradient-to-br from-[#8FAE7A] to-[#7A9B6A] text-white font-bold shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg">01</span>
              </div>
              <div className="w-[calc(100%-5rem)] md:w-[45%] p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-[#8FAE7A]/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#8FAE7A]" />
                  <h3 className="font-serif text-3xl text-[#8FAE7A]">Janeiro</h3>
                </div>
                <p className="text-white/80 leading-relaxed text-lg">
                  A Maison Organic é criada dentro do ecossistema Espro, nascendo da visão de unir moda e sustentabilidade.
                </p>
              </div>
            </div>

            {/* Fevereiro */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-cascade" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#8FAE7A] bg-gradient-to-br from-[#8FAE7A] to-[#7A9B6A] text-white font-bold shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg">02</span>
              </div>
              <div className="w-[calc(100%-5rem)] md:w-[45%] p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-[#8FAE7A]/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#8FAE7A]" />
                  <h3 className="font-serif text-3xl text-[#8FAE7A]">Fevereiro</h3>
                </div>
                <p className="text-white/80 leading-relaxed text-lg">
                  A empresa estabelece parcerias estratégicas com fornecedores comprometidos com práticas sustentáveis e éticas.
                </p>
              </div>
            </div>

            {/* Março */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-cascade" style={{ animationDelay: '0.7s' }}>
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#8FAE7A] bg-gradient-to-br from-[#8FAE7A] to-[#7A9B6A] text-white font-bold shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg">03</span>
              </div>
              <div className="w-[calc(100%-5rem)] md:w-[45%] p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-[#8FAE7A]/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#8FAE7A]" />
                  <h3 className="font-serif text-3xl text-[#8FAE7A]">Março</h3>
                </div>
                <p className="text-white/80 leading-relaxed text-lg">
                  Criação de laços e visibilidade no mundo da moda sustentável, adequando-se ao mercado atual com inovação e propósito.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PILARES E LINO (Apresentação, pág. 9) */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-br from-white via-[#F4F2EC] to-white relative overflow-hidden">
        {/* Elementos decorativos sutis */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#8FAE7A]/5 blur-2xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#5F6F52]/5 blur-2xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#8FAE7A]/3 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
            <div className="order-2 md:order-1 animate-cascade space-y-10" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-[#8FAE7A]/10 px-4 py-2 rounded-full border border-[#8FAE7A]/20">
                  <div className="w-2 h-2 rounded-full bg-[#8FAE7A] animate-pulse" />
                  <span className="text-[#5F6F52] text-sm font-medium uppercase tracking-wide">
                    Nosso Coração
                  </span>
                </div>

                <h2 className="font-serif text-[#5F6F52] text-3xl md:text-5xl lg:text-7xl leading-tight">
                  Lino: O Coração da <br />
                  <span className="text-[#8FAE7A]">Nossa Criação</span>
                </h2>

                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    O bicho-preguiça foi escolhido como mascote por representar os valores da marca:
                    <strong className="text-[#5F6F52]"> calma, consciência e respeito pela natureza</strong>.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Ele simboliza o movimento <strong className="text-[#8FAE7A]">slow fashion</strong>, valorizando uma moda mais humana e roupas feitas para durar.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group animate-cascade" style={{ animationDelay: '0.4s' }}>
              {/* Badge flutuante */}
              <div className="absolute -top-8 -left-8 z-20 animate-bounce">
                <div className="bg-[#8FAE7A] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  🐌 Lino
                </div>
              </div>

              {/* Container da imagem com efeitos */}
              <div className="relative">
                <div className="absolute bottom-0 right-0 w-full h-[80%] bg-[#8FAE7A]/10 rounded-[4rem] -z-10 transform translate-x-10 translate-y-10 group-hover:translate-x-12 group-hover:translate-y-12 transition-transform duration-500" />
                <div className="relative h-[320px] md:h-[700px] w-full overflow-hidden rounded-[4rem] bg-[#F4F2EC] shadow-[0_40px_100px_rgba(95,111,82,0.12)] group-hover:shadow-[0_50px_120px_rgba(95,111,82,0.18)] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src="/lino-mascote.png"
                    alt="Lino Mascote Maison Organic"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain object-bottom transform group-hover:scale-105 transition-transform duration-700"
                    priority
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
          </div>

          {/* MISSÃO, VISÃO E VALORES (Apresentação, pág. 6) */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Missão",
                description: "Oferecer moda acessível, sustentável e inclusiva. Que respeita o meio ambiente e valoriza todas as pessoas em cada etapa do processo.",
                color: "text-gray-600",
                icon: "🎯"
              },
              {
                title: "Visão",
                description: "Ser a marca de referência em moda orgânica e sustentável, inspirando práticas responsáveis e transformando a indústria da moda.",
                color: "text-gray-600",
                icon: "🔭"
              },
              {
                title: "Valores",
                description: "Sustentabilidade, Qualidade, Responsabilidade, Transparência e Ética guiam cada decisão que tomamos.",
                color: "text-[#7A5C3E] font-medium",
                icon: "💎"
              }
            ].map((item, i) => (
              <div
                key={i}
                className="animate-cascade group relative overflow-hidden p-10 bg-gradient-to-br from-[#F4F2EC] to-white rounded-[2.5rem] border border-[#5F6F52]/5 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
                style={{ animationDelay: `${0.6 + (i * 0.15)}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8FAE7A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8FAE7A] to-[#7A9B6A] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-serif text-4xl mb-6 text-[#5F6F52] group-hover:text-[#8FAE7A] transition-colors">{item.title}</h3>
                  <p className={`text-base leading-relaxed ${item.color}`}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRUTURA ORGANIZACIONAL (Apresentação, págs. 11-16) */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-br from-[#F4F2EC] via-[#E9E6DC] to-[#F4F2EC] relative overflow-hidden">
        {/* Elementos decorativos sutis */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#8FAE7A]/5 blur-2xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#5F6F52]/5 blur-2xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#8FAE7A]/3 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 animate-cascade" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center gap-3 bg-[#8FAE7A]/10 px-6 py-3 rounded-full border border-[#8FAE7A]/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#8FAE7A] animate-pulse" />
              <span className="text-[#5F6F52] text-sm font-medium uppercase tracking-wide">
                Nossa Estrutura
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-serif leading-tight text-[#5F6F52] mb-6">
              Excelência <br />
              <span className="text-[#8FAE7A]">Operacional</span>
            </h2>
            <p className="text-[#7A5C3E] font-medium text-xl max-w-3xl mx-auto leading-relaxed">
              Conheça os setores que fazem da Maison Organic uma referência em moda sustentável
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Marketing",
                description: "Área responsável por comunicar, posicionar e conectar a marca com o público através de estratégias digitais e conteúdo autêntico.",
                icon: "📢",
                color: "from-[#8FAE7A] to-[#7A9B6A]"
              },
              {
                title: "Inteligência",
                description: "Analisa tendências de mercado e movimentos culturais ligados à sustentabilidade, guiando decisões estratégicas da marca.",
                icon: "🧠",
                color: "from-[#5F6F52] to-[#8FAE7A]"
              },
              {
                title: "Administrativo",
                description: "Gerencia compras de matéria orgânica, contratos e suprimentos de forma otimizada e sustentável.",
                icon: "📋",
                color: "from-[#8FAE7A] to-[#5F6F52]"
              },
              {
                title: "Financeiro",
                description: "Administra e controla todos os recursos financeiros visando o crescimento sustentável e responsável da empresa.",
                icon: "💰",
                color: "from-[#7A9B6A] to-[#8FAE7A]"
              },
              {
                title: "Produção",
                description: "Focada na confecção sustentável, utilizando matérias-primas naturais sem agrotóxicos e processos limpos.",
                icon: "🏭",
                color: "from-[#5F6F52] to-[#7A9B6A]"
              },
              {
                title: "Sistemas",
                description: "Crucial para a transformação digital e eficiência operacional da organização, desenvolvendo soluções tecnológicas sustentáveis.",
                icon: "💻",
                color: "from-[#8FAE7A] to-[#5F6F52]"
              }
            ].map((setor, i) => (
              <div
                key={i}
                className="animate-cascade group relative overflow-hidden p-8 bg-gradient-to-br from-white to-[#F4F2EC] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-b-4 border-[#8FAE7A]"
                style={{ animationDelay: `${0.3 + (i * 0.1)}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8FAE7A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${setor.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-2xl">{setor.icon}</span>
                  </div>
                  <h4 className="font-serif text-2xl mb-4 text-[#5F6F52] group-hover:text-[#8FAE7A] transition-colors font-bold">{setor.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-base">{setor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACTO SOCIAL (Apresentação, pág. 17) */}
      <section className="py-16 md:py-32 px-4 md:px-6 text-center bg-gradient-to-br from-[#5F6F52] via-[#4A5D42] to-[#5F6F52] text-white relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/10 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#8FAE7A]/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-white/5 blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 animate-cascade space-y-16" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <div className="w-2 h-2 rounded-full bg-[#8FAE7A] animate-pulse" />
              <span className="text-white/90 uppercase tracking-[0.2em] text-sm font-medium">
                Impacto Social
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-serif leading-tight">
              Transformando a <br />
              <span className="text-[#8FAE7A]">Indústria da Moda</span>
            </h2>

            <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-4xl mx-auto">
              A empresa acredita que a moda pode ser uma ferramenta de <strong className="text-[#8FAE7A]">transformação social</strong>,
              promovendo inclusão e regenerando o meio ambiente através de práticas sustentáveis e éticas.
            </p>
          </div>

          {/* Cards de impacto */}
          <div className="grid gap-8 sm:grid-cols-3 py-12">
            <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-lg p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8FAE7A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold text-[#8FAE7A] mb-4 group-hover:scale-110 transition-transform">🌱</div>
                <div className="text-lg text-white font-medium mb-2">Sustentabilidade</div>
                <div className="w-full h-1 bg-[#8FAE7A]/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#8FAE7A] rounded-full animate-pulse" style={{ width: '100%' }} />
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-lg p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5F6F52]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold text-[#8FAE7A] mb-4 group-hover:scale-110 transition-transform">🤝</div>
                <div className="text-lg text-white font-medium mb-2">Inclusão Social</div>
                <div className="w-full h-1 bg-[#8FAE7A]/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#8FAE7A] rounded-full animate-pulse" style={{ width: '100%' }} />
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-lg p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8FAE7A]/5 to-[#5F6F52]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold text-[#8FAE7A] mb-4 group-hover:scale-110 transition-transform">♻️</div>
                <div className="text-lg text-white font-medium mb-2">Regeneração</div>
                <div className="w-full h-1 bg-gradient-to-r from-[#8FAE7A] to-[#5F6F52] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#8FAE7A] to-[#5F6F52] animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Call-to-action aprimorado */}
          <div className="pt-8">
            <Link href="/contato" className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-gradient-to-r from-[#8FAE7A] to-[#7A9B6A] text-[#5F6F52] font-bold uppercase tracking-[0.15em] text-lg rounded-full shadow-2xl transition-all duration-500 hover:shadow-[#8FAE7A]/25 hover:scale-110 hover:-translate-y-1">
              <span className="relative z-10">Junte-se ao Movimento</span>
              <svg className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-[#7A9B6A] to-[#8FAE7A] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#8FAE7A] to-[#5F6F52] opacity-30"></div>
      </section>
    </main>
  );
}