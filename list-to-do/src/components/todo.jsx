import React from 'react'

const todo = ({todo, removeTodos, completeTodos}) => {
  return (
    <div className="todo"
    style={{textDecoration: todo.isCompleted ? "line-through": ""}}>
        <div className="content">
            <p>{todo.text}</p>
            <p className="category">
                ({todo.category})
            </p>
        </div>
        <div>
            <button className='complete' onClick={()=> completeTodos(todo.id)}>Completar</button>
            <button className='remove'  onClick={() => removeTodos(todo.id)}>X</button>
        </div>
    </div>
  )
}

export default todo
