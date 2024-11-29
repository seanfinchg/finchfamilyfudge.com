// src/types.ts
export interface Size {
  label: string;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  sizes: Size[];
  inStock: boolean;
}

export interface CartItem extends Product {
  size: Size;
  quantity: number;
}
