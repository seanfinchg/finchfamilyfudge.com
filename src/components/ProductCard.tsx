// src/components/ProductCard.tsx
import React, { useState } from "react";
import { Product, Size } from "../types";
import { useCart } from "../context/CartContext";
import Button from "./Button";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<Size>(product.sizes[0]);

  const handleAddToCart = () => {
    if (product.inStock) {
      addToCart({ ...product, size: selectedSize, quantity: 1 });
    }
  };

  return (
    <div className="product-card border rounded-lg p-4 shadow-lg flex flex-col bg-gray-800 animate-fadeIn">
      <img
        src={product.images[0]} // Use only the first image here
        alt={product.name}
        className="product-card-image w-full h-64 object-cover mb-6 rounded"
      />
      <div className="product-card-details flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-lightText">
          {product.name}
        </h3>
        <p className="mb-2 text-lightText">
          {product.description.length > 100
            ? `${product.description.substring(0, 100)}...`
            : product.description}
        </p>
        <p
          className={`mb-4 ${
            product.inStock ? "text-green-500" : "text-red-500"
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
        {product.inStock && (
          <>
            <label
              htmlFor={`size-${product.id}`}
              className="block mb-1 text-lightText"
            >
              Select Size:
            </label>
            <select
              id={`size-${product.id}`}
              value={selectedSize.label}
              onChange={(e) => {
                const size = product.sizes.find(
                  (s) => s.label === e.target.value
                );
                if (size) setSelectedSize(size);
              }}
              className="w-full p-2 border rounded bg-gray-700 text-lightText mb-4"
            >
              {product.sizes.map((size) => (
                <option key={size.label} value={size.label}>
                  {size.label} - ${size.price}
                </option>
              ))}
            </select>
            <Button
              variant="primary" // Gold as per request
              onClick={handleAddToCart}
              className="w-full"
              disabled={!product.inStock}
            >
              Add to Cart
            </Button>
          </>
        )}
        <div className="mt-4">
          <Link to={`/products/${product.slug}`}>
            <button className="bg-purple-500 text-white hover:bg-purple-700 hover:scale-105 px-4 py-2 rounded transition-transform duration-200">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
