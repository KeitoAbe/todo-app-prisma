import styles from "./page.module.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default async function Home() {
  return (
    <div className={styles.container}>
      <TodoForm />
      <TodoList />
    </div>
  );
}
