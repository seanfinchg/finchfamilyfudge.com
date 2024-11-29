export interface Size {
  label: string;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  sizes: Size[];
}

export interface CartItem extends Product {
  size: Size;
  quantity: number;
}
