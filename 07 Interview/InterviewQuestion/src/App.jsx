import { useState } from "react"

function App() {
  const [counter,setCounter] = useState(0);

  const addVal = ()=>{
    // setCounter(counter+1)
    //now the question in the interview is that
    //if we include 4 setCounter function one after another then what happens

    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    //answer : Each setCounter(counter + 1) is referring to the same state value (counter) 
    // that was initially read when the function started executing. 
    // React does not update the state immediately; instead, it schedules updates.
    //If we update the state multiple times using setCounter(counter + 1), React batches them and applies only the last one.

    //If we want to update states like this

    setCounter((prevCounter)=>(prevCounter+1))
    setCounter((prevCounter)=>(prevCounter+1))
    setCounter((prevCounter)=>(prevCounter+1))
    setCounter((prevCounter)=>(prevCounter+1))
    //Now, React correctly processes each update separately, and the counter will increase by 4 as expected.

    // https://chatgpt.com/share/67e93e5d-be44-8004-bcd2-416ecdffe344
  }

  const removeVal = ()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Interview Question</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addVal}>Add Value</button>
      <button onClick={removeVal}>Remove Value</button>
    </>
  )
}

export default App
