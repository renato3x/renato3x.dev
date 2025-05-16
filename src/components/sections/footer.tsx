import Image from 'next/image';

export function Footer() {
  return (
    <footer className="flex flex-col relative items-center">
      <section className="bg-green-primary text-black-primary pt-[60px] pb-[30px] items-center flex flex-col w-full">
        <div className="absolute top-[-1] flex justify-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="300" height="20" viewBox="0 0 300 20" fill="none">
            <path d="M15.1167 20C20.6743 20 284.883 20 284.883 20L300 0H0C0 0 13 17.8833 15.1167 20Z" fill="#f1f1f1"/>
          </svg>
        </div>
        <section className="flex flex-col px-[30px] gap-5 w-full lg:max-w-[1000px] lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-col gap-1 lg:flex-row lg:gap-10">
            <li className="font-semibold lg:text-[18px]">
              <a href="#about-me">Sobre mim</a>
            </li>
            <li className="font-semibold lg:text-[18px]">
              <a href="#services">Serviços</a>
            </li>
            <li className="font-semibold lg:text-[18px]">
              <a href="#contact">Contato</a>
            </li>
          </ul>
          <div className="h-1 border-t lg:hidden"></div>
          <div className="flex items-center gap-1 lg:gap-2">
            <p className="font-semibold lg:text-[18px]">Redes Sociais:</p>
            <ul className="flex items-center gap-1">
              <li>
                <a href="https://www.linkedin.com/in/renato3x/" target="_blank">
                  <Image
                    src="/images/icon-linkedin.svg"
                    width={0}
                    height={0}
                    alt="LinkedIn Logo"
                    className="w-[20px] h-[20px]"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.github.com/renato3x" target="_blank">
                  <Image
                    src="/images/icon-github.svg"
                    width={0}
                    height={0}
                    alt="Github Logo"
                    className="w-[20px] h-[20px]"
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <section className="py-[20px] items-center flex flex-col w-full lg:py-[30px]">
        <section className="flex flex-col w-full lg:max-w-[1000px] lg:flex-row lg:justify-between gap-2 lg:px-[30px]">
          <div className="flex flex-col gap-2 items-center">
            <Image
              width={0}
              height={0}
              src="/images/logo-green.svg"
              alt="renato3x - Logo"
              className="w-[140px]"
            />
            <p className="text-[14px]">
              48.739.190/0001-90
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-0.5">
            <p>&copy; {new Date().getFullYear()} renato3x {'-'}</p>
            <p>
              <strong className="font-[500] lg:font-normal">Todos os direitos reservados.</strong>
            </p>
          </div>
        </section>
      </section>
    </footer>
  );
}
