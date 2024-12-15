'use client'

import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  ChevronUp,
  SlidersHorizontal
} from 'lucide-react'
import Link from 'next/link'
import Btn from '../component/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { createContext, useContext, useState } from 'react'
import ProductCard from '../component/homeSection/productCard'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

const SwiperSlideContext = createContext<any>(null)

const useSwiperSlide = () => {
  return useContext(SwiperSlideContext)
}

export default function casual() {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  return (
    <>
      <section className='m-auto h-[1500px] md:w-[1240px]'>
        {/* top links heading display */}
        <div>
          <h1>Home {'>'} Casual</h1>
        </div>
        {/* main box */}
        <div className='flex w-full'>
          {/* left side Filtration Box main box */}
          <div className='hidden md:block h-[1220px] w-[295px] rounded-3xl border-2'>
            <div className='m-auto h-full w-[247px]'>
              {/* filter option */}
              <div className='flex h-[51px] items-center justify-between border-b-2'>
                <h1>Filter</h1>
                <SlidersHorizontal size={28} color='#000000' strokeWidth={1} />
              </div>
              {/* left menu */}
              <div className='flex h-[208px] justify-between border-b-2'>
                <div className='flex flex-col justify-evenly'>
                  <Link href='#'>T-Shirts</Link>
                  <Link href='#'>Shorts</Link>
                  <Link href='#'>Shirts</Link>
                  <Link href='#'>Hoodeis</Link>
                  <Link href='#'>Jeans</Link>
                </div>
                <div className='flex flex-col justify-evenly'>
                  <ChevronRight strokeWidth={1} />
                  <ChevronRight strokeWidth={1} />
                  <ChevronRight strokeWidth={1} />
                  <ChevronRight strokeWidth={1} />
                  <ChevronRight strokeWidth={1} />
                </div>
              </div>
              {/* price filter */}
              <div className='flex h-[114px] w-full flex-col items-center justify-evenly border-b-2'>
                <div className='flex w-full items-center justify-between'>
                  <h1>price</h1>
                  <ChevronUp strokeWidth={1} />
                </div>
                <div>
                  <input
                    type='range'
                    min='0'
                    max='500' // Maximum price, adjust as needed
                    step='10'
                    className='w-full cursor-pointer'
                  />
                </div>
              </div>
              {/* Color filter */}
              <div className='flex h-[161px] w-full items-center border-b-2'>
                <div className='flex h-[137px] w-full flex-col justify-between'>
                  <div className='flex w-full items-center justify-between'>
                    <h1>Colors</h1>
                    <ChevronUp strokeWidth={1} />
                  </div>
                  <div className='grid w-full grid-cols-5 place-content-between gap-y-4'>
                    <div className='h-[37px] w-[37px] rounded-full bg-[#00C12B]'></div>
                    <div className='h-[37px] w-[37px] rounded-full bg-[#F50606]'></div>
                    <div className='h-[37px] w-[37px] rounded-full bg-[#F5DD06]'></div>
                    <div className='h-[37px] w-[37px] rounded-full bg-[#F57906]'></div>
                    <div className='h-[37px] w-[37px] rounded-full bg-[#06CAF5]'></div>
                    <div className='h-[37px] w-[37px] rounded-full bg-[#063AF5]'></div>
                    <div className='h-[37px] w-[37px] rounded-full bg-[#7D06F5]'></div>
                    <div className='h-[37px] w-[37px] rounded-full bg-[#F506A4]'></div>
                    <div className='h-[37px] w-[37px] rounded-full border-[1px] bg-[#FFFFFF]'></div>
                    <div className='h-[37px] w-[37px] rounded-full bg-[#000000]'></div>
                  </div>
                </div>
              </div>

              {/* Size filtration */}
              <div className='flex h-[298px] w-[full] items-center'>
                <div className='flex h-[274px] flex-col justify-between'>
                  <div className='flex w-full items-center justify-between'>
                    <h1>Size</h1>
                    <ChevronUp strokeWidth={1} />
                  </div>
                  <div className='space-x-1 space-y-1'>
                    {[
                      'XX-Small',
                      'X-Small',
                      'Small',
                      'Medium',
                      'Large',
                      'X-Large',
                      'XX-Large',
                      '3X-Large',
                      '4X-Large'
                    ].map(size => (
                      <Btn
                        key={size}
                        name={size}
                        classname='md:w-[88px] md:h-[39px] h-[39px] md:text-base text-sm bg-gray-200 text-black hover:bg-black hover:text-white transition duration-500 active:bg-black'
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Dress Style FIlter */}
              <div className='flex h-[219px] w-full items-center'>
                <div className='flex h-[171px] w-full flex-col justify-between'>
                  <div className='flex w-full items-center justify-between'>
                    <h1>Dress Style</h1>
                    <ChevronUp strokeWidth={1} />
                  </div>
                  <div className='flex h-[124px] w-full justify-between'>
                    <div className='flex flex-col justify-evenly'>
                      <Link href='#'>T-Shirts</Link>
                      <Link href='#'>Shorts</Link>
                      <Link href='#'>Shirts</Link>
                      <Link href='#'>Hoodeis</Link>
                    </div>
                    <div className='flex flex-col justify-evenly'>
                      <ChevronRight strokeWidth={1} />
                      <ChevronRight strokeWidth={1} />
                      <ChevronRight strokeWidth={1} />
                      <ChevronRight strokeWidth={1} />
                    </div>
                  </div>
                </div>
              </div>

              {/* APply FIlter Button */}
              <div className='flex h-[96px] items-center'>
                <Btn
                  name='Apply Filter'
                  classname='text-white md:w-[247px] h-[48px]'
                />
              </div>
            </div>
          </div>

          {/* right side product box */}
          <div className='flex h-[1447px] w-full flex-col justify-between md:w-[926px]'>
            <div className='flex h-[43px] w-full items-center justify-between gap-1 md:gap-0 md:px-2'>
              <h1 className='text-2xl font-bold md:text-[32px]'>Casual</h1>
              <div className='flex w-[274px] items-center justify-between gap-2'>
                <p className='text-sm'>Showing 1-10 of 100 Products</p>
                <p className='hidden md:block'>Sort by: Most Popular</p>

                <Popover >
                  <PopoverTrigger className='md:hidden'>
                    <div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#f0f0f0] md:h-[48px] md:w-[48px]'>
                      <SlidersHorizontal
                        size={24}
                        color='#000000'
                        strokeWidth={1}
                        className=''
                      />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className='w-[22.5rem]'>
                    {/* left side Filtration Box main box */}
          <div className='md:hidden block h-[1220px] w-full rounded-3xl border-2'>
            <div className='m-auto h-full w-[247px]'>
              {/* filter option */}
              <div className='flex h-[51px] items-center justify-between border-b-2'>
                <h1>Filter</h1>
                <SlidersHorizontal size={28} color='#000000' strokeWidth={1} />
              </div>
              {/* left menu */}
              <div className='flex h-[208px] justify-between border-b-2'>
                <div className='flex flex-col justify-evenly'>
                  <Link href='#'>T-Shirts</Link>
                  <Link href='#'>Shorts</Link>
                  <Link href='#'>Shirts</Link>
                  <Link href='#'>Hoodeis</Link>
                  <Link href='#'>Jeans</Link>
                </div>
                <div className='flex flex-col justify-evenly'>
                  <ChevronRight strokeWidth={1} />
                  <ChevronRight strokeWidth={1} />
                  <ChevronRight strokeWidth={1} />
                  <ChevronRight strokeWidth={1} />
                  <ChevronRight strokeWidth={1} />
                </div>
              </div>
              {/* price filter */}
              <div className='flex h-[114px] w-full flex-col items-center justify-evenly border-b-2'>
                <div className='flex w-full items-center justify-between'>
                  <h1>price</h1>
                  <ChevronUp strokeWidth={1} />
                </div>
                <div>
                  <input
                    type='range'
                    min='0'
                    max='500' // Maximum price, adjust as needed
                    step='10'
                    className='w-full cursor-pointer'
                  />
                </div>
              </div>
              {/* Color filter */}
              <div className='flex h-[161px] w-full items-center border-b-2'>
                <div className='flex h-[137px] w-full flex-col justify-between'>
                  <div className='flex w-full items-center justify-between'>
                    <h1>Colors</h1>
                    <ChevronUp strokeWidth={1} />
                  </div>
                  <div className='grid w-full grid-cols-5 place-content-between gap-y-4'>
                    <div className='h-[37px] w-[37px] rounded-full bg-[#00C12B]'></div>
                    <div className='h-[37px] w-[37px] rounded-full bg-[#F50606]'></div>
                    <div className='h-[37px] w-[37px] rounded-full bg-[#F5DD06]'></div>
                    <div className='h-[37px] w-[37px] rounded-full bg-[#F57906]'></div>
                    <div className='h-[37px] w-[37px] rounded-full bg-[#06CAF5]'></div>
                    <div className='h-[37px] w-[37px] rounded-full bg-[#063AF5]'></div>
                    <div className='h-[37px] w-[37px] rounded-full bg-[#7D06F5]'></div>
                    <div className='h-[37px] w-[37px] rounded-full bg-[#F506A4]'></div>
                    <div className='h-[37px] w-[37px] rounded-full border-[1px] bg-[#FFFFFF]'></div>
                    <div className='h-[37px] w-[37px] rounded-full bg-[#000000]'></div>
                  </div>
                </div>
              </div>

              {/* Size filtration */}
              <div className='flex h-auto gap-2 w-[full] items-center'>
                <div className='flex h-auto gap-2 flex-col justify-between'>
                  <div className='flex w-full items-center justify-between'>
                    <h1>Size</h1>
                    <ChevronUp strokeWidth={1} />
                  </div>
                  <div className='space-x-1 space-y-1'>
                    {[
                      'XX-Small',
                      'X-Small',
                      'Small',
                      'Medium',
                      'Large',
                      'X-Large',
                      'XX-Large',
                      '3X-Large',
                      '4X-Large'
                    ].map(size => (
                      <Btn
                        key={size}
                        name={size}
                        classname='md:w-[88px] w-[76px] md:h-[39px] h-[39px] md:text-base text-sm bg-gray-200 text-black hover:bg-black hover:text-white transition duration-500 active:bg-black'
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Dress Style FIlter */}
              <div className='flex h-[219px] w-full items-center'>
                <div className='flex h-[171px] w-full flex-col justify-between'>
                  <div className='flex w-full items-center justify-between'>
                    <h1>Dress Style</h1>
                    <ChevronUp strokeWidth={1} />
                  </div>
                  <div className='flex h-[124px] w-full justify-between'>
                    <div className='flex flex-col justify-evenly'>
                      <Link href='#'>T-Shirts</Link>
                      <Link href='#'>Shorts</Link>
                      <Link href='#'>Shirts</Link>
                      <Link href='#'>Hoodeis</Link>
                    </div>
                    <div className='flex flex-col justify-evenly'>
                      <ChevronRight strokeWidth={1} />
                      <ChevronRight strokeWidth={1} />
                      <ChevronRight strokeWidth={1} />
                      <ChevronRight strokeWidth={1} />
                    </div>
                  </div>
                </div>
              </div>

              {/* APply FIlter Button */}
              <div className='flex h-[96px] items-center'>
                <Btn
                  name='Apply Filter'
                  classname='text-white md:w-[247px] h-[48px]'
                />
              </div>
            </div>
          </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Product Section */}
            <SwiperSlideContext.Provider
              value={{ currentSlide, setCurrentSlide }}
            >
              <section className='flex w-full'>
                <div className='centerProductsDiv flex h-[1296px] w-full flex-col justify-between'>
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={20} // Adjust space between slides
                    slidesPerView={1} // Default for smaller screens
                    onSlideChange={swiper =>
                      setCurrentSlide(swiper.activeIndex)
                    }
                    breakpoints={{
                      640: { slidesPerView: 2 }, // 1 product per row for smaller devices
                      768: { slidesPerView: 2 }, // 2 products per row for medium devices
                      1024: { slidesPerView: 3 } // 3 products per row for large devices
                    }}
                    className='h-full w-[358px] md:w-full'
                  >
                    {[
                      {
                        name: 'Gradient Graphic T-shirt',
                        image: '/images/productDetailsImages/designT.png',
                        rating: 3.5,
                        totalRatings: 0,
                        price: '$145'
                      },
                      {
                        name: 'Polo with Tipping Details',
                        image: '/images/productDetailsImages/mahroonT.png',
                        rating: 4.5,
                        totalRatings: 150,
                        price: '$180'
                      },
                      {
                        name: 'Black Striped T-shirt',
                        image: '/images/productDetailsImages/blackWhiteT.png',
                        rating: 4.5,
                        totalRatings: 150,
                        price: '$112',
                        discount: '20',
                        oldPrice: '$150'
                      }
                      // Repeat as needed...
                    ].map((product, index) => (
                      <SwiperSlide className='space-y-14 md:w-full' key={index}>
                        <ProductCard
                          name={product.name}
                          image={product.image}
                          rating={product.rating}
                          totalRatings={product.totalRatings}
                          price={product.price}
                          discount={product.discount}
                          oldPrice={product.oldPrice}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={20} // Adjust space between slides
                    slidesPerView={1} // Default for smaller screens
                    onSlideChange={swiper =>
                      setCurrentSlide(swiper.activeIndex)
                    }
                    breakpoints={{
                      640: { slidesPerView: 2 }, // 1 product per row for smaller devices
                      768: { slidesPerView: 2 }, // 2 products per row for medium devices
                      1024: { slidesPerView: 3 } // 3 products per row for large devices
                    }}
                    className='h-full w-[358px] md:w-full'
                  >
                    {[
                      {
                        name: 'Gradient Graphic T-shirt',
                        image: '/images/productDetailsImages/designT.png',
                        rating: 3.5,
                        totalRatings: 0,
                        price: '$145'
                      },
                      {
                        name: 'Polo with Tipping Details',
                        image: '/images/productDetailsImages/mahroonT.png',
                        rating: 4.5,
                        totalRatings: 150,
                        price: '$180'
                      },
                      {
                        name: 'Black Striped T-shirt',
                        image: '/images/productDetailsImages/blackWhiteT.png',
                        rating: 4.5,
                        totalRatings: 150,
                        price: '$112',
                        discount: '20',
                        oldPrice: '$150'
                      }
                      // Repeat as needed...
                    ].map((product, index) => (
                      <SwiperSlide className='space-y-14 md:w-full' key={index}>
                        <ProductCard
                          name={product.name}
                          image={product.image}
                          rating={product.rating}
                          totalRatings={product.totalRatings}
                          price={product.price}
                          discount={product.discount}
                          oldPrice={product.oldPrice}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={20} // Adjust space between slides
                    slidesPerView={1} // Default for smaller screens
                    onSlideChange={swiper =>
                      setCurrentSlide(swiper.activeIndex)
                    }
                    breakpoints={{
                      640: { slidesPerView: 2 }, // 1 product per row for smaller devices
                      768: { slidesPerView: 2 }, // 2 products per row for medium devices
                      1024: { slidesPerView: 3 } // 3 products per row for large devices
                    }}
                    className='h-full w-[358px] md:w-full'
                  >
                    {[
                      {
                        name: 'Gradient Graphic T-shirt',
                        image: '/images/productDetailsImages/designT.png',
                        rating: 3.5,
                        totalRatings: 0,
                        price: '$145'
                      },
                      {
                        name: 'Polo with Tipping Details',
                        image: '/images/productDetailsImages/mahroonT.png',
                        rating: 4.5,
                        totalRatings: 150,
                        price: '$180'
                      },
                      {
                        name: 'Black Striped T-shirt',
                        image: '/images/productDetailsImages/blackWhiteT.png',
                        rating: 4.5,
                        totalRatings: 150,
                        price: '$112',
                        discount: '20',
                        oldPrice: '$150'
                      }
                      // Repeat as needed...
                    ].map((product, index) => (
                      <SwiperSlide className='space-y-14 md:w-full' key={index}>
                        <ProductCard
                          name={product.name}
                          image={product.image}
                          rating={product.rating}
                          totalRatings={product.totalRatings}
                          price={product.price}
                          discount={product.discount}
                          oldPrice={product.oldPrice}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </section>
            </SwiperSlideContext.Provider>

            <div className='flex h-[40px] w-full items-center justify-between'>
              <div className='flex h-[36px] w-[90px] items-center justify-center rounded-xl border-2 md:w-[110px]'>
                <ArrowLeft size={20} />
                <h3 className='text-xs md:text-sm'>Previous</h3>
              </div>
              <div className='flex gap-1 md:gap-0'>
                <p className='flex h-[40px] w-9 items-center justify-center rounded-xl bg-[rgba(0,0,0,0.3)] text-white md:w-[40px]'>
                  1
                </p>
                <p className='flex h-[40px] w-9 items-center justify-center rounded-xl bg-[rgba(0,0,0,0.3)] text-white md:w-[40px]'>
                  2
                </p>
                <p className='flex h-[40px] w-9 items-center justify-center rounded-xl bg-[rgba(0,0,0,0.3)] text-white md:hidden md:w-[40px]'>
                  ...
                </p>
                <p className='hidden h-[40px] w-[40px] items-center justify-center rounded-xl bg-[rgba(0,0,0,0.3)] text-white md:flex'>
                  3
                </p>
                <p className='hidden h-[40px] w-[40px] items-center justify-center rounded-xl bg-[rgba(0,0,0,0.3)] text-white md:flex'>
                  4
                </p>
                <p className='hidden h-[40px] w-[40px] items-center justify-center rounded-xl bg-[rgba(0,0,0,0.3)] text-white md:flex'>
                  5
                </p>
                <p className='hidden h-[40px] w-[40px] items-center justify-center rounded-xl bg-[rgba(0,0,0,0.3)] text-white md:flex'>
                  6
                </p>
                <p className='flex h-[40px] w-9 items-center justify-center rounded-xl bg-[rgba(0,0,0,0.3)] text-white md:w-[40px]'>
                  7
                </p>
                <p className='flex h-[40px] w-9 items-center justify-center rounded-xl bg-[rgba(0,0,0,0.3)] text-white md:w-[40px]'>
                  8
                </p>
              </div>
              <div className='flex h-[36px] w-[90px] items-center justify-center rounded-xl border-2 md:w-[110px]'>
                <h3 className='text-xs md:text-sm'>Next</h3>
                <ArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
