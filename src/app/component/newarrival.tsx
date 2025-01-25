'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { createContext } from 'react'
import Link from 'next/link'
import { getAllProducts } from '@/sanity/lib/data' // Import the getAllProducts function
import { IProduct } from '@/sanity/lib/data'

const SwiperSlideContext = createContext<any>(null)

export default function NewArrival() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(true)  // Loading state
  const [error, setError] = useState<string | null>(null) // Error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts() // Use the Sanity API function
        if (data && data.length > 0) {
          setProducts(data)
        } else {
          setError('No products found')
        }
      } catch (err) {
        console.error('Error fetching products:', err)
        setError('Failed to load products')
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const [currentSlide, setCurrentSlide] = useState<number>(0)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <>
      <section>
        <SwiperSlideContext.Provider value={{ currentSlide, setCurrentSlide }}>
          <div className='flex w-[350px] md:w-[1240px]'>
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
              {products.map((product) => (
                <SwiperSlide key={product._id}>
                  <Link href={`/productdetails/${product._id}`}>
                    <div className='m-auto w-[295px] rounded-md transition duration-300 hover:shadow-lg'>
                      <div>
                        {product.imageUrl ? (
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={295}
                            height={298}
                            className='h-[298px] w-full rounded-2xl object-cover'
                            loading='lazy'
                          />
                        ) : (
                          <div className="h-[298px] w-full bg-gray-200 rounded-2xl flex items-center justify-center">
                            <span>No Image Available</span>
                          </div>
                        )}
                        <h3 className='mt-2 text-xl font-medium'>
                          {product.name}
                        </h3>
                        <div className='mt-2 space-x-2'>
                          <span className='text-lg font-bold text-black'>
                            {product.discountPercent
                              ? (
                                product.price - (product.price * 16 / 100)
                              ).toFixed(0)
                              : product.price}
                          </span>

                          {/* Old Price */}
                          <span className='ml-2 text-sm text-gray-400 line-through'>
                            {product.discountPercent
                              ? product.price.toFixed(0)
                              : null}
                          </span>

                          {product.discountPercent ? (
                            <span className='ml-2 text-sm text-red-500'>
                              {product.discountPercent}% OFF
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </SwiperSlideContext.Provider>
      </section>
    </>
  )
}
