import { Facebook, Github, Instagram, Mail, Twitter } from 'lucide-react'
import Btn from './button'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <section className='relative flex h-[589px] w-full flex-col justify-center bg-[#f0f0f0] mt-36'>
        <div className='w-[1240px] h-[527px] flex flex-col justify-between mx-auto absolute left-0 right-0 top-[-80px]'>
          <div className='mx-auto flex h-[180px] w-full items-center justify-around rounded-3xl bg-black'>
            <div className='w-[551px]'>
              <h1 className='text-4xl font-extrabold uppercase text-white'>
                stay upto date about
                <br /> our latest offers
              </h1>
            </div>
            <div className='w-[349px]'>
              <form
                action=''
                className='flex h-[108px] flex-col items-center justify-between'
              >
                <div className='relative'>
                  <input
                    type='text'
                    placeholder='Enter Your Email Address'
                    className='h-[46px] w-[349px] rounded-full pl-12'
                  />
                  <Mail
                    color='#8c8c8c'
                    strokeWidth={1}
                    className='absolute left-3 top-3'
                  />
                </div>
                <Btn
                  name='Subscribe to Newsletter'
                  classname='w-[349px] h-[46px] bg-white'
                />
              </form>
            </div>
          </div>

          <div className='m-auto flex h-[227px] w-[1240px] justify-between border-b-2'>
            <div className='flex h-[177px] w-[248px] flex-col justify-between'>
              <h1 className='text-[33px] font-extrabold uppercase'>shop.co</h1>
              <p className='text-sm opacity-60'>
                We have clothes that suits your style and which you`&apos;`re proud to
                wear. From women to men
              </p>
              <div className='flex gap-3'>
                <Twitter size={28} color='#000000' strokeWidth={1.25} />
                <Facebook size={28} color='#000000' strokeWidth={1.25} />
                <Instagram size={28} color='#000000' strokeWidth={1.25} />
                <Github size={28} color='#000000' strokeWidth={1.25} />
              </div>
            </div>

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
              <h1 className='uppercase leading-4 tracking-[3px]'>resources</h1>
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

          <div>
            <div className='flex justify-between'>
              <h3 className='text-sm opacity-60'>
                Shop.co &copy; 2000-{new Date().getFullYear()}, All rights reserved.
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
