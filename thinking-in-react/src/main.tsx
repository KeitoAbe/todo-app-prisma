import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./index.module.css";

type Props = {
  products: ProductGroup[];
};

type ProductGroup = {
  category: string;
  items: Product[];
};

type Product = {
  price: string;
  stocked: boolean;
  name: string;
};

function FilterableProductTable({ products }: Props) {
  return (
    <div>
      <div>
        <input type="text" placeholder="Search..." />
      </div>
      <label>
        <input type="checkbox" /> Only show products in stock
      </label>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((productGroup: ProductGroup) => {
            return (
              <>
                <tr>
                  <th colSpan={2}>{productGroup.category}</th>
                </tr>
                {productGroup.items.map((product: Product) => {
                  return (
                    <tr>
                      <td className={product.stocked ? "" : styles.soldOut}>
                        {product.name}
                      </td>
                      <td>{product.price}</td>
                    </tr>
                  );
                })}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

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
