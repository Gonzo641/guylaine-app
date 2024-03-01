import { Separator } from "./ui/separator"
import { ThemeToggle } from './ThemeToogle'

const Footer = () => {
  return (
    <footer>
        <Separator className='w-full bg-slate-200 dark:bg-slate-900' />
        <div className="mx-auto py-10 flex flex-col sm:flex-row justify-center items-center gap-2">
            <p className="text-xs pb-4 sm:pb-2">
                &copy; 2024 Guylaine, Inc. All rights reserved.
            </p>
            <div className="-mt-2">
            <ThemeToggle />
            </div>
        </div>
    </footer>
  )
}
export default Footer