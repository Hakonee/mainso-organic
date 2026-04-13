import React from 'react';

const produtos = [
  {
    id: 1,
    nome: "Ecobag Maison",
    descricao: "Algodão orgânico e sustentável",
    preco: "R$ 49,90",
    tag: "Essencial"
  },
  {
    id: 2,
    nome: "Camisa Polo Verde",
    descricao: "Fibra natural com logo bordada",
    preco: "R$ 129,90",
    tag: "Mais Vendido"
  },
  {
    id: 3,
    nome: "Caneca Coffee ++",
    descricao: "Cerâmica artesanal fosca",
    preco: "R$ 35,00",
    tag: "Lifestyle"
  },
  {
    id: 4,
    nome: "Jaqueta Sustentável",
    descricao: "Corte alfaiataria em sarja orgânica",
    preco: "R$ 289,00",
    tag: "Premium"
  }
];

export default function Vitrine() {
  return (
    <section className="bg-organic-off-white py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho da Vitrine - Baseado na pág. 19 */}
        <div className="text-center mb-12">
          <h2 className="font-display text-organic-dark-green text-4xl md:text-5xl mb-4">
            Nossa Coleção
          </h2>
          <p className="font-sans text-organic-earth italic">
            "Onde moda encontra propósito."
          </p>
        </div>

        {/* Grade de Produtos - Baseado na pág. 18 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {produtos.map((produto) => (
            <div key={produto.id} className="group cursor-pointer">
              {/* Placeholder da Imagem */}
              <div className="aspect-square bg-white rounded-2xl mb-4 flex items-center justify-center overflow-hidden border border-organic-green/20 group-hover:border-organic-green transition-colors">
                <span className="text-organic-green font-display text-lg">Imagem {produto.nome}</span>
              </div>
              
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-organic-green font-bold">
                  {produto.tag}
                </span>
                <h3 className="font-display text-xl text-organic-dark-green">
                  {produto.nome}
                </h3>
                <p className="text-sm text-gray-600 font-sans">
                  {produto.descricao}
                </p>
                <p className="font-bold text-organic-earth mt-2">
                  {produto.preco}
                </p>
              </div>
              
              <button className="w-full mt-4 py-2 bg-organic-dark-green text-white rounded-lg font-sans text-sm hover:bg-organic-green transition-colors">
                Adicionar ao Carrinho
              </button>
            </div>
          ))}
        </div>

        {/* Banner do Lino - Baseado na pág. 9 */}
        <div className="mt-20 bg-organic-green/10 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 border border-organic-green/30">
          <div className="w-32 h-32 bg-white rounded-full flex-shrink-0 flex items-center justify-center text-4xl">
            🦥
          </div>
          <div>
            <h4 className="font-display text-2xl text-organic-dark-green mb-2">Conheça o Lino</h4>
            <p className="font-sans text-organic-dark-green/80 max-w-2xl">
              De acordo com o nosso manifesto (pág. 9), o Lino representa o movimento <strong>slow fashion</strong>. 
              Valorizamos uma moda mais calma, consciente e com roupas feitas para durar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}