"use client";

import styles from "./page.module.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

type Props = {
  getTodoList: () => Promise<{ id: number; text: string | null }[]>;
  registrationTodo: (text: string) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
};

export default function TodoList({
  getTodoList,
  registrationTodo,
  deleteTodo,
}: Props) {
  const [todoList, setTodoList] = useState<
    { id: number; text: string | null }[]
  >([]);
  const [text, setText] = useState("");

  const handleChange = (e: { target: { value: string } }) => {
    setText(e.target.value);
  };

  const updateTodoList = async () => {
    try {
      const data = await getTodoList();
      setTodoList(data);
    } catch (error) {
      alert("Todoリストの取得に失敗しました");
    }
  };

  const handleClickForRegistrationBtn = async () => {
    if (text === "") return;

    try {
      await registrationTodo(text);
      setText("");
      await updateTodoList();
    } catch (error) {
      alert("Todoの登録に失敗しました");
    }
  };

  const handleClickForDeleteBtn = async (id: number) => {
    try {
      await deleteTodo(id);
      await updateTodoList();
    } catch (error) {
      alert("Todoの削除に失敗しました");
    }
  };

  useEffect(() => {
    updateTodoList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        onClick={handleClickForRegistrationBtn}
      >
        登録
      </Button>
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
