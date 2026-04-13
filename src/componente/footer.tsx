import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#5F6F52] via-[#4A5D42] to-[#5F6F52] text-[#F4F2EC] relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/10 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#8FAE7A]/8 blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-white/5 blur-2xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-24 pb-8 md:pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 lg:gap-20">

          {/* Coluna 1: Identidade */}
          <div className="col-span-1 md:col-span-1 group">
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tighter mb-6 group-hover:text-[#8FAE7A] transition-colors">
                MAISON <br />
                <span className="text-[#8FAE7A]">ORGANIC</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#8FAE7A] to-[#7A9B6A] rounded-full mb-6" />
              <p className="text-[#F4F2EC]/70 text-base leading-relaxed italic font-medium">
                "Onde moda encontra propósito e sustentabilidade."
              </p>
            </div>

            {/* Badge de compromisso */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-2 h-2 rounded-full bg-[#8FAE7A] animate-pulse" />
              <span className="text-xs font-medium text-white/90">Compromisso Sustentável</span>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="group">
            <h4 className="text-[#8FAE7A] text-sm font-bold uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
              <div className="w-8 h-0.5 bg-[#8FAE7A] rounded-full" />
              Navegação
            </h4>
            <ul className="space-y-5">
              <li>
                <Link href="/" className="group/link flex items-center gap-3 text-base text-[#F4F2EC]/80 hover:text-[#8FAE7A] transition-all duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8FAE7A] opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  <span className="font-medium">Início</span>
                </Link>
              </li>
              <li>
                <Link href="/quem-somos" className="group/link flex items-center gap-3 text-base text-[#F4F2EC]/80 hover:text-[#8FAE7A] transition-all duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8FAE7A] opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  <span className="font-medium">Quem Somos</span>
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="group/link flex items-center gap-3 text-base text-[#F4F2EC]/80 hover:text-[#8FAE7A] transition-all duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8FAE7A] opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  <span className="font-medium">Coleções</span>
                </Link>
              </li>
              <li>
                <Link href="/contato" className="group/link flex items-center gap-3 text-base text-[#F4F2EC]/80 hover:text-[#8FAE7A] transition-all duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8FAE7A] opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  <span className="font-medium">Contato</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Valores da Marca */}
          <div className="group">
            <h4 className="text-[#8FAE7A] text-sm font-bold uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
              <div className="w-8 h-0.5 bg-[#8FAE7A] rounded-full" />
              Nossos Valores
            </h4>
            <ul className="space-y-5">
              <li className="group/item flex items-center gap-3 text-base text-[#F4F2EC]/80 hover:text-white transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-[#8FAE7A] opacity-60 group-hover/item:opacity-100 transition-opacity" />
                <span className="font-medium">Sustentabilidade</span>
              </li>
              <li className="group/item flex items-center gap-3 text-base text-[#F4F2EC]/80 hover:text-white transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-[#8FAE7A] opacity-60 group-hover/item:opacity-100 transition-opacity" />
                <span className="font-medium">Qualidade Premium</span>
              </li>
              <li className="group/item flex items-center gap-3 text-base text-[#F4F2EC]/80 hover:text-white transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-[#8FAE7A] opacity-60 group-hover/item:opacity-100 transition-opacity" />
                <span className="font-medium">Responsabilidade Ética</span>
              </li>
              <li className="group/item flex items-center gap-3 text-base text-[#F4F2EC]/80 hover:text-white transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-[#8FAE7A] opacity-60 group-hover/item:opacity-100 transition-opacity" />
                <span className="font-medium">Transparência Total</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Newsletter/Contato */}
          <div className="group">
            <h4 className="text-[#8FAE7A] text-sm font-bold uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
              <div className="w-8 h-0.5 bg-[#8FAE7A] rounded-full" />
              Conecte-se
            </h4>
            <p className="text-base text-[#F4F2EC]/80 mb-8 leading-relaxed">
              Fique por dentro das nossas novidades e lançamentos conscientes. Junte-se à nossa comunidade sustentável.
            </p>

            {/* Redes Sociais Aprimoradas */}
            <div className="flex gap-4 mb-8">
              <a href="https://www.instagram.com/maison.organic?igsh=MWl4azRxbjFqdTJrZQ==" className="group relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#F4F2EC]/30 flex items-center justify-center hover:border-[#8FAE7A] hover:bg-[#8FAE7A] focus:border-[#8FAE7A] focus:bg-[#8FAE7A] transition-all duration-300 hover:scale-110 focus:scale-110 hover:shadow-lg focus:shadow-lg hover:shadow-[#8FAE7A]/25 focus:shadow-[#8FAE7A]/25">
                <div className="absolute inset-0 bg-[#8FAE7A] rounded-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300" />
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#F4F2EC] relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="group relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#F4F2EC]/30 flex items-center justify-center hover:border-[#8FAE7A] hover:bg-[#8FAE7A] focus:border-[#8FAE7A] focus:bg-[#8FAE7A] transition-all duration-300 hover:scale-110 focus:scale-110 hover:shadow-lg focus:shadow-lg hover:shadow-[#8FAE7A]/25 focus:shadow-[#8FAE7A]/25">
                <div className="absolute inset-0 bg-[#8FAE7A] rounded-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300" />
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#F4F2EC] relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Newsletter signup */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-sm text-[#F4F2EC]/90 mb-4 font-medium">Receba nossas novidades</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#8FAE7A] transition-colors"
                />
                <button className="bg-[#8FAE7A] hover:bg-[#7A9B6A] focus:bg-[#7A9B6A] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior Aprimorado */}
        <div className="mt-24 pt-12 border-t border-[#F4F2EC]/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-[#F4F2EC]/60">
              <p className="font-medium">
                © 2024 Maison Organic — Projeto Espro. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8FAE7A]" />
                <span>Moda Consciente</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8FAE7A]" />
                <span>Feito no Brasil</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8FAE7A]" />
                <span>Com Amor 🌱</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-[#F4F2EC]/60">
              <Link href="/privacidade" className="hover:text-[#8FAE7A] transition-colors">Privacidade</Link>
              <span className="text-[#8FAE7A]/50">•</span>
              <Link href="/termos" className="hover:text-[#8FAE7A] transition-colors">Termos</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}