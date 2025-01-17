// src/data/products.ts
import { Product } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: "Almond Roca Chocolate Fudge",
    slug: "almond-roca-chocolate-fudge",
    images: ["/images/placeholder.jpg"],
    sizes: [
      { label: "1 Pack", price: 5, estimatedSize: "TBDoz" },
      { label: "2 Pack", price: 10, estimatedSize: "TBDx2oz" },
      { label: "3 Pack", price: 15, estimatedSize: "TBDx3oz" },
    ],
    description: "Standard fudge with crumbles of almond roca in it.",
    allergens:
      "Contains almonds. May contain trace amounts of pecans and walnuts.",
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
      { label: "1 Pack", price: 5, estimatedSize: "TBDoz" },
      { label: "2 Pack", price: 10, estimatedSize: "TBDx2oz" },
      { label: "3 Pack", price: 15, estimatedSize: "TBDx3oz" },
    ],
    description: "A delicious blend of rum, cherry, and chocolate flavors.",
    allergens:
      "Contains walnuts. May contain trace amounts of pecans and almonds.",
    inStock: true,
    backorder: true,
  },
  {
    id: 3,
    name: "Butterscotch Pecan Fudge",
    slug: "butterscotch-pecan-fudge",
    images: [
      "/images/butterscotch-pecan-fudge-1.jpg",
      "/images/butterscotch-pecan-fudge-2.jpg",
    ],
    sizes: [
      { label: "1 Pack", price: 5, estimatedSize: "TBDoz" },
      { label: "2 Pack", price: 10, estimatedSize: "TBDx2oz" },
      { label: "3 Pack", price: 15, estimatedSize: "TBDx3oz" },
    ],
    description: "Smooth butterscotch fudge for a delightful treat.",
    allergens:
      "Contains pecans. May contain trace amounts of almonds and walnuts.",
    inStock: true,
    backorder: true,
  },
  {
    id: 4,
    name: "Peppermint Fudge",
    slug: "peppermint-fudge",
    images: [
      "/images/peppermint-fudge-1.jpg",
      "/images/peppermint-fudge-2.jpg",
    ],
    sizes: [
      { label: "1 Pack", price: 5, estimatedSize: "TBDoz" },
      { label: "2 Pack", price: 10, estimatedSize: "TBDx2oz" },
      { label: "3 Pack", price: 15, estimatedSize: "TBDx3oz" },
    ],
    description: "Refreshing peppermint fudge perfect for the holidays.",
    allergens: "May contain trace amounts of pecans, walnuts, or almonds.",
    inStock: false,
    backorder: true,
  },
  {
    id: 5,
    name: "Almond Roca",
    slug: "almond-roca",
    images: ["/images/placeholder.jpg"],
    sizes: [
      { label: "1 Pack", price: 5, estimatedSize: "TBDoz" },
      { label: "2 Pack", price: 10, estimatedSize: "TBDx2oz" },
      { label: "3 Pack", price: 15, estimatedSize: "TBDx3oz" },
    ],
    description: "Crunchy almond roca fudge with a smooth finish.",
    allergens:
      "Contains almonds. May contain trace amounts of pecans and walnuts.",
    inStock: false,
    backorder: false,
  },
];
