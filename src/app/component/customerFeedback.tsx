'use client';

import { useRef } from 'react';
import FeedbackCard from '@/app/component/feedbackCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const feedbacks = [
  {
    id: 1,
    rating: 5,
    name: 'Sarah M.',
    feedback: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
  },
  {
    id: 2,
    rating: 4,
    name: 'Alex K.',
    feedback: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
  },
  {
    id: 3,
    rating: 5,
    name: 'James L.',
    feedback: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
  },
];

const CustomerFeedback = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="my-20 md:w-[1240px] w-[358px] h-[auto] m-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="md:text-5xl text-4xl font-extrabold uppercase">Our Happy Customers</h2>
        <div className="flex space-x-4">
          <button
            ref={prevRef}
            aria-label="Previous"
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-300 transition-transform transform hover:scale-110"
          >
            <FaArrowLeft className="text-xl text-black" />
          </button>
          <button
            ref={nextRef}
            aria-label="Next"
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-300 transition-transform transform hover:scale-110"
          >
            <FaArrowRight className="text-xl text-black" />
          </button>
        </div>
      </div>

      {/* Feedback Cards with Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
          }
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {feedbacks.map(({ id, rating, name, feedback }) => (
          <SwiperSlide key={id}>
            <FeedbackCard rating={rating} name={name} feedback={feedback} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomerFeedback;
