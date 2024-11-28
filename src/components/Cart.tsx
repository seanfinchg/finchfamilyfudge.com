import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/order-summary');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-lightText">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-lightText">Your cart is empty. <Link to="/products" className="text-finchGold">Shop now</Link>.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-2 bg-gray-800 p-2 rounded">
                <div className="text-lightText">
                  <span className="font-semibold">{item.name}</span> - {item.size.label}
                </div>
                <div className="flex items-center text-lightText">
                  <span className="mr-4">${item.size.price}</span>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-semibold text-lightText">Total: ${totalPrice.toFixed(2)}</span>
            <button
              onClick={handleCheckout}
              className="bg-finchGold text-darkBg px-4 py-2 rounded hover:bg-yellow-500"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
