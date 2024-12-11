'use client'

import { useRef } from 'react'
import FeedbackCard from '@/app/component/feedbackCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const feedbacks = [
  {
    id: 1,
    rating: 5,
    name: 'Sarah M.',
    feedback: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`
  },
  {
    id: 2,
    rating: 4,
    name: 'Alex K.',
    feedback: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`
  },
  {
    id: 3,
    rating: 5,
    name: 'James L.',
    feedback: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`
  }
]

const CustomerFeedbackProduct = () => {
  return (
    <section className='m-auto my-6 flex h-[auto] w-[358px] flex-col items-center gap-3 md:w-[620px]'>
      {/* Section Header */}

      {/* Feedback Cards with Swiper */}

  
      {feedbacks.map(({ id, rating, name, feedback }) => (
          <FeedbackCard key={id} rating={rating} name={name} feedback={feedback} classname='md:w-[610px]' />
        ))}
      
    </section>
  )
}

export default CustomerFeedbackProduct
