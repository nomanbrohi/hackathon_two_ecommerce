import Image from 'next/image'
import Btn from './button'
export default function Hero() {
  return (
    <>
      <section className=''>
        <div className='relative'>
          <Image
            src='/images/Rectangle 2.png'
            alt='Display Couple Image'
            width={1440}
            height={0}
            className='w-full'
          ></Image>
          <div className='absolute left-0 right-0 top-0 mx-auto mb-[243px] mt-[98px] flex w-[1240px]'>
            <div className='flex h-[322px] w-[577px] flex-col justify-between'>
              <h1 className='text-[64px] font-bold uppercase leading-[64px]'>
                find clothes that matches your style
              </h1>
              <p className='text-base opacity-60'>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style
              </p>
              <Btn name='Shop Now' classname='text-white'/>
            </div>
            <div className=''>
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

        <div className='h-[122px] w-full bg-black flex items-center'>
          <div className='w-[1240px] flex justify-between m-auto'>
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
        </div>
      </section>
    </>
  )
}
