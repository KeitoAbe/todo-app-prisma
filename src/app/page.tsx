"use client";

import styles from "./page.module.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { getTodoList } from "./actions";
import { useEffect, useState } from "react";
import { Todo } from "@prisma/client";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    updateTodoList();
  }, []);

  const updateTodoList = async () => {
    try {
      const todoList = await getTodoList();
      setTodos(todoList);
    } catch (error) {
      alert("Todoリストの取得に失敗しました");
    }
  };

  return (
    <div className={styles.container}>
      <TodoForm updateTodoList={updateTodoList} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        updateTodoList={updateTodoList}
      />
    </div>
  );
}
