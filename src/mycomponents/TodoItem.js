import React, { useState } from 'react';
import '../App.css';

const TodoItem = ({ todo, onDelete }) => {

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };




  return (
    <div class=" card m-3" style={{  border: "5px solid #D0A2F7" , width: '60%'}}>
      <div class="card-header">
        My task
      </div>
      <div class="card-body ">
        <h5 class={isToggled ? 'textUnderline' : ''}>{todo.title}</h5>
        <p class={isToggled ? 'textUnderline' : ''} style={{ fontFamily : 'Roboto Condensed'}}>{todo.desc}</p>
        <button className="btn btn-sm btn-outline-danger mx-3" onClick={() => { onDelete(todo) }}>Delete</button>



        status: <button
          className={`btn btn-sm  btn-outline-primary mx-1 ${isToggled ? 'toggled' : ''}`}
          onClick={handleToggle}
        >
          {isToggled ? 'Completed' : 'Incomplete'}
        </button>

      </div>
    </div>


    /*<div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
      <hr />
    </div>*/
  )
}
export default TodoItem

