import { FaStar, FaCheckCircle } from 'react-icons/fa';
import clsx from "clsx";

interface FeedbackCardProps {
  rating: number;
  name: string;
  feedback: string;
  classname?: string;

}

const FeedbackCard = ({ rating, name, feedback,classname }: FeedbackCardProps) => {
  return (
    <div className={clsx("p-6 border md:w-[400px] md:h-[240px] w-full h-[200px] rounded-3xl shadow-md bg-white hover:shadow-lg transition duration-300", classname)}>
      {/* Star Rating */}
      <div className="flex space-x-3 mb-2">
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar
            key={index}
            className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>

      {/* Customer Info */}
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-lg md:font-bold font-semibold">{name}</span>
        <FaCheckCircle className="text-green-500" />
      </div>

      {/* Feedback */}
      <p className="text-gray-600 md:text-base text-sm">{feedback}</p>
    </div>
  );
};

export default FeedbackCard;
