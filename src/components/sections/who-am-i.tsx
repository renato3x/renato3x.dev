import Image from "next/image";
import { Card, CardDescription, CardIcon, CardTitle } from "../common/card";

export function WhoAmI() {
  const cardsData = [
    {
      'icon': '/images/icons/icon-dev.svg',
      'title': 'Desenvolvimento Completo',
      'description': 'Frontend e backend para projetos personalizados.'
    },
    {
      'icon': '/images/icons/icon-ecommerce.svg',
      'title': 'E-commerces e Landing Pages',
      'description': 'Sites otimizados para vendas e conversão.'
    },
    {
      'icon': '/images/icons/icon-system.svg',
      'title': 'Sistemas Personalizados',
      'description': 'Gerenciamento de vendas, estoque, plataformas sociais, e mais.'
    },
    {
      'icon': '/images/icons/icon-support.svg',
      'title': 'Manutenção e Suporte',
      'description': 'Cuidado contínuo para sistemas novos ou existentes.'
    },
    {
      'icon': '/images/icons/icon-dev-mobile.svg',
      'title': 'Aplicativos Mobile',
      'description': 'Criação de apps com React Native para ampliar sua presença digital.'
    }
  ];

  return (
    <section className="flex flex-col relative overflow-hidden">
      <div className="absolute top-[700] right-[-800] w-[1000px] h-[1000px] bg-green-primary opacity-30 blur-[150px] rounded-full z-[-1]" />
      <div className="flex flex-col px-[35px] py-[40px] gap-[30px]">
        <div className="flex flex-col gap-3">
          <h2 className="font-chakra text-[28px]">
            Quem <span className="highlight">sou eu?</span>
          </h2>

          <p>
            Sou Renato, especialista em <span className="font-bold">desenvolvimento Fullstack, com mais de 4 anos de atuação no mercado</span>, ajudando empresas e empreendedores a transformarem suas ideias em soluções digitais de alta performance.
          </p>

          <p>
            Trabalho com as tecnologias mais avançadas do mercado, desenvolvendo sites, plataformas e sistemas sob medida – sempre com foco em <span className="font-bold">agilidade, segurança e escalabilidade</span>.
          </p>

          <p>
            Meu compromisso é ir além do código: <span className="font-bold">entrego resultados que impulsionam negócios</span>.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/images/profile.svg"
            width={0}
            height={0}
            alt="renato3x - Desenvolvimento de Software"
            className="w-[322px]"
          />
        </div>
      </div>
      <div className="flex flex-col px-[35px] py-[40px] gap-[30px]">
        <div className="flex justify-center items-center">
          <Image
            src="/images/services-title.svg"
            alt="Services"
            width={0}
            height={0}
            className="w-[120px]"
          />
        </div>

        <h3 className="font-chakra text-[28px] text-center px-20">O que posso fazer por você</h3>

        <div className="flex flex-col gap-4">
          {cardsData.map((card, index) => (
            <Card key={index}>
              <CardIcon src={card.icon}/>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
