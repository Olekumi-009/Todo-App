import styles from "./form.module.css"
import { useState } from "react"
export default function Form({ todos,setTodos}) {
  // const [todo, setTodo] = useState('')
 const [todo, setTodo] = useState({name:'', done:false})
  

  function submit (e) {
    e.preventDefault(e)
    setTodos([...todos, todo])
    setTodo({name:'', done:false})
  }
    return(
    <div >
      <form className={styles.todoform}   onSubmit={e => submit(e)}>
      <div className={styles.flextodo}>
      
        <input className={styles.todoinput}
          onChange={e => setTodo({name:e.target.value,done:false})}
          type="text"  placeholder="Enter Todo Item"
          value={todo.name}
        />
        <button  className={styles.todobutton} type="submit">Add</button>
      </div>
      </form>
    </div>
  );
}
