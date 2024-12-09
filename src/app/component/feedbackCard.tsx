import { FaStar, FaCheckCircle } from 'react-icons/fa';

interface FeedbackCardProps {
  rating: number;
  name: string;
  feedback: string;
}

const FeedbackCard = ({ rating, name, feedback }: FeedbackCardProps) => {
  return (
    <div className="p-6 border w-[400px] h-[240px] rounded-3xl shadow-md bg-white hover:shadow-lg transition duration-300">
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
        <span className="text-lg font-bold">{name}</span>
        <FaCheckCircle className="text-green-500" />
      </div>

      {/* Feedback */}
      <p className="text-gray-600">{feedback}</p>
    </div>
  );
};

export default FeedbackCard;
