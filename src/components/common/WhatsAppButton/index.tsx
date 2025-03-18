import Image from "next/image";
import clsx from 'clsx';

interface WhatsAppButtonProps {
  highlight?: boolean;
}

export default function WhatsAppButton({ highlight }: WhatsAppButtonProps) {
  return (
    <a className={clsx(
      `flex justify-center items-center gap-1.5 px-[40] py-[14] rounded-[6px] hover:cursor-pointer`,
      highlight ? 'bg-linear-to-r from-green-darker to-green-primary shadow-[0_11px_33px_0] shadow-green-shadow' : 'bg-green-secondary',
    )}>
      <Image
        src="/images/wpp-icon.svg"
        alt="WhatsApp Icon"
        width={15}
        height={15}
      />

      <span className="font-chakra">
        Solicitar Orçamento
      </span>
    </a>
  )
}
