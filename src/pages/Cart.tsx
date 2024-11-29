// src/pages/Cart.tsx
import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Cart: React.FC = () => {
  useEffect(() => {
    document.title = "Finch Family Fudge | Cart";
  }, []);

  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();
  const navigate = useNavigate();

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="container mx-auto p-4 animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 text-lightText">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-lightText">
          Your cart is empty.{" "}
          <Link to="/products" className="text-finchGold hover:underline">
            Shop now
          </Link>
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
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(index, parseInt(e.target.value) || 1)
                    }
                    className="w-16 p-2 border rounded bg-gray-700 text-lightText"
                    disabled={!item.inStock}
                  />
                  <Button
                    variant="secondary" // Red for Remove button
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
            <span className="text-xl font-semibold text-lightText">
              Total: ${totalPrice.toFixed(2)}
            </span>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Button variant="secondary" onClick={handleClearCart}>
                Clear Cart
              </Button>
              <Button variant="primary" onClick={() => navigate("/checkout")}>
                Checkout
              </Button>
            </div>
          </div>
          <p className="mt-6 text-lightText">
            *Your order will not be processed unless the payment successfully
            goes through on Venmo.
          </p>
          <p className="mt-2 text-lightText">
            Cash is also accepted if purchased in person.
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
