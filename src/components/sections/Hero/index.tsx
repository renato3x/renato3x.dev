import WhatsAppButton from '@/components/common/WhatsAppButton';
import Marquee from '@/components/common/Marquee';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="h-[80vh] bg-[url('/images/hero-mobile.svg')] bg-contain bg-top bg-no-repeat flex flex-col">
      <div className="flex-1 flex flex-col justify-start items-center gap-3 pt-15 px-11">
        <Image
          width={0}
          height={0}
          src="/images/logo-green.svg"
          alt="renato3x - Logo"
          className="w-[166px] h-[30.5px]"
        />
        <h1 className="text-white-secondary text-center font-chakra text-[28px]">
          Desenvolvimento de Sites e Sistemas Sob Medida – <span className="highlight">Do Front ao Back</span>, com Qualidade e Rapidez
        </h1>
        <p className="text-white-secondary text-center font-archivo text-[18px]">
          Crie sua presença digital com soluções personalizadas para startups, microempresas e empreendedores.
        </p>
        <WhatsAppButton highlight/>
      </div>
      <Marquee/>
    </section>
  );
}
