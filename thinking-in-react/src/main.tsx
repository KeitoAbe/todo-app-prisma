import React from "react";
import ReactDOM from "react-dom/client";
import FilterableProductTable from "./FilterableProductTable";

export type ProductGroupType = {
  category: string;
  items: {
    price: string;
    stocked: boolean;
    name: string;
  }[];
};

const PRODUCTS = [
  {
    category: "Fruites",
    items: [
      { price: "$1", stocked: true, name: "Apple" },
      { price: "$1", stocked: true, name: "Dragonfruit" },
      { price: "$2", stocked: false, name: "Passionfruit" },
    ],
  },
  {
    category: "Vegetables",
    items: [
      { price: "$2", stocked: true, name: "Spinach" },
      { price: "$4", stocked: false, name: "Pumpkin" },
      { price: "$1", stocked: true, name: "Peas" },
    ],
  },
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FilterableProductTable products={PRODUCTS} />
  </React.StrictMode>
);
