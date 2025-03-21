import Image from "next/image";

export function WhoAmI() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col px-[35px] py-[40px] gap-[30px]">
        <div className="flex flex-col gap-3 font-archivo">
          <h2 className="font-chakra text-[28px]">
            Quem <span className="highlight">sou eu?</span>
          </h2>

          <p>
            Sou Renato, especialista em <span className="font-bold">desenvolvimento Fullstack, com mais de 4 anos de atuação no mercado</span>, ajudando empresas e empreendedores a transformarem suas ideias em soluções digitais de alta performance.
          </p>

          <p>
            Trabalho com as tecnologias mais avançadas do mercado, desenvolvendo sites, plataformas e sistemas sob medida – sempre com foco em <span className="font-bold">agilidade, segurança e escalabilidade</span>.
          </p>

          <p>
            Meu compromisso é ir além do código: <span className="font-bold">entrego resultados que impulsionam negócios</span>.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/images/profile.svg"
            width={0}
            height={0}
            alt="renato3x - Desenvolvimento de Software"
            className="w-[322px]"
          />
        </div>
      </div>
      <div className="flex flex-col px-[35px] py-[40px] gap-[30px]">
        <div className="flex justify-center items-center">
          <Image
            src="/images/services-title.svg"
            alt="Services"
            width={0}
            height={0}
            className="w-[120px]"
          />
        </div>

        <h3 className="font-chakra text-[28px] text-center px-15">O que posso fazer por você</h3>
      </div>
    </section>
  )
}
