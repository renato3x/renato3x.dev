import { cn } from '@/lib/utils';

export function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'bg-black-secondary min-h-[240px] w-auto rounded-[8px]',
        'flex flex-col px-[20px] py-[30px] gap-3 relative',
        'md:max-w-[400px]',
        'before:block before:w-[71px] before:h-[6px] before:bg-green-primary',
        'before:absolute before:right-10 before:top-[-2] before:light-shadow',
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
        'font-[600] font-chakra text-[26px] max-w-[200px] md:text-[32px] md:max-w-[250px] md:leading-[1.2]',
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
        'text-[18px] md:text-[24px] md:max-w-[350px]',
        className,
      )}
      {...props}
    />
  );
}
