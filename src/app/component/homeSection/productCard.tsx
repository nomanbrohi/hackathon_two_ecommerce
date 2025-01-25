'use client';

import Image from 'next/image';
import { getAllProducts } from '@/sanity/lib/data'
import { IProduct } from '@/sanity/lib/data'

// import { useRouter } from 'next/navigation'

interface ProductProps {
  name: string;
  image: string;
  rating: number; // Average rating (e.g., 4.5)
  totalRatings: number; // Total number of ratings
  price: string; // Current price
  discount?: string; // Discounted price (if applicable)
  oldPrice?: string; // Old price (if applicable)
}

const ProductCard: React.FC<ProductProps> = ({
  name,
  image,
  rating,
  totalRatings,
  price,
  discount,
  oldPrice,
}) => {
  // const router = useRouter()

  // const handleClick = () => {
  //   router.push(`/product/@{id}`)
  // }
  return (
    <div
    // onClick={handleClick}
    className="w-[295px] m-auto rounded-md hover:shadow-lg transition duration-300">
      {/* Product Image */}
      <Image
        src={image}
        alt={name}
        width={295}
        height={298}
        className="w-full h-[298px] object-cover rounded-2xl"
      />

      {/* Product Name */}
      <h3 className="text-xl font-medium mt-2">{name}</h3>

      {/* Star Rating */}
      <div className="flex items-center space-x-2 mt-1">
        <div className="flex">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              fill={i < Math.floor(rating) ? 'gold' : 'gray'}
              viewBox="0 0 24 24"
              width="16"
              height="16"
              className="mr-1"
            >
              <path d="M12 2.49l3.09 6.26 6.91 1-5 4.87 1.18 6.88-6.18-3.25L6.82 21.5l1.18-6.88-5-4.87 6.91-1L12 2.49z" />
            </svg>
          ))}
        </div>
        <p className="text-sm text-gray-500">
          {rating.toFixed(1)}/5
        </p>
      </div>

      {/* Price and Discount */}
      <div className="mt-2">
        <span className="text-lg font-bold text-black">{discount || price}</span>
        {oldPrice && (
          <span className="ml-2 text-sm text-gray-400 line-through">
            {oldPrice}
          </span>
        )}
        {discount && (
          <span className="ml-2 text-sm text-red-500">
            {((1 - parseFloat(discount) / parseFloat(oldPrice!)) * 100).toFixed(0)}%
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
