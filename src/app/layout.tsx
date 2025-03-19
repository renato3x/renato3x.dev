import './globals.css';
import type { Metadata } from 'next';
import { Archivo, Chakra_Petch } from 'next/font/google';

const archivo = Archivo({
  variable: '--archivo',
  subsets: ['latin'],
});

const chakra = Chakra_Petch({
  variable: '--chakra-petch',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'renato3x',
  description: 'Desenvolvimento de Sites e Sistemas Sob Medida - Do Front ao Back, com Qualidade e Rapidez',
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="pt-br" className={`${archivo.variable} ${chakra.variable}`}>
      <body className="bg-black-primary text-white-primary">
        {children}
      </body>
    </html>
  );
}
