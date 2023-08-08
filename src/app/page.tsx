import TodoList from "./TodoList";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTodoList() {
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

async function deleteTodo(id: number) {
  "use server";
  await prisma.todo.delete({
    where: {
      id: id,
    },
  });
}

export default async function Home() {
  return (
    <TodoList
      getTodoList={getTodoList}
      registrationTodo={registrationTodo}
      deleteTodo={deleteTodo}
    />
  );
}
