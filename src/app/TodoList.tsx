"use client";

import styles from "./TodoList.module.css";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

type Props = {
  getTodoList: () => Promise<{ id: number; text: string | null }[]>;
  deleteTodo: (id: number) => Promise<void>;
};

export default function TodoList({ getTodoList, deleteTodo }: Props) {
  const [todoList, setTodoList] = useState<
    { id: number; text: string | null }[]
  >([]);

  const updateTodoList = async () => {
    try {
      const data = await getTodoList();
      setTodoList(data);
    } catch (error) {
      alert("Todoリストの取得に失敗しました");
    }
  };

  const handleClickForDeleteBtn = async (id: number) => {
    try {
      await deleteTodo(id);
    } catch (error) {
      alert("Todoの削除に失敗しました");
    }
  };

  useEffect(() => {
    updateTodoList();
  });

  return (
    <div>
      <ul className={styles.todoList}>
        {todoList.map((todo) => (
          <li key={todo.id} className={styles.todoItem}>
            {todo.text}
            <Button
              variant="outlined"
              className={styles.deleteBtn}
              color="error"
              onClick={() => handleClickForDeleteBtn(todo.id)}
            >
              削除
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
