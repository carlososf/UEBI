import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-black text-white relative flex flex-col w-full selection:bg-[#39FF14] selection:text-black">
      <Hero />
      <Services />
      <Process />
      <Pricing />
      <Portfolio />
      <Contact />
    </main>
  );
}
