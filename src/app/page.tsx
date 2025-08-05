import { Button } from '@/components/ui/button';
import { Poppins } from 'next/font/google';

export default function Home() {
  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20'>
      <h1> MAKNA </h1>
      <Button>Transform Now</Button>
      <h1 className='flex justify-center gap-3 bg-amber-600'>
        menjadi lebih baik dari dalam
      </h1>
    </div>
  );
}
