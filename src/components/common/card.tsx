import { cn } from '@/lib/utils';

export function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'bg-black-secondary rounded-[8px]',
        'flex flex-col px-[20px] py-[30px] gap-3',
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'w-full flex flex-col gap-3',
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'leading-none font-semibold',
        className,
      )}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'w-full flex flex-col gap-3',
        className,
      )}
      {...props}
    />
  );
}
