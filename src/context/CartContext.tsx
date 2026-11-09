// src/context/CartContext.tsx
import React, { useState } from "react";
import type { CartItem } from "../types";
import { CartContext } from "./cart";
import { useToast } from "./toast";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { showToast } = useToast();

  const addToCart = (product: CartItem) => {
    // Prevent adding items that are out of stock and not backorderable
    if (!product.inStock && !product.backorder) {
      showToast(`${product.name} is currently out of stock and cannot be added to your cart.`);
      return;
    }

    const existingIndex = cartItems.findIndex(
      (item) => item.id === product.id && item.size.label === product.size.label,
    );

    if (existingIndex !== -1) {
      // Update quantity of existing item
      const updatedCart = [...cartItems];
      const existing = updatedCart[existingIndex];
      if (!existing) return;
      existing.quantity += product.quantity;
      setCartItems(updatedCart);

      const updatedQuantity = existing.quantity;
      showToast(
        `Increased quantity of ${product.name} (${product.size.label}). Total for this item: ${updatedQuantity}`,
      );
    } else {
      // Add new item to the cart
      const newCart = [...cartItems, product];
      setCartItems(newCart);

      showToast(
        `${product.name} (${product.size.label}) added to your cart! Total for this item: ${product.quantity}`,
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
    const item = updatedCart[index];
    if (!item) return;
    item.quantity = quantity;
    setCartItems(updatedCart);
    showToast(`Updated quantity.`);
  };

  const clearCart = () => {
    setCartItems([]);
    showToast("Cart cleared.");
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.size.price * item.quantity, 0);

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
