import { createSlice,nanoid } from "@reduxjs/toolkit";

// nanoid : creating unique ids
// createSlice : helps you create Redux slices (reducers + actions) easily.
// https://chatgpt.com/share/6804b742-c8e4-8004-8b4a-029c92006a9c

const initialState = {
    todos : [{
        id : 1,
        text : "Hello world"
    }],
    editTodoInfo : null
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        //state :  means the current data of this slice.
        //action : instruction object sent to your reducer.
        addTodo : (state,action)=>{
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((todo)=>(todo.id!==action.payload))
        },
        updateTodo : (state,action)=>{
            state.todos = state.todos.map((todo)=>(
                todo.id === action.payload.id ? {...todo,text : action.payload.text} : todo
            ))
            state.editTodoInfo = null
        },
        setEditTodoInfo : (state,action)=>{
            state.editTodoInfo = state.todos.find((todo)=>(todo.id === action.payload))
        }
    }
})

export const {addTodo,removeTodo,updateTodo,setEditTodoInfo} = todoSlice.actions

export default todoSlice.reducer