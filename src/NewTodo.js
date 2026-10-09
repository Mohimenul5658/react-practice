import React from 'react'

const NewTodo = (props) => {
    props.onTodo({Title:"I am new todo"})
  return (
    <div>NewTodo</div>
  )
}

export default NewTodo