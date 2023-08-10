import TodoListItem from "./TodoListItem";

type Props = {
  getTodoList: () => Promise<
    {
      id: number;
      text: string;
      done: boolean;
    }[]
  >;
  deleteTodo: (id: number) => Promise<void>;
  updateTodoDone: (id: number, done: boolean) => Promise<void>;
  updateTodoText: (id: number, text: string) => Promise<void>;
};

export default async function TodoList({
  getTodoList,
  deleteTodo,
  updateTodoDone,
  updateTodoText,
}: Props) {
  const todoList = await getTodoList();
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
