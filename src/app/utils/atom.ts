import { Todo } from "@prisma/client";
import { atom } from "recoil";

export const todosState = atom({
  key: "todosState",
  default: [] as Todo[],
});
