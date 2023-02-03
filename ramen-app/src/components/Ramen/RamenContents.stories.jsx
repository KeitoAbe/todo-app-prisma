import RamenContents from "./RamenContents";

export default {
  title: "RamenContents",
  component: RamenContents,
};

const Template = (args) => <RamenContents {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  shopName: "ShopName",
  photoUrl: "https://picsum.photos/600/400",
};
