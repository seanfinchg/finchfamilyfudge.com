import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa'; // Using react-icons

const Navbar: React.FC = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.length;

  return (
    <nav className="bg-darkBg p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-lightText">
        <Link to="/">Finch Family Fudge</Link>
      </div>
      <div className="space-x-6 flex items-center">
        {/* Desktop Links */}
        <Link to="/" className="text-lightText hover:text-gray-300 hidden md:inline">
          Home
        </Link>
        <Link to="/products" className="text-lightText hover:text-gray-300 hidden md:inline">
          Products
        </Link>
        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <FaShoppingCart className="h-8 w-8 text-lightText" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
