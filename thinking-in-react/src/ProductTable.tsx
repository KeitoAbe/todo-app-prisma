import ProductGroup from "./ProductGroup";
import { ProductGroupType } from "./main";

type Props = {
  products: ProductGroupType[];
};

function ProductTable({ products }: Props) {
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
          if (productGroup.items.length !== 0) {
            return (
              <ProductGroup
                productGroup={productGroup}
                key={productGroup.category}
              />
            );
          }
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;
