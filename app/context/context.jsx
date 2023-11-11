"use client";
import { createContext, useContext, useEffect, useState } from "react";

//1) Creating the context
export const cartContext = createContext();

export function Context({ children }) {
  const [cart, setCart] = useState([]);

  // Initialize cart items from local storage on first load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);

    if (!setCart) {
      return alert("There is nothing in the cart");
    }
  };

  const removeFromCart = (productID) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productID));
  };

  return (
    <cartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(cartContext);
  return context;
}
