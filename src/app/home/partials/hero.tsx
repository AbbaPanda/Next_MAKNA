import { Button } from '@/assets/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='custom-container flex flex-wrap items-center gap-7 overflow-hidden md:pt-57.5 pt-31.25'>

      {/* left */}
      <div className='flex-[4.4] basis-80 z-20 pb-9 '>
        <div className='flex max-w-[653px] flex-col gap-10'>
          <h1 className='text-display-lg text-neutral-50 md:text-display-3xl leading-tight font-semibold md:font-bold'>MENCIPTA <br /><span className='text-primary-200'> Perlaku Sukses</span></h1>

          <p className='text-md font-semibold md:text-xl md:font-semibold'>deskripsi</p>
          <Button asChild className='flex h-11 w-full px-16 md:h-12 md:w-fit'>
            <Link href='#contact'>Mulai Disini</Link>
          </Button>
        </div>
      </div>
      {/* right */}
      <div className='flex-[5.6] basis-80 md:absolute '>
        <div>
          <img src='/images/hero-image.png' alt="bg" />
        </div>
      </div>
    </section>
  )
}

export default Hero