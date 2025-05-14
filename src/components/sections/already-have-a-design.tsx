import Image from 'next/image';
import { WhatsAppButton } from '../common/whatsapp-button';

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
        <div className="text-black-primary h-full py-[50px] px-[30px] flex flex-col gap-5">
          <div className="flex flex-col gap-5 md:px-[100px]">
            <h2 className="text-[28px] font-chakra leading-[1.3]">
              Já tem um Design?<br/>
              <span className="font-semibold highlight">Vamos começar!</span>
            </h2>

            <p>
              Para que o desenvolvimento do seu site ou aplicativo seja ágil,{' '}
              <strong>é importante que você envie um design pronto.</strong>{' '}
              Caso ainda não tenha, podemos cuidar disso para você!
            </p>

            <p>
              Assim que o orçamento for aprovado, entrarei em contato com designers{' '}
              de confiança, que irão trabalhar para transformar sua ideia em um layout{' '}
              visual claro e profissional.
            </p>

            <p>
              Isso garantirá que o desenvolvimento do projeto seja eficiente e alinhado às suas expectativas.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/macbook-flat.svg"
              alt="Macbook image"
              width={0}
              height={0}
              className="w-[420px]"
            />
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
      <section className="bg-green-primary py-[40px] px-[30px] text-black-primary flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[8px]">
          <p className="font-semibold font-chakra text-center">Observação Importante:</p>
          <p className="text-center leading-5">
            O custo do design será incluído no orçamento final, e os prazos poderão ser ajustados para acomodar a criação do layout.
          </p>
        </div>
        <div className="px-[40px]">
          <WhatsAppButton className="text-white-primary"/>
        </div>
      </section>
    </>
  );
}
