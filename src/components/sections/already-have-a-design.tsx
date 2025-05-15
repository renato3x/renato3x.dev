import Image from 'next/image';
import { WhatsAppButton } from '@/components/common/whatsapp-button';

export function AlreadyHaveADesign() {
  return (
    <>
      <section className="bg-white relative">
        <div className="flex w-full justify-center absolute top-[-1]">
          <Image
            src="/images/divider-top-black.svg"
            width={0}
            height={0}
            className="w-auto h-auto lg:w-[600px] lg:h-[40px]"
            alt="Divider top black"
          />
        </div>
        <div className="text-black-primary py-[50px] px-[30px] flex flex-col items-center md:py-[100px]">
          <div className="flex flex-col md:flex-row lg:max-w-[1000px] gap-10">
            <div className="flex flex-col gap-6">
              <h2 className="font-chakra text-[28px] leading-[1.3] lg:text-[48px]">
                Já tem um Design?<br/>
                <span className="font-semibold highlight">Vamos começar!</span>
              </h2>

              <p className="lg:text-[20px]">
                Para que o desenvolvimento do seu site ou aplicativo seja ágil,{' '}
                <strong>é importante que você envie um design pronto.</strong>{' '}
                Caso ainda não tenha, podemos cuidar disso para você!
              </p>

              <p className="lg:text-[20px]">
                Assim que o orçamento for aprovado, entrarei em contato com designers{' '}
                de confiança, que irão trabalhar para transformar sua ideia em um layout{' '}
                visual claro e profissional.
              </p>

              <p className="lg:text-[20px]">
                Isso garantirá que o desenvolvimento do projeto seja eficiente e alinhado às suas expectativas.
              </p>
            </div>

            <div className="flex justify-center items-center">
              <Image
                src="/images/macbook-flat.svg"
                alt="Macbook image"
                width={0}
                height={0}
                className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px]"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center absolute bottom-[-1]">
          <Image
            src="/images/divider-bottom-green.svg"
            width={0}
            height={0}
            className="w-auto h-auto lg:w-[600px] lg:h-[40px]"
            alt="Divider bottom green"
          />
        </div>
      </section>
      <Observation/>
    </>
  );
}

function Observation() {
  return (
    <section className="bg-green-primary text-black-primary py-[50px] px-[30px] flex flex-col items-center">
      <div className="flex flex-col gap-4 lg:flex-row lg:w-full lg:justify-around">
        <div className="flex flex-col gap-1">
          <div className="font-semibold font-chakra text-center lg:text-start">Observação Importante:</div>
          <p className="text-center md:max-w-[500px] lg:text-start">
            O custo do design será incluído no orçamento final, e os prazos poderão ser ajustados para acomodar a criação do layout.
          </p>
        </div>
        <div className="flex justify-center lg:items-center">
          <WhatsAppButton className="text-white-primary"/>
        </div>
      </div>
    </section>
  );
}
