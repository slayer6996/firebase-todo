import React from 'react'
import firebase from '../firebase'

function Todo({task}){

    function deleteTask(){
        const todoRef=firebase.database().ref("todo").child(task.id)
        todoRef.remove()
    }

    function completeTask(){
        const todoRef=firebase.database().ref("todo").child(task.id)
        todoRef.update({
            complete:!task.complete
        })
    }

    return(
        <>
            <div>
                <h5 className={task.complete ? 'completed' : ''} >{task.task}</h5>
                <button onClick={deleteTask}>Delete</button>
                <button onClick={completeTask}>Completed</button>
            </div>
        </>
    )
}

export default Todo