'use client'

import CustomerFeedback from '@/app/component/customerFeedback';
import ProductCard from './productCard';
import Btn from '../button';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { createContext, useContext, useState } from 'react';

// Create the context to hold the state for the current slide
const SwiperSlideContext = createContext<any>(null);

const useSwiperSlide = () => {
  return useContext(SwiperSlideContext);
};

export default function Section() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <>
      {/* New Arrival Section */}
      <SwiperSlideContext.Provider value={{ currentSlide, setCurrentSlide }}>
        <section className="flex w-full justify-center border-b-2 md:py-10 md:mt-0 mt-56">
          <div className="centerProductsDiv h-[673px] md:w-[1240px] w-full">
            <div>
              <h1 className="heading">New arrivals</h1>
            </div>
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={20}
              slidesPerView={1}
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
                
              }}
              className='md:w-[1240px] w-full'
            >
              <SwiperSlide >
                <ProductCard
                  name="T-Shirt with Tape Details"
                  image="/images/productNewArrival/blackT.png"
                  rating={4.5}
                  totalRatings={0}
                  price="$120"
                  discount=""
                  oldPrice=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  name="Skinny Fit Jeans"
                  image="/images/productNewArrival/bluePant.png"
                  rating={3.5}
                  totalRatings={0}
                  price=""
                  discount="$20"
                  oldPrice="$260"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  name="Checkered Shirt"
                  image="/images/productNewArrival/shirt.png"
                  rating={4.5}
                  totalRatings={150}
                  price="$100.00"
                  discount="$80.00"
                  oldPrice="$100.00"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  name="Sleeve Striped T-Shirt"
                  image="/images/productNewArrival/orangeT.png"
                  rating={4.5}
                  totalRatings={150}
                  price="$100.00"
                  discount="$80.00"
                  oldPrice="$100.00"
                />
              </SwiperSlide>
            </Swiper>
            <div className="mt-4 text-center">
              <Btn name="View All" classname="text-black bg-white border-2" />
            </div>
          </div>
        </section>
      </SwiperSlideContext.Provider>

      {/* Top Selling Section */}
      <section className='flex w-full justify-center py-10'>
        <div className='centerProductsDiv h-[673px] w-[1240px]'>
          <div>
            <h1 className='heading'>Top Selling</h1>
          </div>
          <div className='flex w-full justify-between'>
            <ProductCard
              name='T-Shirt with Tape Details'
              image='/images/productNewArrival/stripedShirt.png'
              rating={4.5}
              totalRatings={0}
              price='$120'
              discount=''
              oldPrice=''
            />
            <ProductCard
              name='Skinny Fit Jeans'
              image='/images/productNewArrival/graphicShirt.png'
              rating={3.5}
              totalRatings={0}
              price=''
              discount='20'
              oldPrice='$260'
            />
            <ProductCard
              name='Checkered Shirt'
              image='/images/productNewArrival/short.png'
              rating={4.5}
              totalRatings={150}
              price='$100.00'
              discount='$80.00'
              oldPrice='$100.00'
            />
            <ProductCard
              name='Sleeve Striped T-Shirt'
              image='/images/productNewArrival/blackPant.png'
              rating={4.5}
              totalRatings={150}
              price='$100.00'
              discount='$80.00'
              oldPrice='$100.00'
            />
          </div>
          <div>
            <Btn name='View All' classname='text-black bg-white border-2' />
          </div>
        </div>
      </section>

      {/* Browse by Dress Style Section */}
      <section className='flex w-full justify-center border-b-2 py-10'>
        <div className='h-[866px] w-[1240px] rounded-3xl bg-[#f0f0f0] shadow-md shadow-slate-500 flex flex-col items-center justify-evenly'>
          <div>
            <h1 className='heading'>Browse by Dress Style</h1>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex gap-5'>
              <div className='bg-green-400 relative rounded-2xl w-[407px] h-[289px] hover:shadow-lg transition duration-300'>
                <h1 className='absolute text-4xl font-medium top-10 left-8'>Casual</h1>
                <Image
                  src='/images/productNewArrival/casual.png'
                  alt='Casual'
                  width={973}
                  height={649}
                  className='rounded-2xl'
                />
              </div>
              <div className='bg-green-400 relative rounded-2xl w-[684px] h-[289px] hover:shadow-lg transition duration-300'>
                <h1 className='absolute text-4xl font-medium top-10 left-8'>Formal</h1>
                <Image
                  src='/images/productNewArrival/formal.png'
                  alt='Formal'
                  width={1306}
                  height={870}
                  className='rounded-2xl'
                />
              </div>
            </div>
            <div className='flex gap-5'>
              <div className='bg-green-400 rounded-2xl w-[684px] h-[289px] relative hover:shadow-lg transition duration-300'>
                <h1 className='absolute text-4xl font-medium top-10 left-8'>Party</h1>
                <Image
                  src='/images/productNewArrival/party.png'
                  alt='Party'
                  width={770}
                  height={616}
                  className='rounded-2xl w-[684px] h-[289px]'
                />
              </div>
              <div className='bg-green-400 rounded-2xl w-[407px] h-[289px] relative hover:shadow-lg transition duration-300'>
                <h1 className='absolute text-4xl font-medium top-10 left-8'>Gym</h1>
                <Image
                  src='/images/productNewArrival/gym.png'
                  alt='Gym'
                  width={422}
                  height={677}
                  className='rounded-2xl w-[407px] h-[289px]'
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
  );
}
