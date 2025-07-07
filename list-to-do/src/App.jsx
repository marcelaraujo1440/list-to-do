import { useState } from 'react'
import "./App.css"

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
            <div className="todo">
              <div className="content">
                <p>{todo.text}</p>
                <p className="category">
                  ({todo.category})
                </p>
              </div>
              <div>
                <button>Completar</button>
                <button>X</button>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default App
