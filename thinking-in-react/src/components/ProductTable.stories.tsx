import type { Meta, StoryObj } from "@storybook/react";
import ProductTable from "./ProductTable";

const PRODUCTGROUP1 = [
  {
    category: "Fruites",
    items: [
      { price: "$1", stocked: true, name: "Apple" },
      { price: "$1", stocked: true, name: "Dragonfruit" },
      { price: "$2", stocked: false, name: "Passionfruit" },
    ],
  },
];

const PRODUCTGROUP2 = [
  {
    category: "Vegetables",
    items: [],
  },
];

const meta: Meta<typeof ProductTable> = {
  component: ProductTable,
};

export default meta;
type Story = StoryObj<typeof ProductTable>;

export const Primary: Story = {
  render: () => <ProductTable products={PRODUCTGROUP1} />,
};

export const ProductEmpty: Story = {
  render: () => <ProductTable products={PRODUCTGROUP2} />,
};
