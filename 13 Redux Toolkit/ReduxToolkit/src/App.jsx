// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { AddTodo, Todos } from "./components/index"
import { Provider } from 'react-redux'
import { store } from "./app/store"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learning Redux-Toolkit</h1>
      <Provider store={store}>
        <AddTodo />
        <Todos />
      </Provider>
    </>
  )
}

export default App
