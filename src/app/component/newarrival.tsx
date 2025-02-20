'use client'
import Image from 'next/image'
import { useState, useEffect, Key } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { createContext } from 'react'
import Link from 'next/link'
import { getAllProducts } from '@/sanity/lib/data'
import { IProduct } from '@/sanity/lib/data'

// interface Product {
//   id: string
//   name: string
//   image: string
//   rating: number // Average rating (e.g., 4.5)
//   price: string // Current price
//   discount?: string // Discounted price (if applicable)
//   oldPrice?: string // Old price (if applicable)
//   description: string
// }
const SwiperSlideContext = createContext<any>(null)

export default function TopSelling() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { newArrivalProducts, allProducts, topSellingProducts } =
          await getAllProducts()
        if (newArrivalProducts && newArrivalProducts.length > 0) {
          setProducts(newArrivalProducts)
        } else {
          setError('No Products found')
        }
      } catch (err) {
        console.error('Error fetching products: ', err)
        setError('Failed to Load Products')
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
              {products.map(product => (
                <SwiperSlide key={product._id}>
                  <Link href={`productdetails/${product._id}`}>
                    <div className='m-auto w-[295px] rounded-md transition duration-300 hover:shadow-lg'>
                      <div key={product._id}>
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          width={295}
                          height={298}
                          className='h-[298px] w-full rounded-2xl object-cover'
                        />
                        {/* Product Name */}
                        <h3 className='mt-2 text-xl font-medium'>
                          {product.name}
                        </h3>

                        {/* Star Rating*/}
                        <div className='mt-1 flex items-center space-x-2'>
                          <div className='flex'>
                            {Array.from({ length: 5 }, (_, i) => (
                              <svg
                                key={i}
                                xmlns='http://www.w3.org/2000/svg'
                                fill={
                                  i < Math.floor(product.rating)
                                    ? 'gold'
                                    : 'gray'
                                }
                                viewBox='0 0 24 24'
                                width='16'
                                height='16'
                                className='mr-1'
                              >
                                <path d='M12 2.49l3.09 6.26 6.91 1-5 4.87 1.18 6.88-6.18-3.25L6.82 21.5l1.18-6.88-5-4.87 6.91-1L12 2.49z' />
                              </svg>
                            ))}
                          </div>
                          <p className='text-sm text-gray-500'>
                            {product.rating
                              ? product.rating.toFixed(1)
                              : 'No rating yet'}
                            /5
                          </p>
                        </div>

                        {/* Price and Discount */}
                        <div className='mt-2 space-x-2'>
                          <span className='text-lg font-bold text-black'>
                            Rs:{' '}
                            {product.discountPercent
                              ? (
                                  product.price -
                                  (product.price * 16) / 100
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
