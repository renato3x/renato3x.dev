import { Marquee } from "@/components/common/marquee";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/card";
import Image from "next/image";

export function WhyChooseMe() {
  return (
    <>
      <section className="flex flex-col px-[35px] py-[40px] items-center md:py-[60px]">
        <div className="flex flex-col gap-10 md:max-w-[1000px] md:gap-5">
          <h2 className="font-chakra text-[28px] md:text-[48px] max-w-[200px] md:max-w-none">
            Por que me escolher?
          </h2>
          <WhyChooseMeCards/>
        </div>
      </section>
      <Marquee direction="rtl"/>
    </>
  );
}

function WhyChooseMeCards() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:flex-row md:justify-center">
        <Card className="lightbar min-h-[200px] flex-1">
          <CardHeader>
            <Image
              src="/images/logo-icon.svg"
              width={0}
              height={0}
              className="w-[30px] h-[30px]"
              alt="renato3x - Logo Icon"
            />
            <CardTitle className="text-[26px] font-chakra">Tecnologias Modernas</CardTitle>
          </CardHeader>
          <CardContent className="text-[18px]">
            <p>Utilizo ferramentas como React, Vue, Nest.js, GraphQL, AWS, e mais.</p>
          </CardContent>
        </Card>

        <Card className="lightbar min-h-[200px] flex-1">
          <CardHeader>
            <Image
              src="/images/logo-icon.svg"
              width={0}
              height={0}
              className="w-[30px] h-[30px]"
              alt="renato3x - Logo Icon"
            />
            <CardTitle className="text-[26px] font-chakra">Soluções Seguras</CardTitle>
          </CardHeader>
          <CardContent className="text-[18px]">
            <p>Seu projeto será escalável e protegido contra falhas.</p>
          </CardContent>
        </Card>

        <Card className="lightbar min-h-[200px] flex-1">
          <CardHeader>
            <Image
              src="/images/logo-icon.svg"
              width={0}
              height={0}
              className="w-[30px] h-[30px]"
              alt="renato3x - Logo Icon"
            />
            <CardTitle className="text-[26px] font-chakra">Prazo e Transparência</CardTitle>
          </CardHeader>
          <CardContent className="text-[18px]">
            <p>Entrega garantida dentro do prazo combinado.</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:justify-center">
        <Card className="lightbar min-h-[200px] flex-1">
          <CardHeader>
            <Image
              src="/images/logo-icon.svg"
              width={0}
              height={0}
              className="w-[30px] h-[30px]"
              alt="renato3x - Logo Icon"
            />
            <CardTitle className="text-[26px] font-chakra">Código 100% seu</CardTitle>
          </CardHeader>
          <CardContent className="text-[18px]">
            <p>Após a entrega, você terá total controle sobre o projeto.</p>
          </CardContent>
        </Card>

        <Card className="lightbar min-h-[200px] flex-1">
          <CardHeader>
            <Image
              src="/images/logo-icon.svg"
              width={0}
              height={0}
              className="w-[30px] h-[30px]"
              alt="renato3x - Logo Icon"
            />
            <CardTitle className="text-[26px] font-chakra">Desconto Exclusivo</CardTitle>
          </CardHeader>
          <CardContent className="text-[18px]">
            <p>20% de desconto para novos clientes.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
