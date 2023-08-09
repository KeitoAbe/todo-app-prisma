"use client";

import styles from "./TodoForm.module.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useState } from "react";

type Props = {
  registrationTodo: (text: string) => Promise<void>;
};

export default function TodoList({ registrationTodo }: Props) {
  const [text, setText] = useState("");

  const handleChange = (e: { target: { value: string } }) => {
    setText(e.target.value);
  };

  const handleClick = async () => {
    if (text === "") return;

    try {
      await registrationTodo(text);
      setText("");
    } catch (error) {
      alert("Todoの登録に失敗しました");
    }
  };

  return (
    <div>
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
    </div>
  );
}
