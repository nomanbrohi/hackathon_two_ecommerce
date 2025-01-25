'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { getAllProducts, IProduct } from '@/sanity/lib/data';  // Import getAllProducts from data.ts

interface CartItem {
  selectedColor: string;
  selectedSize: string;
  image: string;
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, selectedSize: string, selectedColor: string) => void;
  updateQuantity: (id: string, selectedSize: string, selectedColor: string, newQuantity: number) => void;
  getProductById: (id: string) => IProduct | undefined;  // Add getProductById to the context type
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]); // State to store products fetched from Sanity

  // Fetch all products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsFromSanity = await getAllProducts();
        setProducts(productsFromSanity);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedSize === item.selectedSize &&
          cartItem.selectedColor === item.selectedColor
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedSize === item.selectedSize &&
          cartItem.selectedColor === item.selectedColor
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevCart, item];
    });
  };

  const removeFromCart = (id: string, selectedSize: string, selectedColor: string) => {
    setCart((prevCart) =>
      prevCart.filter(
        (cartItem) =>
          !(cartItem.id === id && cartItem.selectedSize === selectedSize && cartItem.selectedColor === selectedColor)
      )
    );
  };

  const updateQuantity = (id: string, selectedSize: string, selectedColor: string, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === id &&
        cartItem.selectedSize === selectedSize &&
        cartItem.selectedColor === selectedColor
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
      )
    );
  };

  // A helper function to get product details by id
  const getProductById = (id: string) => {
    return products.find(product => product._id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getProductById, // Provide the getProductById function to fetch product details from cart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
