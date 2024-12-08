import ProductCard from './productCard'
import Btn from '../button'
import Image from 'next/image'
export default function Section() {
  return (
    <>
      {/* New Arrival Section */}
      <section className='flex w-full justify-center border-b-2 py-10'>
        <div className='centerProductsDiv h-[673px] w-[1240px]'>
          <div>
            <h1 className='heading'>New arrivals</h1>
          </div>
          <div className='flex w-full justify-between'>
            <ProductCard
              name='T-Shirt with Tape Details'
              image='/images/productNewArrival/blackT.png'
              rating={4.5}
              totalRatings={0}
              price='$120'
              discount=''
              oldPrice=''
            />
            <ProductCard
              name='Skinny Fit Jeans'
              image='/images/productNewArrival/bluePant.png'
              rating={3.5}
              totalRatings={0}
              price=''
              discount='20'
              oldPrice='$260'
            />
            <ProductCard
              name='Checkered Shirt'
              image='/images/productNewArrival/shirt.png'
              rating={4.5}
              totalRatings={150}
              price='$100.00'
              discount='$80.00'
              oldPrice='$100.00'
            />
            <ProductCard
              name='Sleeve Striped T-Shirt'
              image='/images/productNewArrival/orangeT.png'
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

      {/* Top Selling Section */}
      <section className='flex w-full justify-center py-10'>
        <div className='centerProductsDiv h-[673px] w-[1240px]'>
          <div>
            <h1 className='heading'>top selling</h1>
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

      {/* Browse by dress style Section */}
      <section className='flex w-full justify-center border-b-2 py-10'>
        <div className='h-[866px] w-[1240px] rounded-3xl bg-[#f0f0f0] shadow-md shadow-slate-500 flex flex-col items-center justify-evenly'>
          <div>
            <h1 className='heading'>browse by dress style</h1>
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
              ></Image>
              </div>
              <div className='bg-green-400 relative rounded-2xl w-[684px] h-[289px] hover:shadow-lg transition duration-300'>
                <h1 className='absolute text-4xl font-medium top-10 left-8'>Formal</h1>
                <Image
                src='/images/productNewArrival/formal.png'
                alt='Formal'
                width={1306}
                height={870}
                className='rounded-2xl'
              ></Image>
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
              ></Image>
              </div>
              <div className='bg-green-400 rounded-2xl w-[407px] h-[289px] relative hover:shadow-lg transition duration-300'>
              <h1 className='absolute text-4xl font-medium top-10 left-8'>Gym</h1>
              <Image
                src='/images/productNewArrival/gym.png'
                alt='Gym'
                width={422}
                height={677}
                className='rounded-2xl w-[407px] h-[289px]'
              ></Image>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
