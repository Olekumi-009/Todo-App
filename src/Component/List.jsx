import TodoItem from "./TodoItem"
import styles from "./list.module.css"
export default function List({todos,setTodos}){
    
    return(
        <div className={styles.list}>
             {todos.map((item) => (
        <TodoItem  key={item.name} item={item} todos={todos} setTodos={setTodos} />
      ))}
        </div>
    )
}