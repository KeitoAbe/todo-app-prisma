import React from "react";
import { ProductGroupType } from "./main";
import ProductRow from "./ProductRow";

type Props = {
  productGroup: ProductGroupType;
};

function ProductGroup({ productGroup }: Props) {
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

export default ProductGroup;
