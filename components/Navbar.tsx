import Link from 'next/link'
import { Separator } from "@/components/ui/separator"
import NavbarMobile from './NavbarMobile'



export default function Navbar() {

  return (
    <header>
      <nav className='py-6 text-white flex'>
        {/* <ul className='container hidden md:flex gap-6'> */}
        <ul className='w-full flex flex-wrap justify-center sm:gap-6 gap-4'>
          <li>
            <Link href='/' className='hover:text-gray-400 sm:text-xl text-sm'>Accueil</Link>
          </li>
          <span>
          <Separator orientation='vertical' className='bg-white'/>
          </span>
          <li>
            <Link href='/shiatsu' className='hover:text-gray-400 sm:text-xl text-sm'>Shiatsu</Link>
          </li>
          <span>
          <Separator orientation='vertical' className='bg-white'/>
          </span>
          <li>
            <Link href='/chineitsang' className='hover:text-gray-400 sm:text-xl text-sm'>Chi Nei Tsang</Link>
          </li>
          <span>
          <Separator orientation='vertical' className='bg-white'/>
          </span>
          <li>
            <Link href='/reflexologie' className='hover:text-gray-400 sm:text-xl text-sm'>Réflexologie</Link>
          </li>
          <span>
          <Separator orientation='vertical' className='bg-white'/>
          </span>
          <li>
            <Link href='/jemepresente' className='hover:text-gray-400 sm:text-xl text-sm'>Je me présente</Link>
          </li>
          <span>
          <Separator orientation='vertical' className='bg-white'/>
          </span>
          <li>
            <Link href='/commentcasepasse' className='hover:text-gray-400 sm:text-xl text-sm'>Comment ça se passe ?</Link>
          </li>
          <span>
          <Separator orientation='vertical' className='bg-white'/>
          </span>
          <li>
            <Link href='/contact' className='hover:text-gray-400 sm:text-xl text-sm'>Contact</Link>
          </li>
        </ul>
        {/* <NavbarMobile /> */}
      </nav>
      <Separator className='w-full' />
      
    </header>
  )
}