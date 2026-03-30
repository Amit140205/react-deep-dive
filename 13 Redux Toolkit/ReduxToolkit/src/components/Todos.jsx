import React from "react"
import { useSelector,useDispatch } from "react-redux"
import { removeTodo,setEditTodoInfo } from "../features/todo/todoSlice"

function Todos(){

    const todos = useSelector((state)=>state.todos)
    const dispatch = useDispatch()

    return (
        <>
            <p className="text-lg my-2">My Todos</p>
            {todos.map((todo)=>(
                <li key={todo.id}>
                    <span className="mr-2">{todo.text}</span>
                    <button onClick={()=>(dispatch(setEditTodoInfo(todo.id)))}>🔄</button>
                    <button onClick={()=>(dispatch(removeTodo(todo.id)))}>❌</button>
                </li>
            ))}
        </>
    )
}

export default Todos