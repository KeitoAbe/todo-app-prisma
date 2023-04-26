import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Product from "./components/Product.tsx";
import { Product as ProductType } from "./models/Product.tsx";

const products: ProductType[] = [
  {
    category: "fruit",
    name: "りんご",
    price: 100,
    sugerContent: 10,
  },
  {
    category: "vegetable",
    name: "キャベツ",
    price: 150,
  },
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {products.map((product) => {
      return <Product product={product} />;
    })}
  </React.StrictMode>
);
