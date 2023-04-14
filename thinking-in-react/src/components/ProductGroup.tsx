import { ProductGroup } from "../models/ProductGroup";
import ProductRow from "./ProductRow";

type Props = {
  productGroup: ProductGroup;
};

function ProductGroup({ productGroup }: Props) {
  return (
    <>
      <tr>
        <th colSpan={2}>{productGroup.category}</th>
      </tr>
      {productGroup.items.map((product) => {
        return <ProductRow product={product} key={product.name} />;
      })}
    </>
  );
}

export default ProductGroup;
