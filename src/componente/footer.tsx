import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#5F6F52] text-[#F4F2EC]">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          
          {/* Coluna 1: Identidade */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-3xl font-display font-bold tracking-tighter mb-6">
              MAISON <br /> ORGANIC
            </h3>
            <p className="text-[#F4F2EC]/70 text-sm leading-relaxed italic">
              "Onde moda encontra propósito."
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-[#8FAE7A] text-xs font-bold uppercase tracking-[0.2em] mb-8">Navegação</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-[#8FAE7A] transition-colors">Início</Link></li>
              <li><Link href="/quem-somos" className="hover:text-[#8FAE7A] transition-colors">Quem Somos</Link></li>
              <li><Link href="/produtos" className="hover:text-[#8FAE7A] transition-colors">Coleções</Link></li>

            </ul>
          </div>

          {/* Coluna 3: Valores da Marca */}
          <div>
            <h4 className="text-[#8FAE7A] text-xs font-bold uppercase tracking-[0.2em] mb-8">Nossos Valores</h4>
            <ul className="space-y-4 text-sm text-[#F4F2EC]/80">
              <li className="flex items-center gap-2">Sustentabilidade</li>
              <li className="flex items-center gap-2">Qualidade Premium</li>
              <li className="flex items-center gap-2">Responsabilidade Ética</li>
              <li className="flex items-center gap-2">Transparência Total</li>
            </ul>
          </div>

          {/* Coluna 4: Newsletter/Contato */}
          <div>
            <h4 className="text-[#8FAE7A] text-xs font-bold uppercase tracking-[0.2em] mb-8">Contato</h4>
            <p className="text-sm text-[#F4F2EC]/80 mb-4">
              Fique por dentro das nossas novidades e lançamentos conscientes.
            </p>
            <div className="flex gap-4 mt-6">
              <div className="w-10 h-10 rounded-full border border-[#F4F2EC]/20 flex items-center justify-center hover:bg-[#8FAE7A] hover:border-[#8FAE7A] transition-all cursor-pointer">
                <span className="text-[10px] font-bold">IG</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-[#F4F2EC]/20 flex items-center justify-center hover:bg-[#8FAE7A] hover:border-[#8FAE7A] transition-all cursor-pointer">
                <span className="text-[10px] font-bold">LK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="mt-20 pt-8 border-t border-[#F4F2EC]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-[#F4F2EC]/40">
            © 2024 Maison Organic — Projeto Espro. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-[#F4F2EC]/40">
            <span>Moda Consciente</span>
            <span>Feito no Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
}