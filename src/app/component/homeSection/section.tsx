'use client'

import CustomerFeedback from '@/app/component/customerFeedback'
import ProductCard from './productCard'
import Btn from '../button'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { createContext, useContext, useState } from 'react'

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
                <ProductCard
                  name='T-Shirt with Tape Details'
                  image='/images/productNewArrival/blackT.png'
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
                  image='/images/productNewArrival/bluePant.png'
                  rating={3.5}
                  totalRatings={0}
                  price=''
                  discount='$20'
                  oldPrice='$260'
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  name='Checkered Shirt'
                  image='/images/productNewArrival/shirt.png'
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
                  image='/images/productNewArrival/orangeT.png'
                  rating={4.5}
                  totalRatings={150}
                  price='$100.00'
                  discount='$80.00'
                  oldPrice='$100.00'
                />
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

      {/* Browse by Dress Style Section */}
      <section className='flex w-full justify-center md:border-b-2 md:py-10'>
        <div className='flex h-[975px] w-[358px] flex-col items-center justify-evenly rounded-3xl bg-[#f0f0f0] shadow-md shadow-slate-500 md:h-[866px] md:w-[1240px]'>
          <div className='text-center leading-[0.9] md:text-left md:leading-none'>
            <h1 className='heading'>Browse by Dress Style</h1>
          </div>
          <div className='flex flex-col md:gap-6 gap-5'>
            <div className='flex flex-col gap-6 md:flex-row md:gap-5'>
              <div className='relative h-[190px] w-[310px] overflow-hidden rounded-2xl bg-white transition duration-300 hover:shadow-lg md:h-[289px] md:w-[407px] md:overflow-auto'>
                <h1 className='absolute left-4 top-4 z-10 text-2xl font-bold md:left-8 md:top-10 md:text-4xl md:font-medium'>
                  Casual
                </h1>
                <Image
                  src='/images/productNewArrival/casual.png'
                  alt='Casual'
                  width={973}
                  height={649}
                  className='absolute h-[190px] w-[572px] rounded-2xl md:h-[289px] md:w-[407px]'
                />
              </div>
              <div className='relative h-[190px] w-[310px] overflow-hidden rounded-2xl bg-white transition duration-300 hover:shadow-lg md:h-[289px] md:w-[684px] md:overflow-auto'>
                <h1 className='absolute left-4 top-4 z-10 text-2xl font-bold md:left-8 md:top-10 md:text-4xl md:font-medium'>
                  Formal
                </h1>
                <Image
                  src='/images/productNewArrival/formal.png'
                  alt='Formal'
                  width={1306}
                  height={870}
                  className='absolute left-10 h-[190px] w-[709px] rounded-2xl md:left-0 md:h-[289px] md:w-[684px]'
                />
              </div>
            </div>
            <div className='flex flex-col gap-6 md:flex-row md:gap-5'>
              <div className='relative h-[190px] w-[310px] overflow-hidden rounded-2xl bg-white transition duration-300 hover:shadow-lg md:h-[289px] md:w-[684px] md:overflow-auto'>
                <h1 className='absolute left-4 top-4 z-10 text-2xl font-bold md:left-8 md:top-10 md:text-4xl md:font-medium'>
                  Party
                </h1>
                <Image
                  src='/images/productNewArrival/party.png'
                  alt='Party'
                  width={770}
                  height={616}
                  className='absolute left-10 h-[190px] w-[389px] rounded-2xl md:left-0 md:h-[289px] md:w-[684px]'
                />
              </div>
              <div className='relative h-[190px] w-[310px] overflow-hidden rounded-2xl bg-white transition duration-300 hover:shadow-lg md:h-[289px] md:w-[407px] md:overflow-auto'>
                <h1 className='absolute left-4 top-4 z-10 text-2xl font-bold md:left-8 md:top-10 md:text-4xl md:font-medium'>
                  Gym
                </h1>
                <Image
                  src='/images/productNewArrival/gym.png'
                  alt='Gym'
                  width={422}
                  height={677}
                  className='absolute left-10 md:left-0 h-[190px] w-[275px] rounded-2xl md:h-[289px] md:w-[407px]'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Happy Customers Section */}

      {/* Customer Feedback Component */}
      <CustomerFeedback />
    </>
  )
}
