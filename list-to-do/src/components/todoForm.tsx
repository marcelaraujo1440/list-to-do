import {useState} from 'react'

const TodoForm = ({addTodo}) => {
  const [value,setValue] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e)=> {
    e.preventDefault();
    if (!value || !category)return;
    addTodo(value,category);
    setCategory("");
    setValue("");
  }

  return (
    <div className='todo-form'>
      <h2>Criar tarefa</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder='Digite o titulo' onChange={(e)=> setValue(e.target.value)} value={value}/>
      <select onChange={(e)=> setCategory(e.target.value)} value={category}>
        <option value="">Selecione um Categoria</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Pessoal">Pessoal</option>
        <option value="Estudos">Estudos</option>
      </select>
      <button type='submit'>Criar Tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm
