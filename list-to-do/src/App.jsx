import { useState } from 'react'
import "./App.css"
import Todo from './components/todo'
import TodoForm from './components/todoForm'
import Search from './components/Search'
import Filter from './components/Filter'

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
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")
  const[sort,setSort] =useState("Asc")
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
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
        //filtro
        .filter((todo)=> 
          filter === "All" ? true 
        : filter === "Completed" ? todo.isCompleted 
        : !todo.isCompleted)
        //busca
        .filter((todo)=>
        todo.text.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a,b) =>
        sort === "Asc"
         ? a.text.localeCompare(b.text)
         : b.text.localeCompare(a.text)
      )
        //percorre o array inteiro com essa função (.map)
        .map((todo) =>( 
            <Todo key={todo.id} todo={todo}  removeTodos={removeTodos} completeTodos={completeTodos} />
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
