'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation' // Ensure this is the correct import for useParams
import Image from 'next/image'
import Btn from '@/app/component/button'
import ProductDetailSecondSec from '@/app/component/productDetailSecondSec'
import { Check } from 'lucide-react'
import { useCart } from '@/app/context/cartcontext'
import { getAllProducts } from '@/sanity/lib/data'
import { Item } from '@radix-ui/react-navigation-menu'

interface IProduct {
  _id: string
  name: string
  price: number
  description: string
  imageUrl: string
  category: string
  discountPercent: number
  new: boolean | null
  colors: string[]
  sizes: string[]
}

export default function ProductDetails() {
  const params = useParams(); // Access dynamic route parameters here
  const [product, setProduct] = useState<IProduct | null>(null)
  const [selectedSize, setSelectedSize] = useState<string>()
  const [selectedColor, setSelectedColor] = useState<string>()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)

  const handleQuantityChange = (type: 'increment' | 'decrement') => {
    setQuantity((prev) => {
      if (type === 'decrement' && prev > 1) return prev - 1;
      if (type === 'increment') return prev + 1;
      return prev;
    });
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color before adding to the cart.");
      return;
    }
    if (!product?.imageUrl) {
      alert("Product image is missing. Please try again later.");
      return;
    }
  
    const item = {
      id: product?._id,
      name: product?.name,
      price: product?.price,
      quantity: 1,
      selectedSize,
      selectedColor,
      image: product?.imageUrl,
    };
  
    addToCart(item);
    alert(`${product?.name} has been added to your cart`);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
             const products = await getAllProducts();
        console.log("Fetched products:", products);
        console.log("Product ID from URLLLLL:", params.id); // Log the fetched ID to confirm

        const selectedProduct = products.find(
          (item: { _id: string }) =>
            item._id === params.id // Match the product ID with the URL
        );
        console.log("Selected Product:", selectedProduct)

        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params._id]); // Depend on the dynamic ID

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  const { _id, imageUrl, colors, sizes, name, price, discountPercent } = product;
  // Render your product details here

  return (
    <>
      <section className="mx-auto flex w-full max-w-[1240px] flex-col  p-0 md:h-[540px] md:flex-row md:justify-between">
        {/* Left Section: Images */}
        <div className="flex w-full flex-col-reverse gap-3 md:w-[610px] md:flex-row">
          <div className="grid grid-cols-3 gap-x-4  md:grid-cols-[152px] md:gap-y-4">
            {[imageUrl].map(
              (src, index) =>
                src && (
                  <Image
                    key={index}
                    src={src}
                    alt={`${name} additional view ${index + 1}`}
                    width={152}
                    height={167}
                    className="h-[106px] w-[111px] rounded-md object-cover md:h-[167px] md:w-[152px]"
                  />
                )
            )}
          </div>
          <Image
            src={imageUrl}
            alt={name}
            width={444}
            height={444}
            className="mt-2 rounded-2xl object-cover md:h-[530px] md:w-[444px]"
          />
        </div>

        {/* Right Section: Details */}
        <div className="flex w-full flex-col justify-evenly rounded-md p-0 md:w-[600px] md:py-2">
          <h3 className="text-2xl font-bold md:text-4xl">{name}</h3>

          {/* Colors */}
          <div className="mt-4 flex flex-col gap-3">
            <h4 className="text-sm text-gray-600">Select Colors:</h4>
            <div className="flex space-x-2">
              {colors && colors.length > 0 ? (
                colors.map((color, index) => (
                  <button
                    key={index}
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      selectedColor === color ? 'ring-2 ring-white' : ''
                    }`}
                    style={{ backgroundColor: color }}
                    aria-label={`Color option ${index + 1}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {selectedColor === color && <Check />}
                  </button>
                ))
              ) : (
                <p className="text-sm text-gray-500">No colors available</p>
              )}
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-4 flex flex-col gap-3 md:w-[420px]">
            <h4 className="text-sm text-gray-600">Choose Size:</h4>
            <div className="flex space-x-2">
              {sizes.map((size) => (
                <Btn
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  classname={`w-[86px] md:h-[46px] h-[39px] md:text-base text-sm bg-gray-200 text-black hover:bg-black hover:text-white transition duration-500 active:bg-black ${
                    selectedSize === size ? 'bg-black text-white' : 'bg-gray-200 text-black hover:bg-black hover:text-white'
                  }`}
                  name={size}
                />
              ))}
            </div>
            {selectedSize && (
              <p className="mt-2 text-sm text-gray-600">
                Selected Size: <span className="font-bold text-black">{selectedSize}</span>
              </p>
            )}
          </div>

          {/* Quantity and Add to Cart */}
          <div className="mt-4 flex items-center space-x-4">
            <div className="flex items-center">
              <Btn
                name="-"
                classname="md:w-[56px] w-[36px] h-[40px] bg-gray-200 text-black rounded-e-lg hover:bg-black hover:text-white transition duration-500"
                aria-label="Decrease quantity"
                onClick={() => handleQuantityChange('decrement')}
              />
              <p className="flex h-[40px] w-[36px] items-center justify-center bg-gray-200 text-center text-lg md:h-[52px] md:w-[56px]">
                {quantity}
              </p>
              <Btn
                name="+"
                classname="md:w-[56px] w-[36px] h-[40px] bg-gray-200 text-black rounded-s-xl hover:bg-black hover:text-white transition duration-500"
                aria-label="Increase quantity"
                onClick={() => handleQuantityChange('increment')}
              />
            </div>

            <Btn
              name="Add to Cart"
              onClick={handleAddToCart}
              classname="md:w-[400px] w-[236px] h-[46px] bg-black text-white hover:bg-white hover:text-black hover:border-2 transition duration-500"
            />
          </div>
        </div>
      </section>
      <ProductDetailSecondSec />
    </>
  );
}
