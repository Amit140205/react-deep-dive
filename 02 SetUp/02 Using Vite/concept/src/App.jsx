
import Intro from "./intro"

function App() {
  
//but the main catch is that we can only return one element from JSX,
//so if we have to send more than one element than we have to wrap it up
//by using <div> or whatever
//if we are using this : <></> (empty) then it is called fragment
  return (
    <>
    <h1>Hello World || Amit</h1>
    <Intro/>
    </>
  )
}

export default App
