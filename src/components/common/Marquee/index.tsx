'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  direction?: 'left' | 'right'
}

export default function Marquee({ direction }: MarqueeProps) {
  const [ marquee, setMarquee ] = useState<string[]>([]);
  const directionOptions = {
    left: {
      initial: { x: '0%' },
      animate: { x: '-100%' },
    },
    right: {
      initial: { x: '-100%' },
      animate: { x: '0%' },
    }
  }

  useEffect(() => {
    fetch('/api/marquee')
    .then((response) => response.json())
    .then((urls) => setMarquee([...urls]));
  }, []);

  return (
    <div className="container mx-auto overflow-hidden">
      <div className="flex dark-gradient">
        <motion.div
          {...directionOptions[direction || 'left']}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex shrink-0"
        >
          {marquee.map((url, index) => (
            <img src={url} key={index} className="h-[28px] pr-5"/>
          ))}
        </motion.div>

        <motion.div
          {...directionOptions[direction || 'left']}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex shrink-0"
        >
          {marquee.map((url, index) => (
            <img src={url} key={index} className="h-[28px] pr-5"/>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
