
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function ReadyToStart() {
  return (
    <section className="flex py-[60px] px-[30px] bg-white-secondary text-black-primary justify-center" id="contact">
      <div className="flex flex-col gap-4 items-center grow">
        <h2 className="text-[30px] font-chakra text-center font-[500]">Pronto Para Começar?</h2>
        <p className="text-center text-[18px] md:max-w-[450px]">
          Fale comigo agora mesmo e transforme sua ideia em realidade digital. <span className="font-semibold">Vamos construir algo incrível juntos!</span>
        </p>
        <div
          className={cn(
            'flex flex-col p-[20px] bg-green-primary gap-[10px] rounded-[16px]',
            'w-full md:flex-row md:justify-around lg:max-w-[750px]',
            'shadow-[0px_70px_28px_rgba(0,0,0,0.01),_0px_40px_24px_rgba(0,0,0,0.05),_0px_18px_18px_rgba(0,0,0,0.09),_0px_4px_10px_rgba(0,0,0,0.10)]'
          )}
        >
          <div className="flex gap-3 justify-center items-center">
            <Image
              src="/images/icon-wpp.svg"
              width={0}
              height={0}
              alt="Icon WhatsApp"
              className="w-[20px] h-[20px]"
            />

            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE}`}
              target="_blank"
              className="text-[18px]"
            >
              {process.env.NEXT_PUBLIC_FORMATTED_WHATSAPP_NUMBER}
            </a>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <Image
              src="/images/logo-white.svg"
              width={0}
              height={0}
              alt="renato3x - Logo"
              className="w-[20px] h-[20px]"
            />
          </div>
          <div className="flex gap-3 justify-center items-center">
            <Image
              src="/images/icon-email.svg"
              width={0}
              height={0}
              alt="Icon WhatsApp"
              className="w-[20px] h-[20px]"
            />

            <a
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
              className="text-[18px]"
            >
              {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
