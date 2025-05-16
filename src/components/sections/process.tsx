'use client';

import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const sectionRef = useRef<HTMLElement>({} as HTMLElement);

  return (
    <section className="flex px-[35px] py-[40px] justify-center" ref={sectionRef}>
      <div className="flex flex-col gap-[50px] w-full lg:max-w-[1000px]">
        <div className="flex flex-col gap-6">
          <Image
            src="/images/tagline-process.svg"
            width={0}
            height={0}
            alt="Tagline Process"
            className="w-[120px] md:w-[200px]"
          />

          <h2 className="font-chakra text-[28px] max-w-[270px] md:text-[48px] md:max-w-[450px]">
            Do primeiro contato{' '}
            <span className="highlight">
              à entrega final
            </span>
          </h2>
        </div>

        <div className="flex justify-center gap-3 lg:flex-col-reverse">
          <Scroll parent={sectionRef}/>
          <Processes/>
        </div>
      </div>
    </section>
  );
}

interface ScrollProps {
  parent: React.RefObject<HTMLElement>;
}

function Scroll({ parent }: ScrollProps) {
  const verticalProgressRef = useRef<HTMLDivElement>(null);
  const horizontalProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!verticalProgressRef.current) {
      return;
    }

    gsap.fromTo(
      verticalProgressRef.current,
      { height: '0%' },
      {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: verticalProgressRef.current.parentElement,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      },
    );
  }, [verticalProgressRef]);

  useEffect(() => {
    if (!horizontalProgressRef.current) {
      return;
    }

    gsap.fromTo(
      horizontalProgressRef.current,
      { width: '0%' },
      {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: parent.current,
          start: 'left center',
          end: 'right center',
          scrub: true,
        },
      },
    );
  }, [horizontalProgressRef, parent]);

  return (
    <>
      <div
        className={cn(
          'w-[2px] h-full bg-black-secondary',
          'flex justify-center relative overflow-hidden',
          'lg:hidden',
        )}
      >
        <div
          ref={verticalProgressRef}
          className="bg-green-primary w-full"
          style={{ height: '0%' }}
        />
      </div>

      <div
        className={cn(
          'h-[4px] w-full bg-black-secondary',
          'flex flex-col justify-center relative overflow-hidden',
          'hidden lg:block',
        )}
      >
        <div
          ref={horizontalProgressRef}
          className="bg-green-primary h-full"
          style={{ width: '0%' }}
        />
      </div>
    </>
  );
}

function Processes() {
  return (
    <div className="grid grid-cols-1 grid-rows-5 lg:grid-cols-5 lg:grid-rows-1 gap-3">
      <ProcessItem>
        <Image
          src="/images/icon-idea.svg"
          width={0}
          height={0}
          alt="Idea"
          className="w-[30px] h-[30px]"
        />
        <ProcessItemHeader>
          <ProcessItemTitle>
            Compartilhe sua Ideia
          </ProcessItemTitle>
        </ProcessItemHeader>
        <ProcessItemDescription>
          Fale comigo via WhatsApp ou e-mail e explique sua necessidade.
        </ProcessItemDescription>
      </ProcessItem>

      <ProcessItem>
        <Image
          src="/images/icon-quote.svg"
          width={0}
          height={0}
          alt="Quote"
          className="w-[30px] h-[30px]"
        />
        <ProcessItemHeader>
          <ProcessItemTitle>
            Orçamento Personalizado
          </ProcessItemTitle>
        </ProcessItemHeader>
        <ProcessItemDescription>
          Receba um plano detalhado com as tecnologias, custos e prazos envolvidos.
        </ProcessItemDescription>
      </ProcessItem>

      <ProcessItem>
        <Image
          src="/images/icon-design.svg"
          width={0}
          height={0}
          alt="Design"
          className="w-[30px] h-[30px]"
        />
        <ProcessItemHeader>
          <ProcessItemTitle>
            Criação do Design
          </ProcessItemTitle>
          <ProcessItemSubtitle>
            Se Necessário
          </ProcessItemSubtitle>
        </ProcessItemHeader>
        <ProcessItemDescription>
          Designers de confiança entrarão em contato para desenvolver um layout alinhado à sua ideia.
        </ProcessItemDescription>
      </ProcessItem>

      <ProcessItem>
        <Image
          src="/images/icon-dev.svg"
          width={0}
          height={0}
          alt="Dev"
          className="w-[30px] h-[30px]"
        />
        <ProcessItemHeader>
          <ProcessItemTitle>
            Desenvolvimento Transparente
          </ProcessItemTitle>
        </ProcessItemHeader>
        <ProcessItemDescription>
          Disponibilizo versões de teste ao longo do projeto.
        </ProcessItemDescription>
      </ProcessItem>

      <ProcessItem>
        <Image
          src="/images/icon-delivery.svg"
          width={0}
          height={0}
          alt="Delivery"
          className="w-[30px] h-[30px]"
        />
        <ProcessItemHeader>
          <ProcessItemTitle>
            Entrega e Suporte
          </ProcessItemTitle>
        </ProcessItemHeader>
        <ProcessItemDescription>
          O sistema é entregue finalizado, com 1 mês de suporte gratuito.
        </ProcessItemDescription>
      </ProcessItem>
    </div>
  );
}

function ProcessItem({ className, ...options }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        className,
      )}
      {...options}
    />
  );
}

function ProcessItemHeader({ className, ...options }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex flex-col leading-none',
        className,
      )}
      {...options}
    />
  );
}

function ProcessItemTitle({ className, ...options }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'leading-none text-[26px] font-semibold font-chakra lg:text-[22px]',
        className,
      )}
      {...options}
    />
  );
}

function ProcessItemSubtitle({ className, ...options }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'font-chakra text-green-primary',
        className,
      )}
      {...options}
    />
  );
}

function ProcessItemDescription({ className, ...options }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'lg:text-[14px]',
        className,
      )}
      {...options}
    />
  );
}
