import Hero from '@/components/Hero';
import Banner from '@/components/Banner';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white relative flex flex-col w-full selection:bg-[#39FF14] selection:text-white dark:selection:text-black transition-colors duration-500">
      <Hero />
      <Banner />
      <Services />
      <Process />
      <Portfolio />
      <Contact />
    </main>
  );
}

