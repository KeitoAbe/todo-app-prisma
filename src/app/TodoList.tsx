"use client";

import TodoListItem from "./TodoListItem";
import { updateTodoSortOrder } from "./actions";
import { Todo } from "@prisma/client";

type Props = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  updateTodoList: () => Promise<void>;
};

export default function TodoList({ todos, setTodos, updateTodoList }: Props) {
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
