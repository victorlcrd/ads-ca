// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Ponto CRUCIAL: Importa todos os estilos do Tailwind
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Plataforma CA-ADS',
  description: 'Hub digital do Centro Acadêmico de ADS do IFSC',
};

// Criamos um componente simples para o Rodapé, já com nossas cores
function Footer() {
  return (
    <footer className="bg-ca-dark text-ca-cream mt-auto">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Centro Acadêmico de ADS - IFSC. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      {/* Usamos flexbox para garantir que o rodapé fique na base */}
      <body className={`${inter.className} flex flex-col min-h-full`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}