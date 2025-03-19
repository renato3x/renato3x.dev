import WhatsAppButton from '@/components/common/WhatsAppButton';
import Marquee from '@/components/common/Marquee';

export default function Hero() {
  return (
    <div>
      <section className="h-screen bg-[url('/images/hero-mobile.svg')] bg-contain bg-top bg-no-repeat flex justify-center items-start p-11">
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src="/images/logo-green.svg"
            alt="renato3x - Logo"
            className="w-[166px] h-[30.5px]"
          />
          <p className="text-white-secondary text-center font-chakra text-[28px]">
            Desenvolvimento de Sites e Sistemas Sob Medida – <span className="highlight">Do Front ao Back</span>, com Qualidade e Rapidez
          </p>
          <p className="text-white-secondary text-center font-archivo text-[18px]">
            Crie sua presença digital com soluções personalizadas para startups, microempresas e empreendedores.
          </p>
          <WhatsAppButton highlight/>
        </div>
      </section>
      <Marquee/>
    </div>
  );
}
