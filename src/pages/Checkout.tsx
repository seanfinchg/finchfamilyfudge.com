import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Checkout: React.FC = () => {
  useEffect(() => {
    document.title = "Finch Family Fudge | Checkout";
  }, []);

  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const generatePaymentNote = () => {
    return cartItems
      .map((item) => `${item.name} (${item.size.label}) x${item.quantity}`)
      .join(", ");
  };

  const handleVenmo = () => {
    const note = encodeURIComponent(
      `Purchase of Fudge: ${generatePaymentNote()}`
    );
    const venmoLink = `https://venmo.com/StraightUpSean?txn=pay&amount=${totalPrice.toFixed(
      2
    )}&note=${note}`;
    window.open(venmoLink, "_blank");
    clearCart();
    navigate("/");
  };

  const handleBackToCart = () => {
    navigate("/cart");
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-4 animate-fadeIn">
        <h2 className="text-2xl font-bold mb-4 text-lightText">Checkout</h2>
        <p className="text-lightText">
          Your cart is empty.{" "}
          <button
            onClick={() => navigate("/products")}
            className="text-finchGold hover:underline"
          >
            Shop now
          </button>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 text-lightText">Checkout</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li
            key={`${item.id}-${item.size.label}`}
            className="flex justify-between items-center mb-2 bg-gray-800 p-2 rounded"
          >
            <div className="text-lightText">
              <span className="font-semibold">{item.name}</span> -{" "}
              {item.size.label} x {item.quantity}
            </div>
            <div className="text-lightText">
              ${(item.size.price * item.quantity).toFixed(2)}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xl font-semibold text-lightText">
          Total: ${totalPrice.toFixed(2)}
        </span>
      </div>
      <div className="mt-6 flex flex-col space-y-4">
        <Button variant="venmo" onClick={handleVenmo}>
          Pay with Venmo
        </Button>
        <Button variant="secondary" onClick={handleBackToCart}>
          Back to Cart
        </Button>
      </div>
      <p className="mt-4 text-red-500 text-center">
        *Your order will not be processed until the payment is successfully
        completed on Venmo.
      </p>
      <p className="mt-2 text-lightText text-center">
        Cash is also accepted if purchased in person.
      </p>
    </div>
  );
};

export default Checkout;
