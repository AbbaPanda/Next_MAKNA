'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { navigationData } from '@/app/constants/navigation-data';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Fullscreen, Menu } from 'lucide-react';

const Navbar = () => {

  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0,0,0,0.5)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <motion.header style={{ background, backdropFilter: backdropBlur }}
      className='fixed z-50 w-full top-0 p-4'>
      <div className='flex-between '>
        <div className='flex items-center gap-2'>
          <Image
            src='/images/LOGO-MAKNA.png'
            alt='makna'
            width={120}
            height={120}
          />
        </div>

        <nav className='hidden md:block'>
          <ul className='flex items-center gap-5 '>
            {navigationData.map((data) => (
              <li key={data.title}>
                <Link className='md:font-semibold md:text-md font-semibold hover:text-primary-200 hover:shadow-amber-300 active:text-primary-200 active:shadow-amber-300'
                  href={data.href}>{data.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex items-center'>
          <Button className='hidden md:flex text-sm font-semibold'>
            <Link href='/contact'>Mulai Disini</Link>
          </Button>
          {/* hamburger menu */}
          <Sheet>
            <SheetTrigger>
              <Menu className='md:hidden cursor-pointer ' />
            </SheetTrigger>
            <SheetContent className='bg-base-black p-4'>
              <nav className=''>
                <ul className=' '>
                  {navigationData.map((data) => (
                    <li key={data.title} className='mb-2'>
                      <Link className='md:font-semibold md:text-md font-semibold block p-4 text-lg transition-all duration-300 ease-in-out hover:text-primary-200 hover:shadow-amber-300 active:text-primary-200 active:shadow-amber-300'
                        href={data.href}>{data.title}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header >
  );
};

export default Navbar;