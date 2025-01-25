import { NextResponse } from 'next/server'

interface ProductProps {
  id: string
  name: string
  image: string
  image1: string
  image2: string
  image3: string
  rating: number // Average rating (e.g., 4.5)
  price: string // Current price
  discount?: string // Discounted price (if applicable)
  oldPrice?: string // Old price (if applicable)
  description: string
}

const products: ProductProps[] = [
  {
    id: '1',
    name: 'Gradient Graphic T-shirt',
    image: '/images/productNewArrival/stripedShirt.png',
    image1: '/images/productNewArrival/blackPant.png',
    image2: '/images/productNewArrival/blackT.png',
    image3: '/images/productNewArrival/casual.png',
    rating: 3.5,
    price: '$145',
    discount: '10',
    oldPrice: '200',
    description: 'A stylish t-shirt with gradient design.'
  },
  {
    id: '2',
    name: 'Gradient Graphic T-shirt',
    image: '/images/productNewArrival/graphicShirt.png',
    image1: '/images/productNewArrival/graphicShirt.png',
    image2: '/images/productNewArrival/graphicShirt.png',
    image3: '/images/productNewArrival/graphicShirt.png',
    rating: 3.5,
    price: '$145',
    discount: '10',
    oldPrice: '200',
    description: 'A stylish t-shirt with gradient design.'
  },
  {
    id: '3',
    name: 'Gradient Graphic T-shirt',
    image: '/images/productNewArrival/short.png',
    image1: '/images/productNewArrival/graphicShirt.png',
    image2: '/images/productNewArrival/graphicShirt.png',
    image3: '/images/productNewArrival/graphicShirt.png',
    rating: 3.5,
    price: '$145',
    discount: '10',
    oldPrice: '200',
    description: 'A stylish t-shirt with gradient design.'
  },
  {
    id: '4',
    name: 'Gradient Graphic T-shirt',
    image: '/images/productNewArrival/blackPant.png',
    image1: '/images/productNewArrival/graphicShirt.png',
    image2: '/images/productNewArrival/graphicShirt.png',
    image3: '/images/productNewArrival/graphicShirt.png',
    rating: 3.5,
    price: '$145',
    discount: '10',
    oldPrice: '200',
    description: 'A stylish t-shirt with gradient design.'
  }
]

export const GET = () => {
  return NextResponse.json(products)
}
