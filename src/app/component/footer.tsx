import { Facebook, Github, Instagram, Mail, Twitter } from 'lucide-react'
import Btn from './button'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <section className='relative mt-36 flex h-[930px] w-full flex-col justify-center bg-[#f0f0f0] md:h-[480px]'>
        <div className='absolute left-0 right-0 top-[-80px] mx-auto flex h-[527px] w-[358px] flex-col justify-between md:w-[1240px]'>
          <div className='py-6 md:py-0 mx-auto flex h-[293px] w-[358px] flex-col items-center justify-around rounded-3xl bg-black md:h-[180px] md:w-full md:flex-row md:gap-0 gap-5'>
            <div className='w-[300px] md:w-[551px]'>
              <h1 className='text-3xl font-extrabold uppercase text-white md:text-4xl'>
                stay upto date about
                <br /> our latest offers
              </h1>
            </div>
            <div className='w-[300px] md:w-[349px]'>
              <form
                action=''
                className='flex h-[108px] flex-col items-center justify-between'
              >
                <div className='relative'>
                  <input
                    type='text'
                    placeholder='Enter Your Email Address'
                    className='h-[42px] w-[311px] rounded-full pl-12 md:h-[46px] md:w-[349px]'
                  />
                  <Mail
                    color='#8c8c8c'
                    strokeWidth={1}
                    className='absolute left-3 top-3'
                  />
                </div>
                <Btn
                  name='Subscribe to Newsletter'
                  classname='md:w-[349px] max-w-[311px] md:h-[46px] max-h-[42px] bg-white hover:bg-black hover:text-white transition duration-500 border-2 border-white'
                />
              </form>
            </div>
          </div>

          <div className='m-auto flex h-[590px] w-full flex-col justify-between border-b-2 md:h-[227px] md:w-[1240px] md:flex-row md:py-0 py-6'>
            <div className='flex h-[200px] w-full flex-col md:justify-between justify-center gap-3 md:h-[177px] md:w-[488px] pr-20 md:gap-0'>
              <h1 className='text-[33px] font-extrabold uppercase'>shop.co</h1>
              <p className='text-sm opacity-60'>
                We have clothes that suits your style and which you`&apos;`re
                proud to wear. From women to men
              </p>
              <div className='flex gap-3'>
                <Twitter size={28} color='#000000' strokeWidth={1.25} />
                <Facebook size={28} color='#000000' strokeWidth={1.25} />
                <Instagram size={28} color='#000000' strokeWidth={1.25} />
                <Github size={28} color='#000000' strokeWidth={1.25} />
              </div>
            </div>
            <div className='mt-6 md:mt-0 grid w-full md:grid-cols-[104px,136px,149px,149px,] grid-cols-2 place-content-between md:gap-y-0 gap-y-8'>
              <div className='flex h-[177px] flex-col justify-between'>
                <h1 className='uppercase leading-4 tracking-[3px]'>Company</h1>
                <div className='h-[133px]'>
                  <ul className='flex h-full flex-col justify-between opacity-60'>
                    <li>About</li>
                    <li>Features</li>
                    <li>Works</li>
                    <li>Career</li>
                  </ul>
                </div>
              </div>

              <div className='flex h-[177px] flex-col justify-between'>
                <h1 className='uppercase leading-4 tracking-[3px]'>Help</h1>
                <div className='h-[133px]'>
                  <ul className='flex h-full flex-col justify-between opacity-60'>
                    <li>Customer Support</li>
                    <li>Delivery Details</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>

              <div className='flex h-[177px] flex-col justify-between'>
                <h1 className='uppercase leading-4 tracking-[3px]'>Faq</h1>
                <div className='h-[133px]'>
                  <ul className='flex h-full flex-col justify-between opacity-60'>
                    <li>Account</li>
                    <li>Manage Deliveries</li>
                    <li>Orders</li>
                    <li>Payments</li>
                  </ul>
                </div>
              </div>

              <div className='flex h-[177px] flex-col justify-between'>
                <h1 className='uppercase leading-4 tracking-[3px]'>
                  resources
                </h1>
                <div className='h-[133px]'>
                  <ul className='flex h-full flex-col justify-between opacity-60'>
                    <li>Free eBooks</li>
                    <li>Development Tutorial</li>
                    <li>How to - Blog</li>
                    <li>Youtube Playlist</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='  flex md:justify-between md:items-start items-center md:flex-row flex-col md:mt-0 mt-10'>
              <h3 className='text-sm opacity-60'>
                Shop.co &copy; 2000-{new Date().getFullYear()}, All rights
                reserved.
              </h3>
              <div className='flex'>
                <Image
                  src='/images/footer/visa.png'
                  alt='Visa'
                  width={46}
                  height={30}
                />
                <Image
                  src='/images/footer/master.png'
                  alt='Visa'
                  width={46}
                  height={30}
                />
                <Image
                  src='/images/footer/paypal.png'
                  alt='Visa'
                  width={46}
                  height={30}
                />
                <Image
                  src='/images/footer/applepay.png'
                  alt='Visa'
                  width={46}
                  height={30}
                />
                <Image
                  src='/images/footer/gpay.png'
                  alt='Visa'
                  width={46}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
