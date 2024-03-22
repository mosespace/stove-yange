"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

//1) Creating the context
export const cartContext = createContext();

export function Context({ children }) {
  const [search, setSearch] = useState("");

  const [handleSearch, setHandleSearch] = useState([]);

  const [cart, setCart] = useState([]);

  // Initializing cart items from local storage on first load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (product) => {
    // Checking if the product already exists in the cart
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (isProductInCart) {
      toast.error("Item already exists in the cart", {
        position: "top-right",
        autoClose: 3000, // 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    // Updating the cart state
    setCart((prevCart) => [...prevCart, product]);

    // Updating cart items in local storage
    const updatedCart = [...cart, product];
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const removeFromCart = (productID) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productID));

    // Removing item from local storage
    const updatedCart = cart.filter((item) => item.id !== productID);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    toast.success("Product Has Removed Deleted From The Cart", {
      position: "top-right",
      autoClose: 3000, // 3 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        setSearch,
        search,
        handleSearch,
        setHandleSearch,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(cartContext);
  return context;
}
