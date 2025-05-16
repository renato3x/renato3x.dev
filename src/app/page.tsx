import { AlreadyHaveADesign } from '@/components/sections/already-have-a-design';
import { Footer } from '@/components/sections/footer';
import { Hero } from '@/components/sections/hero';
import { Process } from '@/components/sections/process';
import { ReadyToStart } from '@/components/sections/ready-to-start';
import { TransparentInvestment } from '@/components/sections/transparent-investment';
import { WhoAmI } from '@/components/sections/who-am-i';
import { WhyChooseMe } from '@/components/sections/why-choose-me';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <WhoAmI/>
      <AlreadyHaveADesign/>
      <Process/>
      <WhyChooseMe/>
      <TransparentInvestment/>
      <ReadyToStart/>
      <Footer/>
    </main>
  );
}
