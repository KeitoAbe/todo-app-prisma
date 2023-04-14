import styles from "../index.module.css";
import { Product } from "../models/Product";

type Props = {
  product: Product;
};

function ProductRow({ product }: Props) {
  return (
    <tr>
      <td className={product.stocked ? "" : styles.soldOut}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
