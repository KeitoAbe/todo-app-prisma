"use client";

import styles from "./TodoListItem.module.css";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

type Props = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
  handleClickForCheckbox: (id: number, done: boolean) => void;
  handleClickForDeleteBtn: (id: number) => void;
  updateTodoText: (todoId: number, text: string) => Promise<void>;
};

export default function TodoList({
  todo,
  handleClickForCheckbox,
  handleClickForDeleteBtn,
  updateTodoText,
}: Props) {
  const [isedit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState("");

  const handleClickForEditBtn = () => {
    setIsEdit(true);
    setEditText(todo.text);
  };

  const handleClickForEditDoneBtn = async () => {
    setIsEdit(false);
    setEditText("");
    try {
      await updateTodoText(todo.id, editText);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li key={todo.id} className={styles.todoItem}>
      <div>
        <Checkbox
          checked={todo.done}
          onClick={() => {
            handleClickForCheckbox(todo.id, todo.done);
          }}
        />
        {isedit ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          todo.text
        )}
      </div>
      <div className={styles.btnContainer}>
        {isedit ? (
          <Button
            variant="contained"
            className={styles.editBtn}
            onClick={handleClickForEditDoneBtn}
          >
            完了
          </Button>
        ) : (
          <Button
            variant="outlined"
            className={styles.editBtn}
            onClick={handleClickForEditBtn}
          >
            編集
          </Button>
        )}

        <Button
          variant="outlined"
          className={styles.deleteBtn}
          color="error"
          onClick={() => handleClickForDeleteBtn(todo.id)}
        >
          削除
        </Button>
      </div>
    </li>
  );
}
