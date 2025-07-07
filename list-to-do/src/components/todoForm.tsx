import React from 'react'

const todoForm = () => {
  return (
    <div className='todo-form'>
      <h2>Criar tarefa</h2>
      <form ><input type="text" placeholder='Digite o titulo'/></form>
      <select>
        <option value="">Selecione um Categoria</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Pessoal">Pessoal</option>
        <option value="Estudos">Estudos</option>
      </select>
      <button type='submit'>Criar Tarefa</button>
    </div>
  )
}

export default todoForm
