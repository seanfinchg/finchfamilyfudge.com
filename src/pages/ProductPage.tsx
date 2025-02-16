// src/pages/ProductPage.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Product, Size } from "../types";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";
import { FaArrowLeft } from "react-icons/fa";
import { products } from "../data/products";

const ProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<Size | undefined>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
  const foundProduct = products.find((p: Product) => p.slug === slug);
  setProduct(foundProduct || null);
  setSelectedSize(foundProduct?.sizes[0]);
}, [slug]);

  const handleAddToCart = () => {
    if (product && selectedSize) {
      addToCart({ ...product, size: selectedSize, quantity: 1 });
    }
  };

  const handleImageChange = (direction: "prev" | "next") => {
    if (!product) return;
    const totalImages = product.images.length;
    setCurrentImageIndex((prev) =>
      direction === "prev"
        ? (prev - 1 + totalImages) % totalImages
        : (prev + 1) % totalImages
    );
  };

  if (!product) {
    return (
      <div className="container mx-auto p-6 animate-fadeIn flex flex-col min-h-screen">
        <h2 className="text-2xl font-bold mb-6 text-lightText">
          Product Not Found
        </h2>
        <Button variant="back" onClick={() => navigate("/products")}>
          Back to Products
        </Button>
      </div>
    );
  }

  // Determine product status for display
  const productStatus = product.inStock
    ? "In Stock"
    : product.backorder
    ? "Backorder Available"
    : "Out of Stock";

  // Determine the button label and disabled state
  const buttonLabel = product.inStock
    ? "Add to Cart"
    : product.backorder
    ? "Backorder"
    : "Unavailable";
  const isDisabled = !product.inStock && !product.backorder;

  return (
    <div className="container mx-auto p-6 animate-fadeIn flex flex-col min-h-screen">
      <div className="mb-10">
        <Button variant="back" onClick={() => navigate("/products")}>
          <FaArrowLeft className="mr-2" />
          Back to Products
        </Button>
      </div>
      <div className="flex flex-col md:flex-row">
        {/* Images Section */}
        <div className="md:w-1/2 flex flex-col items-center md:mr-10">
          <img
            src={product.images[currentImageIndex]}
            alt={`${product.name} Image ${currentImageIndex + 1}`}
            className="rounded-lg mb-4"
          />
          {product.images.length > 1 && (
            <div className="flex space-x-4 mt-4">
              <button
                onClick={() => handleImageChange("prev")}
                className="p-2 bg-gray-700 text-white rounded hover:bg-gray-900"
              >
                Previous
              </button>
              <button
                onClick={() => handleImageChange("next")}
                className="p-2 bg-gray-700 text-white rounded hover:bg-gray-900"
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 flex flex-col justify-center mt-6 md:mt-0">
          <h2 className="text-3xl font-bold mb-4 text-lightText">
            {product.name}
          </h2>
          <p className="mb-4 text-lightText">{product.description}</p>

          {product.allergens && (
            <p className="mb-4 text-lightText">
              <strong>Allergens:</strong> {product.allergens}
            </p>
          )}

          <p
            className={`mb-4 ${
              product.inStock
                ? "text-green-500"
                : product.backorder
                ? "text-yellow-500"
                : "text-red-500"
            }`}
          >
            {productStatus}
          </p>

          <label
            htmlFor="size"
            className="block mb-2 text-lightText font-semibold"
          >
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
            className="w-full p-3 border rounded-lg bg-gray-700 text-lightText mb-2"
          >
            {product.sizes.map((size) => (
              <option key={size.label} value={size.label}>
                {size.label} - ${size.price}
              </option>
            ))}
          </select>

          {selectedSize && (
            <p className="mb-6 text-lightText">
              <strong>Estimated Size:</strong> {selectedSize.estimatedSize}
            </p>
          )}

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="primary"
              onClick={handleAddToCart}
              disabled={isDisabled}
            >
              {buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
