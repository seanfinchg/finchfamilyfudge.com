// src/data/products.ts
import { Product } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: "Almond Roca Chocolate Fudge",
    slug: "almond-roca-chocolate-fudge",
    images: ["/images/placeholder.jpg"],
    sizes: [
      { label: "1 Pack", price: 5 },
      { label: "2 Pack", price: 10 },
      { label: "3 Pack", price: 15 },
    ],
    description: "Standard fudge with crumbles of almond roca in it.",
    inStock: false,
    backorder: true,
  },
  {
    id: 2,
    name: "Rum Cherry Chocolate Fudge",
    slug: "rum-cherry-chocolate-fudge",
    images: [
      "/images/rum-cherry-chocolate-fudge-1.jpg",
      "/images/rum-cherry-chocolate-fudge-2.jpg",
    ],
    sizes: [
      { label: "1 Pack", price: 5 },
      { label: "2 Pack", price: 10 },
      { label: "3 Pack", price: 15 },
    ],
    description: "A delicious blend of rum, cherry, and chocolate flavors.",
    inStock: true,
    backorder: true,
  },
  {
    id: 3,
    name: "Butterscotch Fudge",
    slug: "butterscotch-fudge",
    images: [
      "/images/butterscotch-fudge-1.jpg",
      "/images/butterscotch-fudge-2.jpg",
    ],
    sizes: [
      { label: "1 Pack", price: 5 },
      { label: "2 Pack", price: 10 },
      { label: "3 Pack", price: 15 },
    ],
    description: "Smooth butterscotch fudge for a delightful treat.",
    inStock: true,
    backorder: true,
  },
  {
    id: 4,
    name: "Peppermint Fudge",
    slug: "peppermint-fudge",
    images: ["/images/placeholder.jpg"],
    sizes: [
      { label: "1 Pack", price: 5 },
      { label: "2 Pack", price: 10 },
      { label: "3 Pack", price: 15 },
    ],
    description: "Refreshing peppermint fudge perfect for the holidays.",
    inStock: false,
    backorder: true,
  },
  {
    id: 5,
    name: "Almond Roca",
    slug: "almond-roca",
    images: ["/images/placeholder.jpg"],
    sizes: [
      { label: "1 Pack", price: 5 },
      { label: "2 Pack", price: 10 },
      { label: "3 Pack", price: 15 },
    ],
    description: "Crunchy almond roca fudge with a smooth finish.",
    inStock: false,
    backorder: false,
  },
];
