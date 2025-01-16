// src/components/Cart.tsx
import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { logoVenmo } from "ionicons/icons";
import Button from "./Button";

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleClearCart = () => {
    clearCart();
  };

  // Generate order summary for Venmo note
  const getOrderSummary = () => {
    if (cartItems.length === 0) return "";
    return cartItems
      .map((item) => `${item.quantity}x ${item.name} (${item.size.label})`)
      .join(", ");
  };

  const orderSummary = getOrderSummary();
  const encodedNote = encodeURIComponent(`Order: ${orderSummary}`);

  const venmoLink = `https://venmo.com/StraightUpSean?txn=pay&amount=${totalPrice.toFixed(
    2
  )}&note=${encodedNote}`;

  const handlePayWithVenmo = () => {
    window.open(venmoLink, "_blank");
  };

  return (
    <div className="container mx-auto p-6 animate-fadeIn flex flex-col min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-lightText">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-lightText">
          Your cart is empty.{" "}
          <Link
            to="/products"
            className="text-finchGold hover:text-yellow-500 transition-transform duration-200 hover:scale-105"
          >
            Shop now
          </Link>
          .
        </p>
      ) : (
        <div className="flex-grow">
          <ul className="space-y-6">
            {cartItems.map((item, index) => (
              <li
                key={`${item.id}-${item.size.label}`}
                className="flex flex-col sm:flex-row justify-between items-center bg-gray-800 p-6 rounded-lg space-y-4 sm:space-y-0"
              >
                {/* Product Image */}
                <img
                  src={item.images[0]} // Ensure each cart item has at least one image
                  alt={item.name}
                  className="w-32 h-32 object-contain rounded-lg"
                />
                {/* Product Details */}
                <div className="flex-grow text-lightText space-y-2">
                  <span className="font-semibold text-xl">{item.name}</span>
                  <span>{item.size.label}</span>
                  <span>${item.size.price.toFixed(2)}</span>
                  <span>Quantity: {item.quantity}</span>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <Button
                    variant="red" // Red variant for Remove button
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          {/* Cart Summary and Actions */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
            <span className="text-2xl font-semibold text-lightText">
              Total: ${totalPrice.toFixed(2)}
            </span>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
              <Button variant="primary" onClick={handleCheckout}>
                Checkout
              </Button>
              <Button variant="red" onClick={handleClearCart}>
                Clear Cart
              </Button>
              <button
                onClick={handlePayWithVenmo}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-200 flex items-center justify-center"
              >
                <IonIcon icon={logoVenmo} className="mr-2 w-5 h-5" />
                Pay with Venmo
              </button>
            </div>
          </div>
          {/* Additional Information */}
          <div className="mt-6 text-lightText">
            <p>
              *Your order will not be processed unless the payment successfully
              goes through on Venmo.
            </p>
            <p className="mt-2">
              Cash is also accepted if purchased in person.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
