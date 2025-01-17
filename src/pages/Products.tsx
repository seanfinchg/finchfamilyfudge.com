// src/pages/Products.tsx
import React, { useEffect } from "react";
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Products: React.FC = () => {
  useEffect(() => {
    document.title = "Finch Family Fudge | Products";
  }, []);

  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4 animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 text-lightText">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => {
          const isUnavailable = !product.inStock && !product.backorder;
          return (
            <div
              key={product.id}
              className="border rounded-lg p-4 bg-gray-800 flex flex-col justify-between"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-48 w-full object-cover rounded"
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold text-lightText">
                  {product.name}
                </h3>
                <p className="text-lightText mt-2">
                  {isUnavailable
                    ? "Out of Stock"
                    : product.inStock
                    ? "In Stock"
                    : "Available for Backorder"}
                </p>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/product/${product.slug}`)}
                  disabled={isUnavailable}
                  className="mt-4 w-full"
                >
                  {isUnavailable ? "Out of Stock" : "View Product"}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
