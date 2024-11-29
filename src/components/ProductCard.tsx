import React, { useState } from "react";
import { Product, Size } from "../types";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<Size>(product.sizes[0]);

  const handleAddToCart = () => {
    addToCart({ ...product, size: selectedSize });
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg flex flex-col bg-gray-800 animate-fadeIn">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h3 className="text-xl font-semibold mb-2 text-lightText">
        {product.name}
      </h3>
      <div className="mb-4">
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
          className="w-full p-2 border rounded bg-gray-700 text-lightText"
        >
          {product.sizes.map((size) => (
            <option key={size.label} value={size.label}>
              {size.label} - ${size.price}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-auto bg-finchGold text-darkBg px-4 py-2 rounded hover:bg-yellow-500 transition-transform duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
