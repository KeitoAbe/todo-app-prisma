import styles from "./page.module.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { getTodoList } from "./actions";

export default async function Home() {
  try {
    const todoList = await getTodoList();
    return (
      <div className={styles.container}>
        <TodoForm />
        <TodoList todoList={todoList} />
      </div>
    );
  } catch (e) {
    return <div>Todoリストの取得に失敗しました</div>;
  }
}
