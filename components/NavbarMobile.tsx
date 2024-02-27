"use client";

import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavbarMobile = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };

  return (
    <>
    <div
    onClick={handleNav}
    className='md:hidden ml-auto'
    >
        <AiOutlineMenu size={25} />
    </div>
    <div
    className={
      nav ? 'md:hidden fixed right-0 top-0 w-full h-full bg-black/70' : ''
    }
  >
    {/* Side Drawer Menu */}
    <div
      className={
        nav
          ? ' fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-[#ecf0f3] p-6 ease-in duration-500'
          : 'fixed right-[-100%] top-0 p-6 ease-in duration-500'
      }
    >
      <div>
        <div className='flex w-full items-center justify-between'>
        <Link href='/' className='hover:text-gray-400 text-black'>Accueil</Link>
          <div
            onClick={handleNav}
            className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
          >
            <AiOutlineClose className='text-black' />
          </div>
        </div>
      </div>
      <div className='py-4 flex flex-col'>
              
        <ul className='text-black'>
          <li>
            <Link href='/' className='hover:text-gray-400'>Accueil</Link>
          </li>
          <li>
            <Link href='/shiatsu' className='hover:text-gray-400'>Shiatsu</Link>
          </li>
          <li>
            <Link href='/chineitsang' className='hover:text-gray-400'>Chi Nei Tsang</Link>
          </li>
          <li>
            <Link href='/reflexologie' className='hover:text-gray-400'>Réflexologie</Link>
          </li>
          <li>
            <Link href='/jemepresente' className='hover:text-gray-400'>Je me présente</Link>
          </li>
          <li>
            <Link href='/commentcasepasse' className='hover:text-gray-400'>Comment ça se passe ?</Link>
          </li>
          <li>
            <Link href='/contact' className='hover:text-gray-400'>Contact</Link>
          </li>
        </ul>

      </div>
    </div>
  </div>
  </>
  )
}
export default NavbarMobile