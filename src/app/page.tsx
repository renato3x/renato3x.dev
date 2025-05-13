import { Hero } from '@/components/sections/hero';
import { WhoAmI } from '@/components/sections/who-am-i';

export default function Home() {
  return (
    <main className="min-h-screen font-archivo">
      <Hero/>
      <WhoAmI/>
    </main>
  );
}
