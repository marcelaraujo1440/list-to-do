import { useState } from 'react'
import "./App.css"
import Todo from './components/todo'
import TodoForm from './components/todoForm'

function App() {
 const [todos, setTodos] = useState([
    {
      id:1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ])

  return (
    //para usar o codigo de java script no jsx, tem que usar as chaves
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) =>( //percorreu o array inteiro com essa função (.map)
            <Todo todo={todo}/>
        ))}
      </div>
      <TodoForm />
    </div>
  )
}

export default App
