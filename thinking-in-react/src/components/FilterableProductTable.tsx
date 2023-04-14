import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { ProductGroup } from "../models/ProductGroup";
import { Product } from "../models/Product";

type Props = {
  products: ProductGroup[];
};

function FilterableProductTable({ products }: Props) {
  const [filterText, setFilterText] = useState("");
  const [isStockOnly, setIsStockOnly] = useState(false);
  const filteredProducts = products.map((productGroup) => {
    const filtered: ProductGroup = {
      category: productGroup.category,
      items: getFilteredItems(productGroup.items, filterText, isStockOnly),
    };
    return filtered;
  });

  return (
    <div>
      <SearchBar
        filterText={filterText}
        isStockOnly={isStockOnly}
        onFilterTextChange={setFilterText}
        onIsStockOnlyChange={setIsStockOnly}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default FilterableProductTable;

function getFilteredItems(
  items: Product[],
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
