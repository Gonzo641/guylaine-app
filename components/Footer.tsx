import { Separator } from "./ui/separator"
import { ThemeToggle } from './ThemeToogle'
import Link from "next/link"

const Footer = () => {
  return (
    <footer>
        <Separator className='w-full bg-slate-200 dark:bg-slate-900' />
        <div className="mx-auto pt-10 flex flex-col sm:flex-row justify-center items-center gap-2">
            <p className="text-xs pb-4 sm:pb-2">
                &copy; 2024 Guylaine. All rights reserved.
            </p>
            <div className="-mt-2">
            <ThemeToggle />
            </div>
        </div>
        <div className="flex justify-center items-center mt-2 sm:mt-0">
          <p className="text-xs pb-4 sm:pb-2">
              Website by <Link href="https://jonathan-portfolio-sage.vercel.app/" className="hover:text-[#0a98a7]">JonathanGonzales</Link>
          </p>
        </div>
    </footer>
  )
}
export default Footer