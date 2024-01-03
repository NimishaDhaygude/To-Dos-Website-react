import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    let submit = (e) =>{
        e.preventDefault()
        if(!title || !desc){
            alert("Please enter a valid title or description !!!")
        }
        else{
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className = "container my-2">
            <h3>Add a Todo</h3>
            <form className = "container my-2"onSubmit={submit}>
                <div className="mb-3">
                    <label for="title" className="form-label">Title here</label>
                    <input type="Text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" style={{  width: '60%' }}/>
                </div>
                <div className="mb-3">
                    <label for="desc" class="form-label">Description here</label>
                    <input type="Text-area" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" style={{  width: '60%' }} />
                </div>
                <button type="submit" className="btn btn-primary btn-sm">Add Task</button>
            </form>
        </div>
    )
}

export default AddTodo
