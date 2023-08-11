"use server";

import { PrismaClient } from "@prisma/client";

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
  const todoList = await prisma.todo.findMany();
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
