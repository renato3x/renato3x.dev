import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/common/card";
import { WhatsAppButton } from "../common/whatsapp-button";
import { cn } from "@/lib/utils";

export function TransparentInvestment() {
  return (
    <section className="relative">
      <div className="flex px-[35px] py-[40px] justify-center md:py-[100px]">
        <div className="flex flex-col gap-[50px] grow lg:flex-row lg:max-w-[1000px] items-center justify-center lg:gap-[100px]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h2 className="font-chakra text-[28px] md:text-[48px] max-w-[200px] lg:leading-none lg:text-[48px]">
                Investimento <span className="highlight">Transparente</span>
              </h2>

              <p className="lg:text-[24px]">
                Cada projeto é único, e o orçamento é feito sob medida. Aqui estão alguns exemplos de preços iniciais:
              </p>

              <div className="h-[1px] border-t border-t-white-primary"></div>

              <div
                style={{
                  background: 'linear-gradient(90deg, #00A36E 0%, #00D992 100%)'
                }}
                className={cn(
                  'bg-green-primary flex justify-center items-center',
                  'text-black-primary gap-2 px-[20px] py-[5px] lg:px-[25px]',
                  'w-min whitespace-nowrap font-semibold lg:text-[32px] font-chakra',
                )}
              >
                Bônus Exclusivo
                <Image
                  src="/images/icon-bonus.svg"
                  width={0}
                  height={0}
                  className="w-[30px] h-[30px]"
                  alt="Icons bonus"
                />
              </div>

              <div className="pl-5">
                <ul className="flex flex-col gap-4 list-disc marker:text-green-primary">
                  <li className="text-[18px] leading-[1.2]">
                    <span className="font-semibold text-green-primary">
                      20% de desconto
                    </span> em seu primeiro projeto conosco.
                  </li>
                  <li className="text-[18px] leading-[1.2]">
                    <span className="font-semibold text-green-primary">
                      01 mês de suporte gratuito
                    </span> após a entrega do projeto
                  </li>
                  <li className="text-[18px] leading-[1.2]">
                    Após esse período, <span className="font-semibold text-green-primary">você pode continuar com o nosso suporte por um valor fixo de</span> R$ 2.000,00 + R$ 25,00/h para demendas adicionais.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 w-full">
            <CardPrices/>
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-[-1] flex justify-center">
        <Image
          src="/images/divider-top-white.svg"
          width={0}
          height={0}
          alt="Divider top white"
          className="w-auto h-auto lg:h-[40px] lg:w-[600px]"
        />
      </div>
    </section>
  );
}

function CardPrices() {
  return (
    <Card className="gap-10">
      <CardHeader className="flex-row justify-center">
        <Image
          src="/images/logo-green.svg"
          width={0}
          height={0}
          alt="renato3x - Logo"
          className="w-[170px]"
        />
      </CardHeader>
      <CardContent className="gap-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <span className="font-semibold font-chakra text-[20px]">
            Landing Page
          </span>
          <span>
            A partir de <span className="font-semibold highlight">R$ 2.000,00</span>
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <span className="font-semibold font-chakra text-[20px]">
            E-commerce
          </span>
          <span>
            A partir de <span className="font-semibold highlight">R$ 6.000,00</span>
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <span className="font-semibold font-chakra text-[20px]">
            Sistemas Personalizados
          </span>
          <span>
            Sob consulta
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <span className="font-semibold font-chakra text-[20px]">
            Design Exclusivo
          </span>
          <span>
            Incluso no orçamento final
          </span>
        </div>
      </CardContent>
      <CardContent className="lg:items-center">
        <p className="text-center lg:max-w-[300px] lg:text-center">
          <span className="font-semibold text-green-primary text-center">* Obs.:</span> Todos os projetos incluem briefing estratégico e alinhamento detalhado antes do desenvolvimento.
        </p>
      </CardContent>
      <CardContent className="lg:px-15">
        <WhatsAppButton highlight/>
      </CardContent>
    </Card>
  );
}
