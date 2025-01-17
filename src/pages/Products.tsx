// src/pages/Products.tsx
import React, { useEffect } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Products: React.FC = () => {
  useEffect(() => {
    document.title = "Finch Family Fudge | Products";
  }, []);

  return (
    <div className="container mx-auto p-4 animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 text-lightText">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 p-4 rounded-lg flex flex-col justify-between"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-lightText mb-2">
              {product.name}
            </h3>
            <p className="text-lightText mb-2">{product.description}</p>
            <p
              className={`mb-2 ${
                product.inStock
                  ? "text-green-500"
                  : product.backorder
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {product.inStock
                ? "In Stock"
                : product.backorder
                ? "Available for Backorder"
                : "Out of Stock"}
            </p>
            <button
              className={`mt-2 px-4 py-2 rounded-lg font-semibold ${
                product.inStock || product.backorder
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-gray-500 text-gray-300 cursor-not-allowed"
              }`}
              disabled={!product.inStock && !product.backorder}
            >
              {product.inStock
                ? "Add to Cart"
                : product.backorder
                ? "Backorder"
                : "Unavailable"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
