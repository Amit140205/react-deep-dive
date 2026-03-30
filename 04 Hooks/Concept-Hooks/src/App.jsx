//Hooks => useState
// When you update it (counter++), React has no way of knowing that the value changed.
// React only re-renders when state changes using useState or useReducer.
//React doesn’t detect changes in normal variables. Hooks like useState trigger re-renders, ensuring the UI updates properly.


import { useState } from "react";

//simply if we use the traditional method for updating the value of counter, then the value increases
//but it does not reflect on ui
//then how to use it
function App() {
  
  // let counter = 0;
  let [counter, setCounter] = useState(0) //default value as an argument
  //counter = value (set variable)
  //setCounter = is a function reference (setter function)

  function addVal(){
    // console.log(Math.random())
    // counter++
    // setCounter(counter+1)
    if(counter<20){
      setCounter(counter+1)
    }
  }

  const removeVal = ()=>{
    // setCounter(counter-1)
    if(counter!=0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Hello World || Amit</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addVal}>Add</button>
      <button onClick={removeVal}>Remove</button>
    </>
  )
}

export default App
