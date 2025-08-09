import { Button } from '@/components/ui/button';
import { Poppins } from 'next/font/google';
import Navbar from './home/partials/navbar';

export default function Home() {
  return (
    <div className='min-h-[2000px]'>
      <Navbar />
    </div>
  );
}
