import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./index.module.css";

type ProductGroupProps = {
  productGroup: ProductGroup;
};

type ProductTableProps = {
  products: ProductGroup[];
};

type ProductGroup = {
  category: string;
  items: Product[];
};

type ProductRowProps = {
  product: Product;
};

type Product = {
  price: string;
  stocked: boolean;
  name: string;
};

function ProductRow({ product }: ProductRowProps) {
  return (
    <tr>
      <td className={product.stocked ? "" : styles.soldOut}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductGroup({ productGroup }: ProductGroupProps) {
  return (
    <React.Fragment key={productGroup.category}>
      <tr>
        <th colSpan={2}>{productGroup.category}</th>
      </tr>
      {productGroup.items.map((product) => {
        return <ProductRow product={product} key={product.name} />;
      })}
    </React.Fragment>
  );
}

function ProductTable({ products }: ProductTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((productGroup) => {
          return (
            <ProductGroup
              productGroup={productGroup}
              key={productGroup.category}
            />
          );
        })}
      </tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <>
      <div>
        <input type="text" placeholder="Search..." />
      </div>
      <label>
        <input type="checkbox" /> Only show products in stock
      </label>
    </>
  );
}

function FilterableProductTable({ products }: ProductTableProps) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
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
