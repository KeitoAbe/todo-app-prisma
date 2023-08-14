"use client";

import { FormControlLabel, FormGroup } from "@mui/material";
import styles from "./TodoListItem.module.css";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { deleteTodo, updateTodoDone, updateTodoText } from "./actions";

type Props = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
  index: number;
  move: (index: number, direction: number) => void;
  todoListLastIndex: number;
  updateTodoList: () => void;
};

export default function TodoList({
  todo,
  index,
  move,
  todoListLastIndex,
  updateTodoList,
}: Props) {
  const [isedit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState("");

  const handleClickForEditBtn = () => {
    setIsEdit(true);
    setEditText(todo.text);
  };

  const handleClickForEditDoneBtn = async () => {
    if (editText === "") return;
    try {
      await updateTodoText(todo.id, editText);
      setIsEdit(false);
      setEditText("");
      updateTodoList();
    } catch (error) {
      alert("Todoの更新に失敗しました");
    }
  };

  const handleClickForDeleteBtn = async () => {
    try {
      await deleteTodo(todo.id);
      updateTodoList();
    } catch (error) {
      alert("Todoの削除に失敗しました");
    }
  };

  const handleClickForCheckbox = async () => {
    try {
      await updateTodoDone(todo.id, !todo.done);
      updateTodoList();
    } catch (error) {
      alert("Todoの更新に失敗しました");
    }
  };

  return (
    <li key={todo.id} className={styles.todoItem}>
      <div>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={todo.done} onClick={handleClickForCheckbox} />
            }
            label={
              isedit ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  autoFocus
                />
              ) : (
                todo.text
              )
            }
          />
        </FormGroup>
      </div>
      <div className={styles.btnContainer}>
        <button disabled={index === 0} onClick={() => move(index, -1)}>
          ↑
        </button>
        <button
          disabled={index === todoListLastIndex}
          onClick={() => move(index, 1)}
        >
          ↓
        </button>
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
          onClick={handleClickForDeleteBtn}
        >
          削除
        </Button>
      </div>
    </li>
  );
}
