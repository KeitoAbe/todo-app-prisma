import { rest } from "msw";
import json from "./data/notifications.json" assert { type: "json" };

let data = json;

export const handlers = [
  rest.get("/user", async (_req, res, ctx) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return res(
      ctx.status(200),
      ctx.json({
        name: "John Doe",
        email: "john.doe@fuller.co.jp",
        unit: "Webフロントエンド",
      })
    );
  }),
  rest.get("/notifications", async (req, res, ctx) => {
    const next = req.url.searchParams.get("next")
      ? Number(req.url.searchParams.get("next"))
      : null;

    // 取得するお知らせ数はパラメータでの指定がある場合はそれを使用、ない場合は5件
    const perPage = Number(req.url.searchParams.get("per_page")) || 5;

    // nextが指定されている場合は、そのidより若いお知らせを取得開始位置とする
    const index = next
      ? data.findIndex((notification) => notification.id <= next)
      : 0;

    // 取得お知らせ数+1件のデータを取得
    const items = data.slice(index, index + perPage + 1);
    let newNext = null;

    // 取得したデータが取得お知らせ数+1件ある場合は、次の取得開始位置とするidを取得
    if (items.length === perPage + 1) {
      newNext = items[perPage].id;
      // 取得お知らせ数+1件のデータから、最後の1件を削除
      items.pop();
    }

    const pagination = {
      per_page: perPage,
      next: newNext,
    };

    const responseData = {
      items,
      pagination,
    };

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return res(ctx.status(200), ctx.json(responseData));
  }),

  rest.get("/notifications/:id", (req, res, ctx) => {
    const { id } = req.params;
    const numberedId = Number(id);
    const item = data.find((item) => item.id === numberedId);
    if (!item) {
      return res(
        ctx.status(404),
        ctx.json({ message: "お知らせが見つかりませんでした" })
      );
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(res(ctx.status(200), ctx.json(item)));
      }, 1000);
    });
  }),

  rest.post("/notifications", async (req, res, ctx) => {
    const body = await req.json();
    //現在のidから最大値を取得して+1する
    const id = Math.max(...data.map((obj) => obj.id)) + 1;

    //配列の先頭にオブジェクトを追加
    data.unshift({ id, ...body });

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return res(ctx.status(201), ctx.json(body));
  }),

  rest.put("/notifications/:id", async (req, res, ctx) => {
    const { id } = req.params;
    const numberedId = Number(id);
    const body = await req.json();

    //配列の何番目の要素を更新するか
    const index = data.findIndex((obj) => obj.id === numberedId);
    //対象の要素を上書き
    data[index] = { id, ...body };

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return res(ctx.status(200), ctx.json(data));
  }),

  rest.delete("/notifications/:id", async (req, res, ctx) => {
    const { id } = req.params;
    const numberedId = Number(id);
    //同じidを持つものを削除
    data = data.filter((obj) => obj.id !== numberedId);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return res(ctx.status(200));
  }),
];
