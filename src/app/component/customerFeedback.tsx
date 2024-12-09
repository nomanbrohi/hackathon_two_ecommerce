import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import FeedbackCard from '@/app/component/feedbackCard';

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
  return (
    <section className="my-20 w-[1240px] h-[338px] m-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-5xl font-bold uppercase">Our Happy Customers</h2>
        <div className="flex space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-300">
            <FaArrowLeft />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-300">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Feedback Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {feedbacks.map(({ id, rating, name, feedback }) => (
          <FeedbackCard key={id} rating={rating} name={name} feedback={feedback} />
        ))}
      </div>
    </section>
  );
};

export default CustomerFeedback;
