'use client'

import React from 'react'
import Breadcrumb from '../component/breadcrumb'
import { useCart } from '@/app/context/cartcontext'
import Btn from '../component/button'
import { Item } from '@radix-ui/react-navigation-menu'

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart()

  const deliveryFee: number = 15 
  const handleQuantityChange = (
    id: string,
    selectedSize: string,
    selectedColor: string,
    type: 'increment' | 'decrement'
  ) => {
    const item = cart.find(
      cartItem =>
        cartItem.id === id &&
        cartItem.selectedSize === selectedSize &&
        cartItem.selectedColor === selectedColor
    )

    if (!item) return // Item not found, exit

    if (type === 'decrement' && item.quantity > 1) {
      updateQuantity(id, selectedSize, selectedColor, item.quantity - 1)
    } else if (type === 'increment') {
      updateQuantity(id, selectedSize, selectedColor, item.quantity + 1)
    }
  }

  return (
    <section className='breadcrumb m-auto md:h-[626px] md:w-[1240px]'>
      <div className='flex  md:h-14'>
        <Breadcrumb />
      </div>

      <div className='flex flex-col justify-between md:h-[580px] md:w-full'>
        <div className=''>
          <h1 className='font-extrabold uppercase md:text-[40px]'>Your Cart</h1>
        </div>

        <div className='flex justify-between'>
          <div className='overflow-auto rounded-3xl border-2 p-4 md:h-[508px] md:w-[715px]'>
            {cart.length > 0 ? (
              <ul className='space-y-4'>
                {cart.map(item => (
                  <li
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                    className='flex items-center space-x-4 border-b pb-2'
                  >
                    <img
                      src={item.image}
                      alt={item.name || 'Product'}
                      className='h-[124px] w-[124px] object-cover'
                    />
                    <div className='flex-1 space-y-5'>
                      <div className=''>
                        <h3 className='text-lg font-semibold'>{item.name}</h3>
                        <p className='text-sm'>
                          Size:{' '}
                          <span className='text-gray-600'>
                            {item.selectedSize}
                          </span>
                        </p>
                        <p className='text-sm'>
                          Color:{' '}
                          <span className='text-gray-600'>
                            {item.selectedColor}
                          </span>
                        </p>
                      </div>
                      <p className='text-sm font-bold md:text-2xl'>
                        ${item.price}
                      </p>
                    </div>
                    <div className='flex h-[124px] w-56 flex-col items-end justify-between'>
                      <button
                        onClick={() =>
                          removeFromCart(
                            item.id,
                            item.selectedSize as string,
                            item.selectedColor as string
                          )
                        }
                        className='text-red-500 hover:underline'
                      >
                        Remove
                      </button>
                      <div className='mt-4 flex items-center'>
                        <Btn
                          name='-'
                          classname='md:w-[50px] md:h-[43px] w-[36px]  h-[40px] bg-gray-200 text-black rounded-e-lg hover:bg-black hover:text-white transition duration-500'
                          aria-label='Decrease quantity'
                          onClick={() =>
                            handleQuantityChange(
                              item.id,
                              item.selectedSize as string,
                              item.selectedColor as string,
                              'decrement'
                            )
                          }
                        />
                        <p className='flex h-[40px] w-[36px] items-center justify-center bg-gray-200 text-center text-lg md:h-[52px] md:w-[50px]'>
                          {item.quantity}
                        </p>
                        <Btn
                          name='+'
                          classname='md:w-[50px] md:h-[43px] w-[36px] h-[40px] bg-gray-200 text-black rounded-s-xl hover:bg-black hover:text-white transition duration-500'
                          aria-label='Increase quantity'
                          onClick={() =>
                            handleQuantityChange(
                              item.id,
                              item.selectedSize as string,
                              item.selectedColor as string,
                              'increment'
                            )
                          }
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className='text-center text-sm text-gray-600'>
                Your cart is empty.
              </p>
            )}
          </div>

          <div className='flex flex-col justify-around rounded-3xl border-2 p-4 md:h-[458px] md:w-[505px]'>
            <h2 className='mb-4 text-2xl font-bold'>Order Summary</h2>
            <div className='flex flex-col justify-between md:h-[193px] md:w-[457px]'>
              <div className='flex flex-col gap-6'>
                <div className='flex justify-between'>
                  <p className='text-gray-700'>Subtotal</p>
                  <p className='font-bold'>
                    $
                    {cart
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </p>
                </div>

                <div className='flex justify-between'>
                  <p className='text-gray-700'>Discount</p>
                  <p className='font-bold'>
                    $
                    {(cart
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      ) * 0.2
                    ).toFixed(2)}
                  </p>
                </div>
                <div className='flex justify-between'>
                  <p className='text-gray-700'>Delivery Fee</p>
                  <p className='font-bold'>
                    ${deliveryFee}
                  </p>
                </div>
              </div>
              <div className='h-[1px] w-full bg-black'></div>
              <div className='flex justify-between'>
                <p className='text-gray-700'>Total: $</p>
                <p className='font-bold'>
                  {(cart
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    ) * 0.8 + deliveryFee
                  ).toFixed(2)}
                </p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <form action='' className='flex-1'>
                <input
                  type='text'
                  placeholder='Add promo code'
                  className='w-full rounded-full border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </form>
              <button className='rounded-full bg-black px-6 py-2 text-white transition hover:bg-gray-800'>
                Apply
              </button>
            </div>

            <button className='mt-4 rounded-full bg-black px-4 py-3 text-white hover:bg-blue-600'>
              Go To Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
