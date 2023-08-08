import TodoList from "./TodoList";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getTodoList() {
  "use server";
  const todoList = await prisma.todo.findMany();
  return todoList;
}

async function registrationTodo(text: string) {
  "use server";
  await prisma.todo.create({
    data: {
      text: text,
    },
  });
}

export default async function Home() {
  return (
    <TodoList getTodoList={getTodoList} registrationTodo={registrationTodo} />
  );
}
