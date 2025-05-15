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
            className="w-auto"
            alt="Divider top black"
          />
        </div>
        <div className="text-black-primary py-[50px] px-[30px] flex flex-col items-center lg:py-[100px]">
          <div className="flex flex-col lg:flex-row lg:max-w-[1000px] gap-10">
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
                className="min-w-[300px] lg:min-w-[450px]"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center absolute bottom-[-1]">
          <Image
            src="/images/divider-bottom-green.svg"
            width={0}
            height={0}
            className="w-auto"
            alt="Divider bottom green"
          />
        </div>
      </section>
    </>
  );
}

function Observation() {
  return (
    <section className="bg-green-primary py-[40px] px-[30px] text-black-primary flex flex-col gap-[20px] items-center lg:flex-row lg:justify-around lg:items-end">
      <div className="flex flex-col gap-[8px] lg:max-w-[500px]">
        <p className="font-semibold font-chakra text-center lg:text-start">Observação Importante:</p>
        <p className="text-center leading-5 lg:text-start">
          O custo do design será incluído no orçamento final, e os prazos poderão ser ajustados para acomodar a criação do layout.
        </p>
      </div>
      <div className="px-[40px]">
        <WhatsAppButton className="text-white-primary lg:w-[350px]"/>
      </div>
    </section>
  );
}
