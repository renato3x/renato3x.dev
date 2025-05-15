'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MarqueeProps extends React.ComponentProps<'div'> {
  direction?: 'rtl' | 'ltr';
}

export function Marquee({ className, direction, ...props }: MarqueeProps) {
  const [ marqueeImages, setMarqueeImages ] = useState<string[]>([]);
  const directionOptions = {
    rtl: {
      initial: { x: '0%' },
      animate: { x: '-100%' },
    },
    ltr: {
      initial: { x: '-100%' },
      animate: { x: '0%' },
    }
  };

  useEffect(() => {
    fetch('/api/marquee')
    .then((response) => response.json())
    .then((urls) => setMarqueeImages([...urls]));
  }, []);

  return (
    <div
      className={cn(
        'w-full overflow-hidden bg-transparent',
        className,
      )}
      {...props}
    >
      <div className="flex dark-gradient">
        {new Array(3).fill(0).map((_, key) => (
          <motion.div
            key={key}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="flex shrink-0"
            {...directionOptions[direction || 'ltr']}
          >
            {marqueeImages.map((url, index) => (
              <Image
                src={url}
                key={index}
                alt={url}
                width={0}
                height={0}
                className="h-[28px] w-auto pr-5"
              />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
