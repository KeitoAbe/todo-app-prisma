import type { Meta, StoryObj } from "@storybook/react";
import FilterableProductTable from "./FilterableProductTable";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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

const meta: Meta<typeof FilterableProductTable> = {
  component: FilterableProductTable,
};

export default meta;
type Story = StoryObj<typeof FilterableProductTable>;

export const Primary: Story = {
  render: () => <FilterableProductTable products={PRODUCTS} />,
};

export const filterText: Story = {
  render: () => <FilterableProductTable products={PRODUCTS} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("textbox"), "apple");
    //入力された文字列を含む商品は表示される
    await expect(canvas.getByText("Apple")).toBeInTheDocument();
    //入力された文字列を含まない商品は表示されない
    await expect(canvas.queryByText("Dragonfruit")).not.toBeInTheDocument();
    await expect(canvas.queryByText("Passionfruit")).not.toBeInTheDocument();
    await expect(canvas.queryByText("Spinach")).not.toBeInTheDocument();
    await expect(canvas.queryByText("Pumpkin")).not.toBeInTheDocument();
    await expect(canvas.queryByText("Peas")).not.toBeInTheDocument();
  },
};

export const isStockOnly: Story = {
  render: () => <FilterableProductTable products={PRODUCTS} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("checkbox"), "click");
    // 在庫がある商品は表示される
    await expect(canvas.getByText("Apple")).toBeInTheDocument();
    await expect(canvas.getByText("Dragonfruit")).toBeInTheDocument();
    await expect(canvas.getByText("Spinach")).toBeInTheDocument();
    await expect(canvas.getByText("Peas")).toBeInTheDocument();
    // 在庫がない商品は表示されない
    await expect(canvas.queryByText("Passionfruit")).not.toBeInTheDocument();
    await expect(canvas.queryByText("Pumpkin")).not.toBeInTheDocument();
  },
};
