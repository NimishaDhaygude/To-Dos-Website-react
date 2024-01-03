import React from 'react'
import TodoItem from './TodoItem';

const Todos = (props) => {
  let myStyle = {
    minHeight: "90vh",
    margin: "10px auto"
  }
  return (
    <div className="container mx-25%" style={myStyle}>
        <h4 className="my-3">Tasks to be done</h4>
        {props.todos.length === 0 ?  " No todos to display" : 
        props.todos.map((todo) => {
          return (<TodoItem todo = {todo} key={todo.sno} onDelete = {props.onDelete}/> )
        })}
    </div>
  )
}

export default Todos
