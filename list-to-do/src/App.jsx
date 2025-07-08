import { useState } from 'react'
import "./App.css"
import Todo from './components/todo'
import TodoForm from './components/todoForm'
import todo from './components/todo'

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
  const addTodo = (text,category) =>{
    const newTodos = [...todos,{
      id: Math.floor(Math.random() *10000),
      text,
      category,
      isCompleted : false,
    },
  ];
    setTodos(newTodos);
  };

  const removeTodos = (id) =>{
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos)
  };
  const completeTodos = (id) =>{
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }
  return (
  
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) =>( //percorreu o array inteiro com essa função (.map)
            <Todo key={todo.id} todo={todo}  removeTodos={removeTodos} completeTodos={completeTodos} />
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
