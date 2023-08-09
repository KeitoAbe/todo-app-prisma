import styles from "./page.module.css";
import TodoForm from "./TodoForm";
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

async function updateTodoDone(todoId: number, done: boolean) {
  "use server";
  try {
    await prisma.todo.update({
      where: { id: todoId },
      data: { done: !done },
    });
  } catch (error) {
    throw new Error("Failed to update todo");
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <TodoForm registrationTodo={registrationTodo} />
      <TodoList
        getTodoList={getTodoList}
        deleteTodo={deleteTodo}
        updateTodoDone={updateTodoDone}
      />
    </div>
  );
}
