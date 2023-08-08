import TodoList from "./TodoList";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTodoList() {
  "use server";
  try {
    const todoList = await prisma.todo.findMany();
    return todoList;
  } catch (error) {
    throw new Error("Failed to get todo list");
  }
}

async function registrationTodo(text: string) {
  "use server";
  try {
    await prisma.todo.create({
      data: {
        text: text,
      },
    });
  } catch (error) {
    throw new Error("Failed to registration todo");
  }
}

async function deleteTodo(id: number) {
  "use server";
  try {
    await prisma.todo.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    throw new Error("Failed to delete todo");
  }
}

export default function Home() {
  return (
    <TodoList
      getTodoList={getTodoList}
      registrationTodo={registrationTodo}
      deleteTodo={deleteTodo}
    />
  );
}
