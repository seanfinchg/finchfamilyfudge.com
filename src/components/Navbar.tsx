import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa'; // Importing from react-icons

const Navbar: React.FC = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.length;

  return (
    <nav className="bg-finchGold p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-white">
        <Link to="/">Finch Family Fudge</Link>
      </div>
      <div className="space-x-6 flex items-center">
        <Link to="/" className="text-white hover:text-gray-200 hidden md:inline">
          Home
        </Link>
        <Link to="/products" className="text-white hover:text-gray-200 hidden md:inline">
          Products
        </Link>
        <Link to="/cart" className="relative">
          <FaShoppingCart className="h-8 w-8 text-white" />
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
