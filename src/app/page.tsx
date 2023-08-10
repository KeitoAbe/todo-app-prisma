import styles from "./page.module.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ["query"],
});

async function getTodoList() {
  "use server";
  const todoList = await prisma.todo.findMany();
  return todoList;
}

async function registerTodo(text: string) {
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

async function updateTodoDone(id: number, done: boolean) {
  "use server";
  await prisma.todo.update({
    where: { id: id },
    data: { done: done },
  });
}

async function updateTodoText(id: number, text: string) {
  "use server";
  await prisma.todo.update({
    where: { id: id },
    data: { text: text },
  });
}

export default async function Home() {
  const todoList = await getTodoList();

  return (
    <div className={styles.container}>
      <TodoForm registerTodo={registerTodo} />
      <TodoList
        getTodoList={getTodoList}
        deleteTodo={deleteTodo}
        updateTodoDone={updateTodoDone}
        updateTodoText={updateTodoText}
      />
    </div>
  );
}
