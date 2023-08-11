import TodoListItem from "./TodoListItem";
import { getTodoList } from "./actions";

export default async function TodoList() {
  const todoList = await getTodoList();
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
