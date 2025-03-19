'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react'

export default function Marquee() {
  const [ marquee, setMarquee ] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/marquee')
    .then((response) => response.json())
    .then((urls) => setMarquee(urls));
  });

  return (
    <div className="w-full overflow-hidden">
      <div className="flex items-center gap-5 animate-marquee">
        {marquee.map((url, index) => (
          <img src={url} alt={url} key={index} className="w-auto h-[37px]"/>
        ))}
      </div>
    </div>
  )
}
