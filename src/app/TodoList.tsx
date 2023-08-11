import TodoListItem from "./TodoListItem";
import { getTodoList } from "./actions";

export default async function TodoList() {
  try {
    const todoList = await getTodoList();
    return (
      <ul>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  } catch (e) {
    return <div>Todoリストの取得に失敗しました</div>;
  }
}
