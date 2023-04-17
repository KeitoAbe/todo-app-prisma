import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const checked: Story = {
  args: {
    filterText: "apple",
    isStockOnly: true,
  },
};

export const unChecked: Story = {
  args: {
    filterText: "apple",
    isStockOnly: false,
  },
};
