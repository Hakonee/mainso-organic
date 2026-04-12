'use client'; // Isso define que este componente roda apenas no cliente

import dynamic from 'next/dynamic';

// Importa o VLibras desativando o SSR apenas aqui
const VLibrasComponent = dynamic(() => import('./VLibras'), {
  ssr: false,
});

export default function Acessibilidade() {
  return <VLibrasComponent />;
}