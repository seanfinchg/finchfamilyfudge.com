// src/pages/Checkout.tsx
import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Checkout: React.FC = () => {
  useEffect(() => {
    document.title = "Finch Family Fudge | Checkout";
  }, []);

  const { cartItems, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleBackToCart = () => {
    navigate("/cart");
  };

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
    <div className="container mx-auto p-4 animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 text-lightText">Checkout</h2>
      {cartItems.length === 0 ? (
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
      ) : (
        <div>
          <ul className="space-y-6">
            {cartItems.map((item, index) => (
              <li
                key={`${item.id}-${item.size.label}`}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-800 p-4 rounded space-y-4 sm:space-y-0"
              >
                <div className="flex items-center space-x-6">
                  <img
                    src={item.images[0]} // Show only the first image
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-xl font-semibold text-lightText">
                      {item.name}
                    </h3>
                    <p className="text-lightText">
                      {item.size.label} - ${item.size.price}
                    </p>
                    <p className="text-lightText">
                      {item.inStock ? "In Stock" : "Out of Stock"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="font-semibold text-lightText">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
            <span className="text-xl font-semibold text-lightText">
              Total: ${totalPrice.toFixed(2)}
            </span>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Button variant="red" onClick={handleBackToCart}>
                Back to Cart
              </Button>
              <Button variant="venmo" onClick={handlePayWithVenmo}>
                Pay with Venmo
              </Button>
            </div>
          </div>
          <div>
            <p className="my-3 font-bold text-red-500">
              *Your order will not be processed unless the payment successfully
              goes through on Venmo.
            </p>
            <p className="my-3 font-bold text-red-500">
              *If you are on mobile, please make sure you manually input the
              products you are purchasing in the "Message" section of the Venmo
              payment, otherwise the order will be refunded.
            </p>
            <p className="my-3 text-lightText">
              Cash is also accepted if purchased in person.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
