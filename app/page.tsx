import About from '@/components/shared/About';
import Hero from '@/components/shared/Hero';
import Projects from '@/components/shared/Projects';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col items-center w-full'>
      <Hero />
      <Projects />
      <About />
    </div>
  );
}
