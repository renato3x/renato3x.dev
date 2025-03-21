import Hero from '@/components/sections/Hero';
import { WhoAmI } from '@/components/sections/WhoAmI';

export default function Home() {
  return (
    <main className="min-h-screen font-archivo">
      <Hero/>
      <WhoAmI/>
    </main>
  );
}
