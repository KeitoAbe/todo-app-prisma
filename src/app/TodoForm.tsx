"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import styles from "./TodoForm.module.css";
import { registerTodo } from "@/app/actions";

export default function TodoForm() {
  const router = useRouter();
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (text === "") return;

    e.preventDefault();
    try {
      await registerTodo(text);
      setText("");
      router.refresh();
    } catch (error) {
      alert("Todoの登録に失敗しました");
    }
  };

  return (
    <>
      <h1 className={styles.heading}>Prismaを使ったTodoアプリ</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Todoを入力"
          variant="standard"
          className={styles.textField}
          value={text}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          className={styles.registrationBtn}
        >
          登録
        </Button>
      </form>
    </>
  );
}
