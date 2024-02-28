import { Separator } from "./ui/separator"

const Footer = () => {
  return (
    <footer>
        <Separator className='w-full bg-slate-200 dark:bg-slate-900' />
        <div className="mx-auto py-10">
            <p className="text-center text-xs">
                &copy; 2024 Guylaine, Inc. All rights reserved.
            </p>
        </div>
    </footer>
  )
}
export default Footer