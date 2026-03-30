// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  const img = {
    userName1 : "Amit",
    userName2 : "Soumya",
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>TailWind CSS</h1>
      <Card name = {img.userName1}/>
      <Card name = {img.userName2}/>
      {/* here we are not passing a props */}
      {/* for that it shows anonymous => name || "anonymous"*/}
      <Card/>
    </>
  )
}

export default App
