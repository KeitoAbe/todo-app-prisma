"use client";

import styles from "./page.module.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

type Props = {
  getTodoList: () => Promise<{ id: number; text: string | null }[]>;
  registrationTodo: (text: string) => Promise<void>;
};

export default function TodoList({ getTodoList, registrationTodo }: Props) {
  const [todoList, setTodoList] = useState<
    { id: number; text: string | null }[]
  >([]);

  const [text, setText] = useState("");

  const handleChange = (e: { target: { value: string } }) => {
    setText(() => e.target.value);
  };

  const handleClick = async () => {
    await registrationTodo(text);
    setText("");
    const data = await getTodoList();
    setTodoList(() => data);
  };

  useEffect(() => {
    const fetchTodoList = async () => {
      const data = await getTodoList();
      setTodoList(() => data);
    };
    fetchTodoList();
  }, [getTodoList, registrationTodo]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Prismaを使ったTodoアプリ</h1>
      <TextField
        id="standard-basic"
        label="Todoを入力"
        variant="standard"
        className={styles.textField}
        value={text}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        className={styles.registrationBtn}
        onClick={handleClick}
      >
        登録
      </Button>
      <ul className={styles.todoList}>
        {todoList.map((todo) => (
          <li key={todo.id} className={styles.todoItem}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
