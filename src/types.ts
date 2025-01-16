// src/types.ts
export interface Size {
  label: string;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  slug: string; // Added slug
  description: string;
  images: string[]; // Supports multiple images
  sizes: Size[];
  inStock: boolean;
  backorder?: boolean; // Added backorder property (optional)
}

export interface CartItem extends Product {
  size: Size;
  quantity: number;
}
