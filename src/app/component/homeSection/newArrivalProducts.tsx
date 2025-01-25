'use client'

import ProductCard from './productCard'
import Btn from '../button'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { createContext, useContext, useState } from 'react'
import Link from 'next/link'


// const products = [{id:}]

// Create the context to hold the state for the current slide
const SwiperSlideContext = createContext<any>(null)

const useSwiperSlide = () => {
  return useContext(SwiperSlideContext)
}

export default function Section() {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  return (
    <>
      {/* New Arrival Section */}
      <SwiperSlideContext.Provider value={{ currentSlide, setCurrentSlide }}>
        <section className='mt-56 flex w-full justify-center md:border-b-2 md:mt-0 md:py-10'>
          <div className='centerProductsDiv h-[673px] w-full md:w-[1240px]'>
            <div>
              <h1 className='heading'>New arrivals</h1>
            </div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              onSlideChange={swiper => setCurrentSlide(swiper.activeIndex)}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 }
              }}
              className='w-full md:w-[1240px]'
            >
              <SwiperSlide>
                <Link href='./product' className='cursor-pointer'>
                <ProductCard
                  name='T-Shirt with Tape Details'
                  image='/images/productNewArrival/blackT.png'
                  rating={4.5}
                  totalRatings={0}
                  price='$120'
                  discount=''
                  oldPrice=''
                />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
              <Link href='./product' className='cursor-pointer'>
                  <ProductCard
                  name='Skinny Fit Jeans'
                  image='/images/productNewArrival/bluePant.png'
                  rating={3.5}
                  totalRatings={0}
                  price=''
                  discount='$20'
                  oldPrice='$260'
                />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
              <Link href='./product' className='cursor-pointer'>
                <ProductCard
                  name='Checkered Shirt'
                  image='/images/productNewArrival/shirt.png'
                  rating={4.5}
                  totalRatings={150}
                  price='$100.00'
                  discount='$80.00'
                  oldPrice='$100.00'
                />
              </Link>
              </SwiperSlide>
              <SwiperSlide>
              <Link href='./product' className='cursor-pointer'>
                <ProductCard
                  name='Sleeve Striped T-Shirt'
                  image='/images/productNewArrival/orangeT.png'
                  rating={4.5}
                  totalRatings={150}
                  price='$100.00'
                  discount='$80.00'
                  oldPrice='$100.00'
                />
                </Link>
              </SwiperSlide>
            </Swiper>
            <div className='mt-4 text-center'>
              <Btn name='View All' classname='text-black bg-white border-2 hover:bg-black hover:text-white transition duration-500' />
            </div>
          </div>
        </section>
      </SwiperSlideContext.Provider>

      {/* Top Selling Section */}
      <SwiperSlideContext.Provider value={{ currentSlide, setCurrentSlide }}>
        <section className='flex w-full justify-center py-10'>
          <div className='centerProductsDiv h-[673px] md:w-[1240px] w-full'>
            <div>
              <h1 className='heading'>Top Selling</h1>
            </div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              onSlideChange={swiper => setCurrentSlide(swiper.activeIndex)}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 }
              }}
              className='w-full md:w-[1240px]'
            >
              <SwiperSlide>
                <ProductCard
                  name='T-Shirt with Tape Details'
                  image='/images/productNewArrival/stripedShirt.png'
                  rating={4.5}
                  totalRatings={0}
                  price='$120'
                  discount=''
                  oldPrice=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  name='Skinny Fit Jeans'
                  image='/images/productNewArrival/graphicShirt.png'
                  rating={3.5}
                  totalRatings={0}
                  price=''
                  discount='20'
                  oldPrice='$260'
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  name='Checkered Shirt'
                  image='/images/productNewArrival/short.png'
                  rating={4.5}
                  totalRatings={150}
                  price='$100.00'
                  discount='$80.00'
                  oldPrice='$100.00'
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  name='Sleeve Striped T-Shirt'
                  image='/images/productNewArrival/blackPant.png'
                  rating={4.5}
                  totalRatings={150}
                  price='$100.00'
                  discount='$80.00'
                  oldPrice='$100.00'
                />
              </SwiperSlide>
            </Swiper>
            <div>
              <Btn name='View All' classname='text-black bg-white border-2 hover:bg-black hover:text-white transition duration-500' />
            </div>
          </div>
        </section>
      </SwiperSlideContext.Provider>
    </>
  )
}
