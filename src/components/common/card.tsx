import { cn } from '@/lib/utils';

export function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'bg-black-secondary min-[150px] rounded-[8px] flex flex-col px-[20px] py-[30px] gap-3 relative',
        'before:block before:w-[71px] before:h-[6px] before:bg-green-primary before:absolute before:right-10 before:top-[-2] before:light-shadow',
        className,
      )}
      {...props}
    />
  )
}

export function CardIcon({ className, ...props }: React.ComponentProps<'img'>) {
  return (
    <img
      className={cn(
        'w-[34px] h-[34px]',
        className,
      )}
      {...props}
    />
  )
}

export function CardTitle({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'font-[600] font-chakra text-[26px]',
        className,
      )}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'text-[18px]',
        className,
      )}
      {...props}
    />
  );
}
