import Link from 'next/link'

export default function Navbar() {
  return (
    <header>
      <nav className='py-8 text-white'>
        <ul className='container flex gap-10'>
          <li>
            <Link href='/'>Accueil</Link>
          </li>
          <li>
            <Link href='/shiatsu'>Shiatsu</Link>
          </li>
          <li>
            <Link href='/chineitsang'>Chi Nei Tsang</Link>
          </li>
          <li>
            <Link href='/reflexologie'>Réflexologie</Link>
          </li>
          <li>
            <Link href='/jemepresente'>Je me présente</Link>
          </li>
          <li>
            <Link href='/commentcasepasse'>Comment ça se passe ?</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}