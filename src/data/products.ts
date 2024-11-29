// src/data/products.ts
import { Product } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: "Chocolate Fudge",
    slug: "chocolate-fudge",
    images: ["/images/chocolate-fudge.jpg"], // Single image for now
    sizes: [
      { label: "Small", price: 5 },
      { label: "Medium", price: 10 },
      { label: "Large", price: 15 },
    ],
    description: "Rich, creamy chocolate fudge made from the finest cocoa.",
    inStock: true,
  },
  {
    id: 2,
    name: "Rum Cherry Chocolate Fudge",
    slug: "rum-cherry-chocolate-fudge",
    images: ["/images/rum-cherry-chocolate-fudge.jpg"], // Single image
    sizes: [
      { label: "Small", price: 5 },
      { label: "Medium", price: 10 },
      { label: "Large", price: 15 },
    ],
    description: "A delicious blend of rum, cherry, and chocolate flavors.",
    inStock: true,
  },
  {
    id: 3,
    name: "Butterscotch Fudge",
    slug: "butterscotch-fudge",
    images: ["/images/butterscotch-fudge.jpg"], // Single image
    sizes: [
      { label: "Small", price: 5 },
      { label: "Medium", price: 10 },
      { label: "Large", price: 15 },
    ],
    description: "Smooth butterscotch fudge for a delightful treat.",
    inStock: true,
  },
  {
    id: 4,
    name: "Peppermint Fudge",
    slug: "peppermint-fudge",
    images: ["/images/peppermint-fudge.jpg"], // Single image
    sizes: [
      { label: "Small", price: 5 },
      { label: "Medium", price: 10 },
      { label: "Large", price: 15 },
    ],
    description: "Refreshing peppermint fudge perfect for the holidays.",
    inStock: true,
  },
  {
    id: 5,
    name: "Almond Roca",
    slug: "almond-roca",
    images: ["/images/almond-roca.jpg"], // Single image
    sizes: [
      { label: "Regular", price: 5 },
      { label: "Large", price: 15 },
    ],
    description: "Crunchy almond roca fudge with a smooth finish.",
    inStock: true,
  },
];
