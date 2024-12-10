import Image from 'next/image'
import Btn from './button'
export default function Hero() {
  return (
    <>
      <section className='bg-[#f2f0f1] h-[853px] md:h-auto pt-[40px] md:pt-0'>
        <div className='md:relative flex flex-col '>
          <Image
            src='/images/Rectangle 2.png'
            alt='Display Couple Image'
            width={1440}
            height={0}
            className='w-full hidden md:block'
          ></Image>
          <div className='md:absolute md:left-0 md:right-0 md:top-0 md:mx-auto md:mb-[243px] md:mt-[98px] flex flex-col md:flex-row md:w-[1240px] w-full'>
            <div className='px-5 md:px-0 flex md:h-[322px] md:w-[577px] w-full flex-col justify-between'>
              <h1 className='md:text-[64px] text-4xl font-black uppercase md:leading-[64px]'>
                find clothes that matches your style
              </h1>
              <p className='text-base opacity-60'>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style
              </p>
              <Btn name='Shop Now' classname='text-white w-[358px] hover:bg-white hover:text-black transition duration-500' />
            </div>
            <div className='w-full flex items-center flex-col gap-3 pt-4 md:hidden'>
              <div className='flex justify-between w-[278px] '>
                <div className=''>
                  <h1 className='text-2xl font-bold'>200+</h1>
                  <p className='text-xs'>International Brands</p>
                </div>
                <div className=''>
                  <h1 className='text-2xl font-bold'>2,000+</h1>
                  <p className='text-xs'>High-Quality Products</p>
                </div>
              </div>
              <div className='w-[278px] text-center'>
                <h1 className='text-2xl font-bold'>30,000+</h1>
                <p className='text-xs'>Happy Customers</p>
              </div>
            </div>
            <Image
            src='/images/coupleImage2.png'
            alt='Display Couple Image'
            width={390}
            height={448}
            className='md:hidden h-[448px] w-[390px]'
          ></Image>
          <div className='block md:hidden'>
              <Image
                src='/images/Vector.png'
                alt=''
                width={44}
                height={44}
                className='absolute left-10 bottom-[130px]'
              />
              <Image
                src='/images/Vector.png'
                alt=''
                width={76}
                height={76}
                className='absolute right-10 bottom-[180px]'
              />
            </div>
            <div className='hidden md:block'>
              <Image
                src='/images/Vector.png'
                alt=''
                width={56}
                height={56}
                className='absolute top-48'
              />
              <Image
                src='/images/Vector.png'
                alt=''
                width={104}
                height={104}
                className='absolute right-0'
              />
            </div>
          </div>
        </div>

        <div className='flex md:h-[122px] h-[146px] w-full items-center bg-black'>
          <div className='hidden m-auto md:flex w-[1240px] justify-between'>
            <Image
              src='/images/versace.png'
              alt=''
              width={166}
              height={33}
              className='h-auto'
            />
            <Image
              src='/images/zara.png'
              alt=''
              width={91}
              height={38}
              className='h-auto'
            />
            <Image
              src='/images/gucci.png'
              alt=''
              width={156}
              height={36}
              className='h-auto'
            />
            <Image
              src='/images/prada.png'
              alt=''
              width={194}
              height={32}
              className='h-auto'
            />
            <Image
              src='/images/calvin.png'
              alt=''
              width={206}
              height={33}
              className='h-auto'
            />
          </div>


          <div className='md:hidden m-auto flex flex-col w-full justify-between gap-5'>
            <div className='flex justify-around'>

            <Image
              src='/images/versace.png'
              alt=''
              width={116}
              height={23}
              className='h-auto'
              />
            <Image
              src='/images/zara.png'
              alt=''
              width={63}  
              height={26}
              className='h-auto'
              />
            <Image
              src='/images/gucci.png'
              alt=''
              width={109}
              height={25}
              className='h-auto'
              />
              </div>
              <div className='flex justify-around'>
            <Image
              src='/images/prada.png'
              alt=''
              width={127}
              height={21}
              className='h-auto'
              />
            <Image
              src='/images/calvin.png'
              alt=''
              width={134}
              height={21}
              className='h-auto'
              />
              </div>
          </div>
        </div>
      </section>
    </>
  )
}
