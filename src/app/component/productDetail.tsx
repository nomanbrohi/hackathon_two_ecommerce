'use client';

import Image from 'next/image';
import Btn from '@/app/component/button';


interface ProductProps {
  name: string;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  rating: number; // Average rating (e.g., 4.5)
  totalRatings: number; // Total number of ratings
  price: string; // Current price
  discount?: string; // Discounted price (if applicable)
  oldPrice?: string; // Old price (if applicable)
}

const ProductDetails: React.FC<ProductProps> = ({
  name,
  image,
  image1,
  image2,
  image3,
  rating,
  price,
  discount,
  oldPrice,
}) => {
  return (
    <section className="mx-auto flex md:flex-row flex-col w-full max-w-[1240px] p-4">
      {/* Left Section: Images */}
      <div className="flex md:flex-row flex-col-reverse md:w-[50%] w-full gap-3">
        <div className="grid md:grid-cols-1 grid-cols-3 md:gap-y-4 gap-x-4">
          {[image1, image2, image3].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`${name} additional view ${index + 1}`}
              width={152}
              height={167}
              className="md:h-[167px] md:w-[152px] w-[111px] h-[106px] rounded-md object-cover"
            />
          ))}
        </div>
        <Image
          src={image}
          alt={name}
          width={444}
          height={444}
          className="md:w-full rounded-md object-cover"
        />
      </div>

      {/* Right Section: Details */}
      <div className="flex flex-col justify-between md:w-[50%] w-full rounded-md  p-4">
        <h3 className="md:text-4xl text-2xl font-bold">{name}</h3>

        {/* Rating */}
        <div className="mt-2 flex items-center space-x-2">
          <div className="flex">
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill={i < Math.floor(rating) ? 'gold' : 'gray'}
                viewBox="0 0 24 24"
                width="24"
                height="16"
                className="mr-1"
              >
                <path d="M12 2.49l3.09 6.26 6.91 1-5 4.87 1.18 6.88-6.18-3.25L6.82 21.5l1.18-6.88-5-4.87 6.91-1L12 2.49z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-500">{rating.toFixed(1)}/5</p>
        </div>

        {/* Price */}
        <div className="mt-2">
          <span className="text-2xl font-bold text-black">{discount || price}</span>
          {oldPrice && (
            <span className="ml-2 text-sm text-gray-400 line-through">{oldPrice}</span>
          )}
          {discount && (
            <span className="ml-2 text-sm text-red-500">
              {((1 - Number(discount) / Number(oldPrice!)) * 100).toFixed(0)}%
            </span>
          )}
        </div>

        <p className="mt-2 text-sm text-gray-700">
          This graphic t-shirt is perfect for any occasion. Crafted from a soft
          and breathable fabric, it offers superior comfort and style.
        </p>

        {/* Colors */}
        <div className="mt-4 flex flex-col gap-3">
          <h4 className="text-sm text-gray-600">Select Colors:</h4>
          <div className="flex space-x-2">
            {["#4F4631", "#314F4A", "#31344F"].map((color, index) => (
              <button
                key={index}
                className={`h-8 w-8 rounded-full `}
                style={{ backgroundColor: color }}
                aria-label={`Color option ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="mt-4 flex flex-col gap-3">
          <h4 className="text-sm text-gray-600">Choose Size:</h4>
          <div className="flex space-x-2">
            {["Small", "Medium", "Large", "X-Large"].map((size) => (
              <Btn
                key={size}
                name={size}
                classname="w-[86px] md:h-[46px] h-[39px] md:text-base text-sm bg-gray-200 text-black hover:bg-black hover:text-white transition duration-500 active:bg-black"
              />
            ))}
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="mt-4 flex items-center space-x-4">
          {/* Quantity Selector */}
          <div className="flex items-center ">
            <Btn
              name="-"
              classname="md:w-[56.6px] w-[36px] h-[40px] bg-gray-200 text-black rounded-e-lg hover:bg-black hover:text-white transition duration-500"
              aria-label="Decrease quantity"
            />
            <p className="md:w-[56.6px] w-[36px] md:h-[52px] h-[40px] bg-gray-200 text-center text-lg flex items-center justify-center">1</p>
            <Btn
              name="+"
              classname="md:w-[56.6px] w-[36px] h-[40px] bg-gray-200 text-black rounded-s-xl hover:bg-black hover:text-white transition duration-500"
              aria-label="Increase quantity"
            />
          </div>

          {/* Add to Cart Button */}
          <Btn
            name="Add to Cart"
            classname="md:w-[400px] w-[236px] h-[46px] bg-black text-white hover:bg-white hover:text-black hover:border-2 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
