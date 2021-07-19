import React, { useEffect, useState } from 'react'
import firebase from '../firebase'
import Todo from './Todo'

function TodoList(){
    const [todoList,setTodoList]=useState()

    useEffect(() => {
        const todoRef=firebase.database().ref("todo")
        todoRef.on('value', (snapshot) => {
            const tasks=snapshot.val()
            const taskList=[]
            for(let id in tasks){ 
                taskList.push({id, ...tasks[id]})
            }
            setTodoList(taskList)
        })
    },[])

    return(
        <>
            <div>
                {
                    todoList && todoList.map(task => <Todo key={task.id} task={task} />)
                }
            </div>
        </>
    )
}

export default TodoList