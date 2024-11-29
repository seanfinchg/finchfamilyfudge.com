// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.length;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-darkBg p-4 flex justify-between items-center w-full relative">
      <div className="text-2xl font-bold text-lightText">
        <Link to="/">Finch Family Fudge</Link>
      </div>
      {/* Desktop Menu */}
      <div className="space-x-6 hidden md:flex items-center">
        <Link to="/" className="text-lightText hover:text-finchGold">
          Home
        </Link>
        <Link to="/products" className="text-lightText hover:text-finchGold">
          Products
        </Link>
        <Link to="/about" className="text-lightText hover:text-finchGold">
          About
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
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-lightText focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 right-4 bg-darkBg border border-gray-700 rounded-lg shadow-lg w-48 animate-fadeIn">
          <Link
            to="/"
            className="block px-4 py-2 text-lightText hover:bg-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block px-4 py-2 text-lightText hover:bg-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-lightText hover:bg-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/cart"
            className="block px-4 py-2 text-lightText hover:bg-gray-700 flex justify-between items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Cart
            {itemCount > 0 && (
              <span className="bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
