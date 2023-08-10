"use client";

import TodoListItem from "./TodoListItem";

type Props = {
  todoList: { id: number; text: string; done: boolean }[];
  deleteTodo: (id: number) => Promise<void>;
  updateTodoDone: (id: number, done: boolean) => Promise<void>;
  updateTodoText: (id: number, text: string) => Promise<void>;
};

export default function TodoList({
  todoList,
  deleteTodo,
  updateTodoDone,
  updateTodoText,
}: Props) {
  return (
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
  );
}
