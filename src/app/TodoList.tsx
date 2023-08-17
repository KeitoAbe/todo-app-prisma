"use client";

import { useRecoilState } from "recoil";
import TodoListItem from "./TodoListItem";
import { updateTodoSortOrder } from "./actions";
import { todosState } from "./utils/atom";

type Props = {
  updateTodoList: () => Promise<void>;
};

export default function TodoList({ updateTodoList }: Props) {
  const [todos, setTodos] = useRecoilState(todosState);
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
          updateTodoList={updateTodoList}
        />
      ))}
    </ul>
  );
}
