import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Cart: React.FC = () => {
  useEffect(() => {
    document.title = "Finch Family Fudge | Cart";
  }, []);

  const { cartItems, removeFromCart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/order-summary");
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="container mx-auto p-4 animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 text-lightText">Your Cart</h2>
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
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center mb-2 bg-gray-800 p-2 rounded"
              >
                <div className="text-lightText">
                  <span className="font-semibold">{item.name}</span> -{" "}
                  {item.size.label}
                </div>
                <div className="flex items-center text-lightText">
                  <span className="mr-4">${item.size.price}</span>
                  <Button
                    variant="secondary"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-semibold text-lightText">
              Total: ${totalPrice.toFixed(2)}
            </span>
            <div className="flex space-x-4">
              <Button variant="primary" onClick={handleCheckout}>
                Checkout
              </Button>
              <Button variant="secondary" onClick={handleClearCart}>
                Clear Cart
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
