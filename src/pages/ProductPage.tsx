// src/pages/ProductPage.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Product, Size } from "../types";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";

const ProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>(); // Changed from id to slug
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<Size | undefined>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    import("../data/products").then((module) => {
      const foundProduct = module.products.find(
        (p: Product) => p.slug === slug
      );
      setProduct(foundProduct || null);
      setSelectedSize(foundProduct?.sizes[0]);
    });
  }, [slug]);

  const handleAddToCart = () => {
    if (product && selectedSize && product.inStock) {
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
      <div className="container mx-auto p-4 animate-fadeIn">
        <h2 className="text-2xl font-bold mb-4 text-lightText">
          Product Not Found
        </h2>
        <Button variant="primary" onClick={() => navigate("/products")}>
          Back to Products
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 animate-fadeIn flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <div className="relative">
          <img
            src={product.images[currentImageIndex]}
            alt={`${product.name} - Image ${currentImageIndex + 1}`}
            className="w-full h-auto object-cover rounded"
          />
          {product.images.length > 1 && (
            <>
              <button
                onClick={() => handleImageChange("prev")}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-lightText bg-gray-700 p-2 rounded hover:bg-gray-600"
              >
                Prev
              </button>
              <button
                onClick={() => handleImageChange("next")}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-lightText bg-gray-700 p-2 rounded hover:bg-gray-600"
              >
                Next
              </button>
            </>
          )}
        </div>
        {product.images.length > 1 && (
          <div className="flex justify-center mt-2">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-4 h-4 mx-1 rounded-full ${
                  currentImageIndex === index
                    ? "bg-finchGold"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col md:w-1/2 md:ml-6">
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
