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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
