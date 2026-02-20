import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-white text-black relative flex flex-col w-full selection:bg-[#39FF14] selection:text-white">
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Contact />
    </main>
  );
}
