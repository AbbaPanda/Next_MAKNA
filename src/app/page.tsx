import { Button } from '@/assets/components/ui/button';
import { Poppins } from 'next/font/google';
import Navbar from './home/partials/navbar';
import Hero from './home/partials/hero';

export default function Home() {
  return (
    <div className='min-h-[2000px]'>
      <Navbar />
      <Hero />
    </div>
  );
}
