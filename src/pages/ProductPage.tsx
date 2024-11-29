// src/pages/ProductPage.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product, Size } from "../types";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<Size | undefined>();

  useEffect(() => {
    // Fetch the product based on the ID from the URL slug
    import("../data/products").then((module) => {
      const foundProduct = module.products.find(
        (p: Product) => p.name.toLowerCase().replace(/\s+/g, "-") === id
      );
      setProduct(foundProduct || null);
      setSelectedSize(foundProduct?.sizes[0]);
    });
  }, [id]);

  const handleAddToCart = () => {
    if (product && selectedSize && product.inStock) {
      addToCart({ ...product, size: selectedSize, quantity: 1 });
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto p-4 animate-fadeIn">
        <h2 className="text-2xl font-bold mb-4 text-lightText">
          Product Not Found
        </h2>
        <Button variant="primary" onClick={() => window.history.back()}>
          Back to Products
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 animate-fadeIn flex flex-col md:flex-row">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 h-auto object-cover rounded mb-4 md:mb-0 md:mr-6"
      />
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold mb-2 text-lightText">
          {product.name}
        </h2>
        <p className="text-lg text-lightText mb-4">{product.description}</p>
        {selectedSize && (
          <p className="text-xl font-semibold text-lightText mb-4">
            Price: ${selectedSize.price}
          </p>
        )}
        <p className="mb-4 text-lightText">
          Status:{" "}
          <span className={product.inStock ? "text-green-500" : "text-red-500"}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </p>
        {product.inStock && (
          <>
            <label htmlFor="size" className="mb-2 text-lightText">
              Select Size:
            </label>
            <select
              id="size"
              value={selectedSize?.label}
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
              variant="primary"
              onClick={handleAddToCart}
              className="w-full"
            >
              Add to Cart
            </Button>
          </>
        )}
        {!product.inStock && (
          <p className="text-red-500">
            This product is currently out of stock.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
