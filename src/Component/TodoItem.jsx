import styles from "./todo.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("delete  clicked", item);
    setTodos(todos.filter(todo => todo !== item));
  }
  return (
    <div className={styles.todoitemname}>
      <div>
      <span>
        {item.name}
        </span>
        <span>
          <button onClick={() => handleDelete(item)} className={styles.delbtn}>
            DELETE
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
