import { rest } from "msw";
import shopList from "./data/shopList.json";

export const handlers = [
  rest.get("https://ramen-api.dev/shops", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(shopList));
  }),
  rest.get("https://ramen-api.dev/shops/:id", (req, res, ctx) => {
    const { id } = req.params;
    const ramenShop = shopList.shops.find((data) => data.id === id);
    if (!ramenShop) {
      return res(ctx.status(404));
    } else {
      const shopInfo = {
        shop: ramenShop,
      };
      return res(ctx.status(200), ctx.json(shopInfo));
    }
  }),
];
