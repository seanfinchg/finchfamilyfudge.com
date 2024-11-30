// src/pages/Home.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Finch Family Fudge | Home";
  }, []);

  return (
    <div className="container mx-auto my-16 p-4 animate-fadeIn flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-4 text-lightText">
        Welcome to Finch Family Fudge
      </h1>
      <p className="mb-6 text-lightText">
        Indulge in our delicious, handcrafted fudge made with love and the
        finest ingredients.
      </p>
      <Link to="/products">
        <Button variant="primary">Browse Products</Button>
      </Link>
    </div>
  );
};

export default Home;
