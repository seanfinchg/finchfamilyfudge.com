import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Products: React.FC = () => {
  return (
    <div className="w-full p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-lightText">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
