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
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-card-image"
      />
      <div className="product-card-details">
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
              className="product-card-select"
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
              className="product-card-button"
              disabled={!product.inStock}
            >
              Add to Cart
            </Button>
          </>
        )}
        <Link
          to={`/products/${product.id}`}
          className="mt-2 text-finchGold hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
