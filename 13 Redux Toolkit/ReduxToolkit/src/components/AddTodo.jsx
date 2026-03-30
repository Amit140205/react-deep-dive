import React,{useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { addTodo,updateTodo } from "../features/todo/todoSlice";

function AddTodo(){

    const [input,setInput] = useState("")
    const dispatch = useDispatch()
    const editTodoInfo = useSelector((state)=>(state.editTodoInfo))

    useEffect(()=>{
        if(editTodoInfo){
            setInput(editTodoInfo.text)
        }else{
            setInput("")
        }
    },[editTodoInfo])

    const addTodoHandler = (e)=>{
        e.preventDefault()
        if(editTodoInfo){
            dispatch(updateTodo({id:editTodoInfo.id,text : input}))
        }else{
            dispatch(addTodo(input))
        }
        setInput("")
    }

    return (
        <form action="" onSubmit={addTodoHandler} className="h-14 my-5">
            <input type="text" placeholder="Enter your todo" className="w-1/2 h-full mr-3 rounded-md" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button type="submit" className="h-full">{editTodoInfo ? "Update Todo" : "Add Todo"}</button>
        </form>
    )
}

export default AddTodo