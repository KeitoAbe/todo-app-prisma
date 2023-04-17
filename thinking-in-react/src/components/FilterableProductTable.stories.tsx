import type { Meta, StoryObj } from "@storybook/react";
import FilterableProductTable from "./FilterableProductTable";

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
