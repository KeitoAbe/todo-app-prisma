"use client";

import { use, useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";
import { getTodoList, updateTodoSortOrder } from "./actions";
import { Todo } from "@prisma/client";

type Props = {
  todoList: Todo[];
};

export default function TodoList({ todoList }: Props) {
  const [todos, setTodos] = useState(todoList);
  useEffect(() => {
    setTodos(todoList);
  }, [todoList]);

  const updateTodoList = async () => {
    try {
      const todoList = await getTodoList();
      setTodos(todoList);
    } catch (error) {
      alert("Todoリストの取得に失敗しました");
    }
  };

  const move = (index: number, direction: number) => {
    const newArray = [...todos];
    const temp = newArray[index];
    newArray[index] = newArray[index + direction];
    newArray[index + direction] = temp;
    setTodos(newArray);
    newArray.map((todo, index) => {
      updateTodoSortOrder(todo.id, index);
    });
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          index={index}
          move={move}
          todoListLastIndex={todos.length - 1}
          updateTodoList={updateTodoList}
        />
      ))}
    </ul>
  );
}
