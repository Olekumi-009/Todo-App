import { useState } from 'react'
import Form from './Form'
import List from './List'

export default function Todo () {
  const [todos, setTodos] = useState([])
  return (
    <div>
       <Form key={todos} todos={todos} setTodos={setTodos}/>
       <List todos={todos} setTodos={setTodos}/>
    </div>
  )
}
