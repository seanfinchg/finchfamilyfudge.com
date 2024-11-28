import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Chocolate Fudge',
    image: '/images/chocolate-fudge.jpg', // Placeholder image path
    sizes: [
      { label: 'Small', price: 5 },
      { label: 'Medium', price: 10 },
      { label: 'Large', price: 15 },
    ],
  },
  {
    id: 2,
    name: 'Rum Cherry Chocolate Fudge',
    image: '/images/rum-cherry-chocolate-fudge.jpg',
    sizes: [
      { label: 'Small', price: 6 },
      { label: 'Medium', price: 12 },
      { label: 'Large', price: 18 },
    ],
  },
  {
    id: 3,
    name: 'Butterscotch Fudge',
    image: '/images/butterscotch-fudge.jpg',
    sizes: [
      { label: 'Small', price: 5 },
      { label: 'Medium', price: 10 },
      { label: 'Large', price: 15 },
    ],
  },
  {
    id: 4,
    name: 'Peppermint Fudge',
    image: '/images/peppermint-fudge.jpg',
    sizes: [
      { label: 'Small', price: 5 },
      { label: 'Medium', price: 10 },
      { label: 'Large', price: 15 },
    ],
  },
  {
    id: 5,
    name: 'Almond Roca',
    image: '/images/almond-roca.jpg',
    sizes: [
      { label: 'Regular', price: 7 },
      { label: 'Large', price: 12 },
    ],
  },
];
