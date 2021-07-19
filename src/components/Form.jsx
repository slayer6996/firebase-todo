import React, { useState } from 'react'
import firebase from '../firebase'

function Form(){
    const [task, setTask]=useState("")

    function handleChange(event){
        setTask(event.target.value)
    }

    function handleClick(){
        const todoRef=firebase.database().ref("todo")
        const todo={
            task,
            complete:false
        }
        todoRef.push(todo)
        setTask("")
    }

    return(
        <>
            <input type="text" onChange={handleChange} value={task}/>
            <button onClick={handleClick}>Add task</button>
        </>
    )
}

export default Form