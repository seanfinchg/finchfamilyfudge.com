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

  const venmoLink = `https://venmo.com/StraightUpSean?txn=pay&amount=${totalPrice.toFixed(
    2
  )}`;

  const handlePayWithVenmo = () => {
    window.open(venmoLink, "_blank");
  };

  return (
    <div className="container mx-auto p-4 animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 text-lightText">Checkout</h2>
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
          <ul>
            {cartItems.map((item, index) => (
              <li key={`${item.id}-${item.size.label}`} className="cart-item">
                <div className="flex items-center mb-2 sm:mb-0">
                  <img
                    src={item.images[0]} // Show only the first image
                    alt={item.name}
                    className="w-16 h-16 object-cover mr-4 rounded"
                  />
                  <div className="flex flex-col">
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
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
            <span className="text-xl font-semibold text-lightText">
              Total: ${totalPrice.toFixed(2)}
            </span>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Button variant="primary" onClick={handleBackToCart}>
                Back to Cart
              </Button>
              <Button variant="venmo" onClick={handlePayWithVenmo}>
                Pay with Venmo
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
