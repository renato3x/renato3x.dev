import Image from 'next/image';
import { WhatsAppButton } from '@/components/common/whatsapp-button';
import { Marquee } from '@/components/common/marquee';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <>
      <section className={cn(
        'bg-[url("/images/hero-mobile.svg")] bg-cover md:bg-[url("/images/hero-desktop.svg")]',
        'h-[80vh] bg-no-repeat md:bg-cover md:bg-bottom flex justify-center',
      )}>
        <div className="max-w-[800px] flex flex-col justify-start items-center gap-[20px] pt-15 px-11 mx-auto">
          <Image
            width={0}
            height={0}
            src="/images/logo-green.svg"
            alt="renato3x - Logo"
            className="w-[166px]"
          />
          <h1 className="text-white-secondary text-center font-chakra text-[28px]">
            Desenvolvimento de Sites e Sistemas Sob Medida – <span className="highlight">Do Front ao Back</span>, com Qualidade e Rapidez
          </h1>
          <p className="text-white-secondary text-center text-[18px]">
            Crie sua presença digital com soluções personalizadas para startups, microempresas e empreendedores.
          </p>
          <WhatsAppButton highlight/>
        </div>
      </section>
      <Marquee/>
    </>
  );
}
