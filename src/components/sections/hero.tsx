import Image from 'next/image';
import { WhatsAppButton } from '@/components/common/whatsapp-button';
import { Marquee } from '@/components/common/marquee';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <>
      <section className={cn(
        'bg-[url("/images/hero-mobile.svg")] bg-cover md:bg-[url("/images/hero-desktop.svg")]',
        'min-h-[80vh] md:min-h-screen md bg-no-repeat md:bg-cover md:bg-bottom flex justify-center',
      )}>
        <div className="flex flex-col justify-start items-center gap-[20px] pt-15 px-11 lg:max-w-[1200px]">
          <Image
            width={0}
            height={0}
            src="/images/logo-green.svg"
            alt="renato3x - Logo"
            className="min-w-[166px] lg:min-w-[230px]"
          />
          <h1 className="text-white-secondary text-center font-chakra text-[28px] lg:text-[48px]">
            Desenvolvimento de Sites e Sistemas Sob Medida – <span className="highlight">Do Front ao Back</span>, com Qualidade e Rapidez
          </h1>
          <p className="text-white-secondary text-center text-[18px] lg:max-w-[500px]">
            Crie sua presença digital com soluções personalizadas para startups, microempresas e empreendedores.
          </p>
          <WhatsAppButton highlight/>
        </div>
      </section>
      <Marquee/>
    </>
  );
}
