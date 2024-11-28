import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-finchGold p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-white">
        Finch Family Fudge
      </div>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:text-gray-200">Home</Link>
        <Link to="/products" className="text-white hover:text-gray-200">Products</Link>
        <Link to="/cart" className="text-white hover:text-gray-200">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
