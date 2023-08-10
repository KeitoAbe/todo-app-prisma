"use client";

import { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";

type Props = {
  getTodoList: () => Promise<{ id: number; text: string; done: boolean }[]>;
  deleteTodo: (id: number) => Promise<void>;
  updateTodoDone: (id: number, done: boolean) => Promise<void>;
  updateTodoText: (id: number, text: string) => Promise<void>;
};

export default function TodoList({
  getTodoList,
  deleteTodo,
  updateTodoDone,
  updateTodoText,
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

  useEffect(() => {
    updateTodoList();
  });

  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            updateTodoText={updateTodoText}
            updateTodoDone={updateTodoDone}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
