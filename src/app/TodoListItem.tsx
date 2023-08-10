"use client";

import styles from "./TodoListItem.module.css";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

type Props = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
  handleClickForCheckbox: (id: number, done: boolean) => void;
  handleClickForDeleteBtn: (id: number) => void;
};

export default function TodoList({
  todo,
  handleClickForCheckbox,
  handleClickForDeleteBtn,
}: Props) {
  return (
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
      <div className={styles.btnContainer}>
        <Button variant="outlined" className={styles.editBtn}>
          編集
        </Button>
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
