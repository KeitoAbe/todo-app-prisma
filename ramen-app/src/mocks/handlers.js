import { rest } from "msw";
import shopList from "./data/shopList.json";
import yoshimuraya from "./data/yoshimuraya.json";
import yoshimurayaImg from "./data/img/yoshimuraya-001.jpeg";
import sugitaya from "./data/sugitaya.json";
import sugitayaImg from "./data/img/sugitaya-001.jpeg";
import takasagoya from "./data/takasagoya.json";
import takasagoyaImg from "./data/img/takasagoya-001.jpeg";

export const handlers = [
  rest.get("./mock/shopList", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(shopList));
  }),
  rest.get("./mock/yoshimuraya", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(yoshimuraya));
  }),
  rest.get("./mock/img/yoshimuraya", async (req, res, ctx) => {
    const imageBuffer = await fetch(yoshimurayaImg).then((res) =>
      res.arrayBuffer()
    );
    return res(
      ctx.status(200),
      ctx.set("Content-Type", "image/jpeg"),
      ctx.body(imageBuffer)
    );
  }),
  rest.get("./mock/sugitaya", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(sugitaya));
  }),
  rest.get("./mock/img/sugitaya", async (req, res, ctx) => {
    const imageBuffer = await fetch(sugitayaImg).then((res) =>
      res.arrayBuffer()
    );
    return res(
      ctx.status(200),
      ctx.set("Content-Type", "image/jpeg"),
      ctx.body(imageBuffer)
    );
  }),
  rest.get("./mock/takasagoya", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(takasagoya));
  }),
  rest.get("./mock/img/takasagoya", async (req, res, ctx) => {
    const imageBuffer = await fetch(takasagoyaImg).then((res) =>
      res.arrayBuffer()
    );
    return res(
      ctx.status(200),
      ctx.set("Content-Type", "image/jpeg"),
      ctx.body(imageBuffer)
    );
  }),
];
