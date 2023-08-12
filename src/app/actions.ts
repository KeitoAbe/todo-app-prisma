"use server";

import { PrismaClient, Todo } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query"],
});

export async function registerTodo(text: string) {
  await prisma.todo.create({
    data: {
      text: text,
    },
  });
}

export async function getTodoList() {
  //Todoテーブルからすべてのレコードを取得し、sort_orderフィールドを昇順に並べ、sort_orderフィールドがnullの場合はidフィールドを昇順に並べる
  const todoList = await prisma.$queryRaw<Todo[]>`
    SELECT * FROM Todo ORDER BY sort_order IS NULL, sort_order ASC, id ASC;
  `;
  return todoList;
}

export async function deleteTodo(id: number) {
  await prisma.todo.delete({
    where: {
      id: id,
    },
  });
}

export async function updateTodoDone(id: number, done: boolean) {
  await prisma.todo.update({
    where: { id: id },
    data: { done: done },
  });
}

export async function updateTodoText(id: number, text: string) {
  await prisma.todo.update({
    where: { id: id },
    data: { text: text },
  });
}

export async function updateTodoSortOrder(id: number, sortOrder: number) {
  await prisma.todo.update({
    where: { id: id },
    data: { sort_order: sortOrder },
  });
}
