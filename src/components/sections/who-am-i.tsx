import Image from 'next/image';
import { Card, CardDescription, CardIcon, CardTitle } from '../common/card';

export function WhoAmI() {
  const cardsData = [
    {
      'icon': '/images/icons/icon-dev.svg',
      'title': 'Desenvolvimento Completo',
      'description': 'Frontend e backend para projetos personalizados.',
    },
    {
      'icon': '/images/icons/icon-ecommerce.svg',
      'title': 'E-commerces e Landing Pages',
      'description': 'Sites otimizados para vendas e conversão.',
    },
    {
      'icon': '/images/icons/icon-system.svg',
      'title': 'Sistemas Personalizados',
      'description': 'Gerenciamento de vendas, estoque, plataformas sociais, e mais.',
    },
    {
      'icon': '/images/icons/icon-support.svg',
      'title': 'Manutenção e Suporte',
      'description': 'Cuidado contínuo para sistemas novos ou existentes.',
    },
    {
      'icon': '/images/icons/icon-dev-mobile.svg',
      'title': 'Aplicativos Mobile',
      'description': 'Criação de apps com React Native para ampliar sua presença digital.',
    },
  ];

  return (
    <section className="flex flex-col px-[35px] py-[40px] gap-[30px] md:py-[100px] md:gap-[100px]">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-center md:gap-30">
        <div className="flex flex-col gap-3 md:max-w-[650px]">
          <h2 className="font-chakra text-[28px] md:text-[48px]">
            Quem <span className="highlight">sou eu?</span>
          </h2>

          <p className="md:text-[24px]">
            Sou Renato, especialista em <span className="font-bold">desenvolvimento Fullstack, com mais de 4 anos de atuação no mercado</span>, ajudando empresas e empreendedores a transformarem suas ideias em soluções digitais de alta performance.
          </p>

          <p className="md:text-[24px]">
            Trabalho com as tecnologias mais avançadas do mercado, desenvolvendo sites, plataformas e sistemas sob medida – sempre com foco em <span className="font-bold">agilidade, segurança e escalabilidade</span>.
          </p>

          <p className="md:text-[24px]">
            Meu compromisso é ir além do código: <span className="font-bold">entrego resultados que impulsionam negócios</span>.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/images/profile.svg"
            width={0}
            height={0}
            alt="renato3x - Desenvolvimento de Software"
            className="min-w-[322px] md:w-[500px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-center items-center">
          <Image
            src="/images/services-title.svg"
            alt="Services"
            width={0}
            height={0}
            className="w-[120px] md:w-[200px]"
          />
        </div>

        <h3 className="font-chakra text-[28px] text-center px-20 md:text-[48px]">O que posso fazer por você</h3>
        <Services/>
      </div>
    </section>
  );
}

function Services() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:flex-row md:justify-center">
        <Card>  
          <CardIcon src="/images/icons/icon-dev.svg"/>
          <CardTitle>Desenvolvimento Completo</CardTitle>
          <CardDescription>
            Frontend e backend para projetos personalizados.
          </CardDescription>
        </Card>

        <Card>
          <CardIcon src="/images/icons/icon-ecommerce.svg"/>
          <CardTitle>E-commerces e Landing Pages</CardTitle>
          <CardDescription>
            Sites otimizados para vendas e conversão.
          </CardDescription>
        </Card>

        <Card>
          <CardIcon src="/images/icons/icon-system.svg"/>
          <CardTitle>Sistemas Personalizados</CardTitle>
          <CardDescription>
            Gerenciamento de vendas, estoque, plataformas sociais, e mais.
          </CardDescription>
        </Card>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:justify-center">
        <Card>
          <CardIcon src="/images/icons/icon-support.svg"/>
          <CardTitle>Manutenção e Suporte</CardTitle>
          <CardDescription>
            Cuidado contínuo para sistemas novos ou existentes.
          </CardDescription>
        </Card>

        <Card>
          <CardIcon src="/images/icons/icon-dev-mobile.svg"/>
          <CardTitle>Aplicativos Mobile</CardTitle>
          <CardDescription>
            Criação de apps com React Native para ampliar sua presença digital.
          </CardDescription>
        </Card>
      </div>
    </div>
  );
}
