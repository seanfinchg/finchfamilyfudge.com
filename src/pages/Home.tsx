import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Finch Family Fudge | Home";
  }, []);

  return (
    <div className="flex-grow flex items-center justify-center bg-darkBg animate-fadeIn">
      <div className="text-center px-4 w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-lightText">
          Welcome to Finch Family Fudge
        </h1>
        <p className="mb-6 text-lightText">
          Delicious, handcrafted fudge in a variety of flavors and sizes.
        </p>
        <Link
          to="/products"
          className="bg-finchGold text-darkBg px-6 py-3 rounded hover:bg-yellow-500 text-lg transition-transform duration-200"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
