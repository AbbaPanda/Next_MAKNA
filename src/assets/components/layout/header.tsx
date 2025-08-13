import React from 'react';
import type { HeaderProps, NavItems } from '../types/header';
import makna from '../../images/LOGO-MAKNA.png';
import hamburger from '../../images/hamburger.png';
import Image from 'next/image';

const Header: React.FC<HeaderProps> = ({ navItems }) => {
  return (
    // main wrapper for the header
    <div className='w-full flex justify-center sm:px-0 mt-5 z-30 absolute top-0 left-0 right-0 text-white'>
      {/* // wrapper logo */}
      <div className='left-4 absolute top-0 flex-wrap'>
        <Image src={makna} alt='makna' width={120} height={120} className='w-40' />
      </div>
      {/* wrapper navItems */}
      <nav className='right-4 absolute top-0 text-sm font-semibold justify-evenly hidden sm:flex gap-7'>
        {navItems.map((item: NavItems) => (
          <a key={item.label} href={item.path}>
            {item.label}
          </a>
        ))}
      </nav>
      <button className='right-4 absolute top-0 sm:hidden flex items-center justify-center'>
        <Image src={hamburger} alt='hamburger' width={120} height={120} />
      </button>
    </div>
  );
};

export default Header;
