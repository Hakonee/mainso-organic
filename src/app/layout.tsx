import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../componente/Header";
import Footer from "../componente/footer";
import Acessibilidade from "../componente/Acessibilidade";
import StyledJsxRegistry from "../lib/registry"; // Importa o registro para corrigir o erro de hidratação

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Maison Organic | Moda com Propósito",
  description: "Onde moda encontra propósito. Marca sustentável criada no Espro.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* 
       Adicionamos suppressHydrationWarning no <html> porque ferramentas como o VLibras 
       e extensões de tradução injetam atributos que podem causar avisos no console.
    */
    <html lang="pt-br" className={`${poppins.variable} h-full antialiased`} suppressHydrationWarning>
      {/* 
          Aplicamos a cor de fundo Off-white (#F4F2EC) e a cor do texto Verde Escuro (#5F6F52)
          conforme definido na Paleta de Cores do Manual de Identidade Visual (pág. 4).
      */}
      <body className="min-h-full flex flex-col bg-[#F4F2EC] font-sans text-[#5F6F52]">
        <StyledJsxRegistry>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          {/* O componente de acessibilidade (Client Component) fica aqui */}
          <Acessibilidade />
        </StyledJsxRegistry>
      </body>
    </html>
  );
}