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
    addToCart({ ...product, size: selectedSize, quantity: 1 });
  };

  // Determine product status for display
  const productStatus = product.inStock
    ? "In Stock"
    : product.backorder
    ? "Available for Backorder"
    : "Out of Stock";

  // Determine status text color
  const statusColor = product.inStock
    ? "text-green-500"
    : product.backorder
    ? "text-yellow-500"
    : "text-red-500";

  // Determine the button label and disabled state
  const buttonLabel = product.inStock
    ? "Add to Cart"
    : product.backorder
    ? "Backorder"
    : "Unavailable";
  const isDisabled = !product.inStock && !product.backorder;

  return (
    <div className="product-card border rounded-lg p-4 shadow-lg flex flex-col bg-gray-800 animate-fadeIn">
      <img
        src={product.images[0]} // Use only the first image here
        alt={product.name}
        className="product-card-image mb-6 rounded"
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
        <p className={`mb-4 ${statusColor}`}>{productStatus}</p>
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
            const size = product.sizes.find((s) => s.label === e.target.value);
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
          variant="primary"
          onClick={handleAddToCart}
          disabled={isDisabled}
        >
          {buttonLabel}
        </Button>
        <Link to={`/products/${product.slug}`}>
          <button className="w-full px-6 py-3 rounded-lg transition-transform duration-200 focus:outline-none flex items-center justify-center bg-purple-500 text-white hover:bg-purple-700 hover:scale-105 my-2">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
