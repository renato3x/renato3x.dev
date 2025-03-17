import './globals.css';
import type { Metadata } from 'next';
import { Archivo, Chakra_Petch } from 'next/font/google';

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] 
});

const chakra = Archivo({
  variable: '--font-chakra',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] 
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'renato3x.dev',
  description: 'Desenvolvimento de Sites e Sistemas Sob Medida - Do Front ao Back, com Qualidade e Rapidez',
};

export default function RootLayout({
  children
}: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body className={`${archivo.className} ${chakra.className} bg-black-primary text-white-primary`}>
        {children}
      </body>
    </html>
  );
}
