import Image from 'next/image';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps extends React.ComponentProps<'a'> {
  highlight?: boolean;
}

export function WhatsAppButton({ highlight, className, ...props}: WhatsAppButtonProps) {
  return (
    <a
      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE}`}
      target="_blank"
      className={cn(
        'flex justify-center items-center gap-1.5 px-[40px] py-[14px] rounded-[6px] hover:cursor-pointer',
        highlight ? 'bg-linear-to-r from-green-darker to-green-primary shadow-[0_11px_33px_0] shadow-green-shadow' : 'bg-green-secondary',
        className,
      )}
      {...props}
    >
      <Image
        src="/images/wpp-icon.svg"
        alt="WhatsApp Icon"
        width={0}
        height={0}
        className="w-[15px] h-[15px]"
      />

      <span className="font-chakra">
        Solicitar Orçamento
      </span>
    </a>
  );
}
