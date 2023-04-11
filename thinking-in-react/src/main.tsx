import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./index.module.css";

function FilterableProductTable() {
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
          <tr>
            <th colSpan={2}>Fruits</th>
          </tr>
          <tr>
            <td>Apple</td>
            <td>$1</td>
          </tr>
          <tr>
            <td>Dragonfruit</td>
            <td>$1</td>
          </tr>
          <tr>
            <td className={styles.soldOut}>Passionfruit</td>
            <td>$2</td>
          </tr>

          <tr>
            <th colSpan={2}>Vegetables</th>
          </tr>
          <tr>
            <td>Spinach</td>
            <td>$2</td>
          </tr>
          <tr>
            <td className={styles.soldOut}>Pumpkin</td>
            <td>$4</td>
          </tr>
          <tr>
            <td>Peas</td>
            <td>$1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FilterableProductTable />
  </React.StrictMode>
);
