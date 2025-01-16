// src/context/CartContext.tsx
import React, { createContext, useContext, useState } from "react";
import { CartItem } from "../types";
import { useToast } from "./ToastContext";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  totalPrice: number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { showToast } = useToast();

  const addToCart = (product: CartItem) => {
    // Prevent adding items that are out of stock and not backorderable
    if (!product.inStock && !product.backorder) {
      showToast(
        `${product.name} is currently out of stock and cannot be added to your cart.`
      );
      return;
    }

    const existingIndex = cartItems.findIndex(
      (item) => item.id === product.id && item.size.label === product.size.label
    );

    if (existingIndex !== -1) {
      // Update quantity of existing item
      const updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += product.quantity;
      setCartItems(updatedCart);

      const updatedQuantity = updatedCart[existingIndex].quantity;
      showToast(
        `Increased quantity of ${product.name} (${product.size.label}). Total for this item: ${updatedQuantity}`
      );
    } else {
      // Add new item to the cart
      const newCart = [...cartItems, product];
      setCartItems(newCart);

      showToast(
        `${product.name} (${product.size.label}) added to your cart! Total for this item: ${product.quantity}`
      );
    }
  };

  const removeFromCart = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    showToast(`Item removed from cart.`);
  };

  const updateQuantity = (index: number, quantity: number) => {
    if (quantity < 1) return;
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = quantity;
    setCartItems(updatedCart);
    showToast(`Updated quantity.`);
  };

  const clearCart = () => {
    setCartItems([]);
    showToast("Cart cleared.");
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.size.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
