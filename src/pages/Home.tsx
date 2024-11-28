import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Finch Family Fudge</h1>
      <p className="mb-6">Delicious, handcrafted fudge in a variety of flavors and sizes.</p>
      <Link to="/products" className="bg-finchGold text-white px-6 py-3 rounded hover:bg-yellow-500 text-lg">
        Shop Now
      </Link>
    </div>
  );
};

export default Home;
