import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { navigationData } from '@/app/constants/navigation-data';

const navbar = () => {
  return (
    <header>
      <div className='custom-container flex-between h-16 px-4 md:h-21'>
        <div className='flex items-center gap-2'>
          <Image
            src='/images/LOGO-MAKNA.png'
            alt='makna'
            width={100}
            height={100}
          />
        </div>

        <nav className='hidden md:block'>
          <ul className='flex items-center gap-3'>
            {navigationData.map((data) => (
              <li key={data.title}>
                <Link href={data.href}>{data.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button>
          <Link href='/contact'>Let's Chat</Link>
        </Button>
      </div>
    </header>
  );
};

export default navbar;
