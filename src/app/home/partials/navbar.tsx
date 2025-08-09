'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { navigationData } from '@/app/constants/navigation-data';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {

  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0,0,0,0.8)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <motion.header style={{ background, backdropFilter: backdropBlur }}
      className='fixed z-50 w-full top-0'>
      <div className='custom-container flex-between h-16 px-4 md:h-21'>
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
                <Link className='md:font-semibold md:text-md font-semibold hover:text-primary-200 hover:shadow-amber-300 active:text-primary-200'
                  href={data.href}>{data.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button className='text-sm font-semibold w-30'>
          <Link href='/contact'>Mulai Disini</Link>
        </Button>
      </div>
    </motion.header >
  );
};

export default Navbar;
