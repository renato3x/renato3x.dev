import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/card';

export function WhoAmI() {
  return (
    <section className="flex px-[35px] py-[40px] md:py-[100px] gap-[30px] md:gap-[100px] justify-center">
      <div className="flex flex-col md:max-w-[1000px] gap-[50px] md:gap-[100px]">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-col gap-6">
            <h2 className="font-chakra text-[28px] md:text-[48px]">
              Quem <span className="highlight">sou eu?</span>
            </h2>

            <p className="md:text-[24px]">
              Sou Renato, especialista em <span className="font-bold">desenvolvimento Fullstack, com mais de 4 anos de atuação no mercado</span>,
              ajudando empresas e empreendedores a transformarem suas ideias em soluções digitais de alta performance.
            </p>

            <p className="md:text-[24px]">
              Trabalho com as tecnologias mais avançadas do mercado, desenvolvendo sites, plataformas e sistemas sob medida –
              sempre com foco em <span className="font-bold">agilidade, segurança e escalabilidade</span>.
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
              className="min-w-[322px]"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-10">
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
      </div>
    </section>
  );
}

function Services() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:flex-row md:justify-center">
        <Card className="lightbar min-h-[240px]">
          <CardHeader>
            <Image
              src="/images/icons/icon-dev.svg"
              width={0}
              height={0}
              alt="Icon dev"
              className="w-[34px] h-[34px]"
            />
            <CardTitle className="text-[26px] font-chakra max-w-50">Desenvolvimento Completo</CardTitle>
          </CardHeader>
          <CardContent className="text-[18px]">
            <p className="max-w-80">Frontend e backend para projetos personalizados.</p>
          </CardContent>
        </Card>

        <Card className="lightbar min-h-[240px]">
          <CardHeader>
            <Image
              src="/images/icons/icon-ecommerce.svg"
              width={0}
              height={0}
              alt="Icon ecommerce"
              className="w-[34px] h-[34px]"
            />
            <CardTitle className="text-[26px] font-chakra max-w-50">E-commerces e Landing Pages</CardTitle>
          </CardHeader>
          <CardContent className="text-[18px]">
            <p className="max-w-80">Sites otimizados para vendas e conversão.</p>
          </CardContent>
        </Card>

        <Card className="lightbar min-h-[240px]">
          <CardHeader>
            <Image
              src="/images/icons/icon-system.svg"
              width={0}
              height={0}
              alt="Icon system"
              className="w-[34px] h-[34px]"
            />
            <CardTitle className="text-[26px] font-chakra max-w-50">Sistemas Personalizados</CardTitle>
          </CardHeader>
          <CardContent className="text-[18px]">
            <p className="max-w-80">Gerenciamento de vendas, estoque, plataformas sociais, e mais.</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:justify-center">
        <Card className="lightbar min-h-[240px]">
          <CardHeader>
            <Image
              src="/images/icons/icon-support.svg"
              width={0}
              height={0}
              alt="Icon support"
              className="w-[34px] h-[34px]"
            />
            <CardTitle className="text-[26px] font-chakra max-w-50">Manutenção e Suporte</CardTitle>
          </CardHeader>
          <CardContent className="text-[18px]">
            <p className="max-w-80">Cuidado contínuo para sistemas novos ou existentes.</p>
          </CardContent>
        </Card>

        <Card className="lightbar min-h-[240px]">
          <CardHeader>
            <Image
              src="/images/icons/icon-dev-mobile.svg"
              width={0}
              height={0}
              alt="Icon mobile"
              className="w-[34px] h-[34px]"
            />
            <CardTitle className="text-[26px] font-chakra max-w-50">Aplicativos Mobile</CardTitle>
          </CardHeader>
          <CardContent className="text-[18px]">
            <p className="max-w-80">Criação de apps com React Native para ampliar sua presença digital.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

