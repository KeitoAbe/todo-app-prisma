"use client";

import styles from "./page.module.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { getTodoList } from "./actions";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { todosState } from "./utils/atom";

export default function Home() {
  const setTodos = useSetRecoilState(todosState);

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
      <TodoList updateTodoList={updateTodoList} />
    </div>
  );
}
