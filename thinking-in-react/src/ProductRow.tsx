import styles from "./index.module.css";

type Props = {
  product: {
    price: string;
    stocked: boolean;
    name: string;
  };
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
