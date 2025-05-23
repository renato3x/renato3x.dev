import './globals.css';
import type { Metadata } from 'next';
import { Archivo, Chakra_Petch } from 'next/font/google';
import Script from 'next/script';

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
  description: 'Engenheiro de Software Backend com experiência sólida em APIs REST, microsserviços, DevOps e cloud computing. Especialista em Node.js, NestJS, React e AWS. Transforme seu projeto em um produto robusto, escalável e moderno.',
  keywords: [
    // Identity & Name
    'Renato Pereira',
    'Renato3x',
    'renato3x.dev',
    'engenheiro de software',
    'desenvolvedor fullstack',
    'desenvolvedor backend',
    'freelancer fullstack',
    'freelancer backend',
    'programador freelancer',
    'consultor de software',

    // Services
    'criação de site profissional',
    'desenvolvimento de sistemas sob medida',
    'desenvolvimento de software personalizado',
    'criação de landing page',
    'desenvolvimento de e-commerce',
    'desenvolvimento de aplicativo',
    'PWA',
    'integração com ERP',
    'automação de processos',
    'modernização de sistemas legados',
    'melhoria de performance em sistemas',

    // Backend Technologies
    'Node.js',
    'NestJS',
    'Express',
    'Fastify',
    'Java',
    'Spring Boot',
    'Python',
    'Go',
    'Golang',
    'REST',
    'GraphQL',
    'microserviços',
    'API RESTful',
    'Socket.io',
    'Swagger',
    'Apache Kafka',
    'RabbitMQ',

    // Frontend Technologies
    'React',
    'Vue',
    'Angular',
    'Next.js',
    'React Native',
    'Electron',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind',
    'Bootstrap',

    // Databases
    'MySQL',
    'PostgreSQL',
    'SQL Server',
    'MongoDB',
    'Redis',

    // DevOps & Infra
    'DevOps',
    'AWS',
    'Google Cloud',
    'GCP',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'Bitbucket Pipelines',
    'GitHub Actions',
    'Terraform',
    'Jenkins',
    'monitoramento com Grafana',
    'monitoramento com Prometheus',

    // Tests
    'testes automatizados',
    'Jest',
    'Vitest',
    'Cypress',
    'SonarQube',

    // Niche & Contexts
    'software para empresas',
    'soluções digitais para startups',
    'programador para pequenas empresas',
    'desenvolvimento remoto',
    'desenvolvimento escalável',
    'desenvolvimento seguro',
    'software sob demanda',
    'backend resiliente',
    'infraestrutura cloud-native',
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_APPLICATION_URL),
  alternates: {
    canonical: '/',
  },
  authors: [
    {
      name: 'Renato Pereira',
      url: process.env.NEXT_PUBLIC_APPLICATION_URL,
    },
  ],
  creator: 'Renato Pereira',
  publisher: 'renato3x',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: 'renato3x - Desenvolvimento de Sites e Sistemas Sob Medida - Do Front ao Back, com Qualidade e Rapidez',
    url: process.env.NEXT_PUBLIC_APPLICATION_URL,
    siteName: 'renato3x.dev',
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 800,
        height: 800,
        alt: 'renato3x - Software Engineer',
      },
    ],
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="pt-br" className={`${archivo.variable} ${chakra.variable} scroll-smooth`}>
      <head>
        <Script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5ZF8RB98');
            `,
          }}
        />
      </head>
      <body className="bg-black-primary text-white-primary">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5ZF8RB98"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
