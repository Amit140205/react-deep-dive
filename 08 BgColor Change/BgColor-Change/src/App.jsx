import { useState } from 'react'


function App() {
  const [color,setColor] = useState("black")
  return (
    //The outer {} tells JSX that we are writing JavaScript inside JSX.
    // The inner {} represents a JavaScript object with CSS properties.
    <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl'>
          {/* Important thing is that onClick expects a function
              onclick={setColor} //here we can not pass the reference
              onclick={setColor("color")} //instantly executes and return a value not a function

              //correct approach
              onclick={()=>setColor("color")} //passing a callback function which ultimately returns a function
          
          */}
           <button className='outline-none px-3 py-3 bg-red-600 rounded-xl shadow-lg text-white' onClick={()=>setColor("red")}>
            Red
            </button>
           <button className='outline-none px-3 py-3 bg-green-600 rounded-xl shadow-lg text-white' onClick={()=>setColor("green")}>
            Green
            </button>
           <button className='outline-none px-3 py-3 bg-blue-600 rounded-xl shadow-lg text-white' onClick={()=>setColor("blue")}>
            Blue
            </button>
           <button className='outline-none px-3 py-3 bg-yellow-600 rounded-xl shadow-lg text-white' onClick={()=>setColor("yellow")}>
            Yellow
            </button>
           <button className='outline-none px-3 py-3 bg-purple-600 rounded-xl shadow-lg text-white' onClick={()=>setColor("purple")}>
            Purple
            </button>
           <button className='outline-none px-3 py-3 bg-pink-600 rounded-xl shadow-lg text-white' onClick={()=>setColor("pink")}>
            Pink
            </button>
           <button className='outline-none px-3 py-3 bg-black rounded-xl shadow-lg text-white' onClick={()=>setColor("black")}>
            Black
            </button>
        </div>
      </div>
    </div>
  )
}

export default App
