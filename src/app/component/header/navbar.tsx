// import "boxicons/css/boxicons.min.css";
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport
} from '@/components/ui/navigation-menu'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { ChevronDown, CircleUserRound, Menu, Search, ShoppingCart } from 'lucide-react'

export default function Navbar() {
  return (
    <>
      <main className='flex h-[90px] w-full items-center'>
        <div className='flex h-[41px] w-full items-center justify-between md:m-auto md:w-[1240px]'>
          <div className='flex gap-4 pl-4 md:gap-0 md:pl-0'>
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

            <div className='flex items-center justify-between md:w-[508px]'>
              <div className=''>
                <Link href='/' className='text-[32px] font-extrabold uppercase'>
                  shop.co
                </Link>
              </div>

              {/* <div className='hidden md:block'>
                <nav>
                  <ul className='flex gap-4 text-base'>
                    <Link href='/'>Shops</Link>
                    <Link href='/#'>On Sale</Link>
                    <Link href='/about'>New Arrival</Link>
                    <Link href='/sign_up'>Brands</Link>
                  </ul>
                </nav>
              </div> */}


<div className="hidden md:block">
      <nav>
        <ul className="flex gap-4 text-base">
          {/* Shops Menu with Submenu */}
          <li className="relative group">
            {/* Main Menu Item */}
            <div className="flex items-center gap-3 cursor-pointer">
              <Link href="/" className="flex items-center gap-1">
                Shops
                <ChevronDown
                  className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
                />
              </Link>
            </div>

            {/* Submenu */}
            <div className="absolute left-0  hidden group-hover:block z-50 ">
              <ul className="bg-white mt-2 shadow-lg rounded-md w-32 ">
                <li className="hover:bg-gray-100">
                  <Link href="/mens" className="block px-4 py-2">
                    Mens
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/womens" className="block px-4 py-2">
                    Womens
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/Kids" className="block px-4 py-2">
                    Kids
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/Casual" className="block px-4 py-2">
                    Casual
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/Normal" className="block px-4 py-2">
                    Normal
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/Party" className="block px-4 py-2">
                    Party
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/Gym" className="block px-4 py-2">
                    Gym
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Other Navigation Links */}
          <li>
            <Link href="/#">On Sale</Link>
          </li>
          <li>
            <Link href="/about">New Arrival</Link>
          </li>
          <li>
            <Link href="/sign_up">Brands</Link>
          </li>
        </ul>
      </nav>
    </div>


              {/* <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className='px-0'>
                    <NavigationMenuTrigger>Shops</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='p-6 md:w-[200px] lg:w-[200px]'>
                        <li className='flex flex-col gap-3'>
                          <NavigationMenuLink asChild>
                            <Link href='/'>Mens</Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link href='/'>Mens</Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem className=''>
                    <Link href='/'>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        On Sale
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className=''>
                    <Link href='/'>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        New Arrival
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className=''>
                    <Link href='/'>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Brands
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu> */}
            </div>
          </div>

          <div className='flex items-center justify-between md:w-[692px]'>
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
              <Link href="/cart"><ShoppingCart /></Link>
              <CircleUserRound />
            </div>
          </div>
        </div>
      </main>
      <div className='h-[2px] w-full bg-black'></div>
    </>
  )
}
