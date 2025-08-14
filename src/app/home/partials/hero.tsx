import { Button } from '@/assets/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='custom-container flex flex-wrap items-center gap-7 overflow-hidden md:pt-57.5 pt-31.25'>

      {/* left */}
      <div className='flex-[4.4] basis-80 z-20'>
        <div className='flex max-w-[653px] flex-col gap-10'>
          <h1 className='text-display-lg text-neutral-25 md:text-display-3xl leading-tight font-semibold md:font-bold'>MENCIPTA <br /><span className='text-primary-200'> Perlaku Sukses</span></h1>

          <p>deskripsi</p>
          <Button>Mulai</Button>
        </div>
      </div>
      {/* right */}
      <div className='flex-[5.6] basis-80'>
        <div>
          <Image src="" alt="bg" />
        </div>
      </div>
    </section>
  )
}

export default Hero