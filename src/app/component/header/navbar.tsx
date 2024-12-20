// import "boxicons/css/boxicons.min.css";
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { CircleUserRound, Menu, Search, ShoppingCart } from 'lucide-react'

export default function Navbar() {
  return (
    <>
      <main className='flex h-[90px] w-full items-center'>
        <div className=' md:m-auto flex h-[41px] items-center justify-between md:w-[1240px] w-full'>
          <div className='pl-4 md:pl-0 flex gap-4 md:gap-0'>

          <Sheet>
            <SheetTrigger className='md:hidden'>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <nav>
                    <ul className='mt-8 flex flex-col gap-6 text-xl'>
                      <Link href='/'>Shops</Link>
                      <Link href='/#'>On Sale</Link>
                      <Link href='/about'>New Arrival</Link>
                      <Link href='/sign_up'>Brands</Link>
                    </ul>
                  </nav>
                </SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <div className='flex md:w-[508px] items-center justify-between'>
            <div className=''>
              <Link href='/' className='text-[32px] font-extrabold uppercase'>shop.co</Link>
            </div>

            <div className='hidden md:block'>
              <nav>
                <ul className='flex gap-4 text-base'>
                  <Link href='/'>Shops</Link>
                  <Link href='/#'>On Sale</Link>
                  <Link href='/about'>New Arrival</Link>
                  <Link href='/sign_up'>Brands</Link>
                </ul>
              </nav>
            </div>
          </div>
              </div>

          <div className='md:w-[692px] flex justify-between items-center'>
            <div className='relative hidden items-center justify-end bg-transparent md:flex'>
              <input
                className='h-[48px] w-[590px] rounded-full border-0 bg-slate-200 py-1 pl-12 placeholder:text-[12px] focus:outline-none'
                placeholder='Search for products...'
                type='text'
              ></input>
              <Search
                color='#8c8c8c'
                strokeWidth={2}
                className='absolute left-4'
              />
              {/* <i className="bx bx-search absolute right-4 text-black text-2xl"></i> */}
            </div>

            <div className='flex w-[62px] items-center justify-between'>
              {/* <i className="bx bx-heart text-3xl"></i>
              <i className="bx bx-cart-alt text-3xl"></i> */}
              <ShoppingCart />
              <CircleUserRound />
            </div>
          </div>
        </div>
      </main>
      <div className='h-[2px] w-full bg-black'></div>
    </>
  )
}
