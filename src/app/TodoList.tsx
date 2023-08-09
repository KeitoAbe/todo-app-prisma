"use client";

import styles from "./TodoList.module.css";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";

type Props = {
  getTodoList: () => Promise<{ id: number; text: string; done: boolean }[]>;
  deleteTodo: (id: number) => Promise<void>;
  updateTodoDone: (todoId: number, done: boolean) => Promise<void>;
};

export default function TodoList({
  getTodoList,
  deleteTodo,
  updateTodoDone,
}: Props) {
  const [todoList, setTodoList] = useState<
    { id: number; text: string; done: boolean }[]
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

  const handleClickForCheckbox = async (id: number, done: boolean) => {
    try {
      await updateTodoDone(id, !done);
    } catch (error) {
      alert("Todoの更新に失敗しました");
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
            <div>
              <Checkbox
                checked={todo.done}
                onClick={() => {
                  handleClickForCheckbox(todo.id, todo.done);
                }}
              />
              {todo.text}
            </div>
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
