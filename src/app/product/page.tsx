'use client'

import ProductDetails from '@/app/component/productDetail'
import { SlidersHorizontal } from 'lucide-react'
import Btn from '../component/button'
import CustomerFeedbackProduct from '@/app/component/customerFeedbackProduct'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { createContext, useContext, useState } from 'react'
import ProductCard from '../component/homeSection/productCard'

const SwiperSlideContext = createContext<any>(null)

const useSwiperSlide = () => {
  return useContext(SwiperSlideContext)
}

export default function product() {

  const [currentSlide, setCurrentSlide] = useState<number>(0)
  return (
    <>
      <ProductDetails
        name='T-Shirt with Tape Details'
        image='/images/productDetailsImages/image_1.png'
        image1='/images/productDetailsImages/image_2.png'
        image2='/images/productDetailsImages/image_5.png'
        image3='/images/productDetailsImages/image_6.png'
        rating={4.5}
        totalRatings={0}
        price='$120'
        discount=''
        oldPrice=''
      />

      <section className='m-auto md:my-14 flex h-[926px] md:w-[1240px] w-[358px] md:p-0 p-4 flex-col'>
        {/* top buttons names */}
        <div className='flex justify-between'>
          <div className='md:h-[38px] md:w-[414px] w-[107px] md:text-base text-sm border-b-2 text-center text-black text-opacity-60'>
            <h1>Product Details</h1>
          </div>
          <div className='md:h-[38px] md:w-[414px] w-[120px] md:text-base text-sm border-b-2 border-black text-center text-black text-opacity-60'>
            <h1>Rating & Reviews</h1>
          </div>
          <div className='md:h-[38px] md:w-[414px] w-[80px] md:text-base text-sm border-b-2 text-center text-black text-opacity-60'>
            <h1>Faqs</h1>
          </div>
        </div>


        {/* Latest options etc */}
        <div className='flex justify-between h-[48px] my-6'>
          <div className='flex'>
            <h1 className='md:text-2xl text-xl font-bold'>All Reviews <span className='md:text-base text-sm font-normal text-[#f0f0f0]'>(451)</span></h1>
          </div>
          <div className='flex gap-3 '>
            <div className='flex md:h-[48px] md:w-[48px] w-[40px] h-[40px] items-center justify-center rounded-full bg-[#f0f0f0]'>
              <SlidersHorizontal
                size={24}
                color='#000000'
                strokeWidth={1}
                className=''
              />
            </div>
            <div className='hidden md:block'>
              <select name='Latest' id='' className="w-[120px] h-[48px] rounded-full border border-gray-300 bg-[#f0f0f0] px-4 text-gray-700 shadow-sm outline-none transition duration-200 ease-in-out hover:border-gray-400 focus:border-white focus:ring-2 focus:ring-gray-400"
              >
                <option value='' className=''>Latest</option>
              </select>
            </div>
            <div>
                <Btn name='Write a Review' classname='text-white w-[113px] h-[40px] text-xs'/>
            </div>
          </div>

        </div>
          <div className='h-[854px] w-full flex justify-center'>
            <div>
            <CustomerFeedbackProduct/>
            </div>
            <div className='hidden md:block'>
            <CustomerFeedbackProduct/>
            </div>

          </div>
          <div className='m-auto'>
            <Btn name='Load More Reviews' classname='md:w-[230px] w-[195px] h-[47px] bg-white border-2 hover:bg-black hover:text-white transition duration-500'/>
          </div>
      </section>

       {/* You might Also like Section  */}
       <SwiperSlideContext.Provider value={{ currentSlide, setCurrentSlide }}>
        <section className='flex w-full justify-center md:py-10'>
          <div className='centerProductsDiv h-[673px] md:w-[1240px] w-full'>
            <div className='md:w-full w-[284px]'>
              <h1 className='uppercase font-extrabold md:text-5xl text-[32px] md:px-0 px-[51px] text-center '>You might also like</h1>
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
                  name='Polo with Contrast Trims'
                  image='/images/productDetailsImages/blueT.png'
                  rating={4.5}
                  totalRatings={0}
                  price='$212'
                  discount='20'
                  oldPrice='$242'
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  name='Gradient Graphic T-shirt'
                  image='/images/productDetailsImages/designT.png'
                  rating={3.5}
                  totalRatings={0}
                  price='$145'
                  discount=''
                  oldPrice=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  name='Polo with Tipping Details'
                  image='/images/productDetailsImages/mahroonT.png'
                  rating={4.5}
                  totalRatings={150}
                  price='$180'
                  discount=''
                  oldPrice=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard
                  name='Black Striped T-shirt'
                  image='/images/productDetailsImages/blackWhiteT.png'
                  rating={4.5}
                  totalRatings={150}
                  price='$112'
                  discount='20'
                  oldPrice='$150'
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </SwiperSlideContext.Provider>
    </>
  )
}
