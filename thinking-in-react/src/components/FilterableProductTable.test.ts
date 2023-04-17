import { describe, expect, test } from "vitest";
import { getFilteredItems } from "./FilterableProductTable";

const products = [
  { price: "$1", stocked: true, name: "Apple" },
  { price: "$1", stocked: true, name: "Dragonfruit" },
  { price: "$2", stocked: false, name: "Passionfruit" },
];

test("Filtertextにフィルター文字列が指定されてない場合は、関数は全ての商品リストを返す。", () => {
  const FilteredProducts = getFilteredItems(products, "", false);
  expect(FilteredProducts).toEqual(products);
});

describe("Filtertextにフィルター文字列が指定されていた場合、関数はnameにフィルター文字列を含む商品リストを返す。", () => {
  test("フィルター文字列が全て小文字の場合", () => {
    const FilteredProducts = getFilteredItems(products, "ppl", false);
    expect(FilteredProducts).toEqual([
      { price: "$1", stocked: true, name: "Apple" },
    ]);
  });

  test("フィルター文字列が全て大文字の場合.", () => {
    const FilteredProducts = getFilteredItems(products, "PPL", false);
    expect(FilteredProducts).toEqual([
      { price: "$1", stocked: true, name: "Apple" },
    ]);
  });
});

test("isOnlyStockedがtrueの場合、関数はstockedがtrueの商品リストのみを返す。", () => {
  const FilteredProducts = getFilteredItems(products, "", true);
  expect(FilteredProducts).toEqual([
    { price: "$1", stocked: true, name: "Apple" },
    { price: "$1", stocked: true, name: "Dragonfruit" },
  ]);
});
