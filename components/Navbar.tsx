"use client";

import Link from 'next/link'
import { Separator } from "@/components/ui/separator"
import NavbarMobile from './NavbarMobile'
import { ThemeToggle } from './ThemeToogle'



export default function Navbar() {

  return (
    <header>
      <nav className='pt-4 pb-2 flex flex-col'>
        {/* <ul className='container hidden md:flex gap-6'> */}
        {/* <div className='flex flex-col'> */}
        <ul className='w-full flex flex-wrap justify-center sm:gap-6 gap-4'>
          <li>
            <Link href='/' className='hover:text-[#2bcceb] text-[#0c9aa4] sm:text-xl text-sm font-semibold'>Accueil</Link>
          </li>
          <span>
          <Separator orientation='vertical' className='bg-slate-200 dark:bg-slate-800'/>
          </span>
          <li>
            <Link href='/shiatsu' className='hover:text-[#2bcceb] text-[#0c9aa4] sm:text-xl text-sm font-semibold'>Shiatsu</Link>
          </li>
          <span>
          <Separator orientation='vertical' className='bg-slate-200 dark:bg-slate-800'/>
          </span>
          <li>
            <Link href='/chineitsang' className='hover:text-[#2bcceb] text-[#0c9aa4] sm:text-xl text-sm font-semibold'>Chi Nei Tsang</Link>
          </li>
          <span>
          <Separator orientation='vertical' className='bg-slate-200 dark:bg-slate-800'/>
          </span>
          <li>
            <Link href='/reflexologie' className='hover:text-[#2bcceb] text-[#0c9aa4] sm:text-xl text-sm font-semibold'>Réflexologie</Link>
          </li>
          <span>
          <Separator orientation='vertical' className='bg-slate-200 dark:bg-slate-800'/>
          </span>
          <li>
            <Link href='/jemepresente' className='hover:text-[#2bcceb] text-[#0c9aa4] sm:text-xl text-sm font-semibold'>Je me présente</Link>
          </li>
          <span>
          <Separator orientation='vertical' className='bg-slate-200 dark:bg-slate-800'/>
          </span>
          <li>
            <Link href='/commentcasepasse' className='hover:text-[#2bcceb] text-[#0c9aa4] sm:text-xl text-sm font-semibold'>Comment ça se passe ?</Link>
          </li>
          <span>
          <Separator orientation='vertical' className='bg-slate-200 dark:bg-slate-800'/>
          </span>
          <li>
            <Link href='/contact' className='hover:text-[#2bcceb] text-[#0c9aa4] sm:text-xl text-sm font-semibold'>Contact</Link>
          </li>
        </ul>
        <div className='flex items-center justify-center pt-4 z-50'>
          <ThemeToggle />
        </div>
        {/* </div> */}
        {/* <NavbarMobile /> */}
      </nav>
      <Separator className='w-full bg-slate-200 dark:bg-slate-800' />
      
    </header>
  )
}