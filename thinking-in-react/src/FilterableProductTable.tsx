import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { ProductGroupType } from "./main";

type Props = {
  products: ProductGroupType[];
};

function FilterableProductTable({ products }: Props) {
  const [filterText, setFilterText] = useState("");
  const [isStockOnly, setIsStockOnly] = useState(false);
  const filteredProducts = products.map((productGroup) => {
    const filtered: ProductGroupType = {
      category: productGroup.category,
      items: getFilteredItems(productGroup.items, filterText, isStockOnly),
    };
    return filtered;
  });

  return (
    <div>
      <SearchBar filterText={filterText} isStockOnly={isStockOnly} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default FilterableProductTable;

function getFilteredItems(
  items: { name: string; stocked: boolean; price: string }[],
  queryStr: string,
  isOnlyStocked: boolean
) {
  const filteredItems = items.filter((item) => {
    const isIncludeQueryStr = item.name
      .toLowerCase()
      .includes(queryStr.toLowerCase());
    const stockStatus = !isOnlyStocked || item.stocked;
    return isIncludeQueryStr && stockStatus;
  });
  return filteredItems;
}
