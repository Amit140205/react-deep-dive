import { useCallback, useState, useEffect, useRef } from "react"


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  // useCallback memoizes a function so that it does not get recreated on every render
  const passwordGenerator = useCallback(function () {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }

    if (characterAllowed) {
      str += "!@#$%^&*~`()[]{}"
    }

    // generating the password
    for (let i = 0; i < length; i++) {
      let randNo = Math.floor(Math.random() * str.length)
      pass += str[randNo]
    }

    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])

  //password copying
  const copyPasswordToClipboard = useCallback(() =>{
    //for more optimize effect => actually selecting the password
    passwordRef.current?.select()

    //selecting to some range
    // passwordRef.current?.setSelectionRange(0,3)
    
    //copying the text to clipboard
    window.navigator.clipboard.writeText(password)
  },[password])

  //useEffect hook
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-xl px-4 py-3 my-8 bg-gray-700 text-orange-500">
        <h1 className='text-xl text-center text-white mb-3'>Password Generator</h1>
        <div className="rounded-xl overflow-hidden mb-4 flex">
          {/* using useRef by taking the reference */}
          <input type="text" className="w-full outline-none px-3 py-1" value={password} placeholder="password" readOnly ref={passwordRef}/>
          <button className="outline-none bg-blue-600 text-white px-3 py-1" onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="flex gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={20} value={length} className="cursor-pointer" onChange={(e)=>(setLength(e.target.value))}/>
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultValue={numberAllowed} id="numberInput" onChange={()=>(setNumberAllowed((prev)=>!prev))}/>
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultValue={characterAllowed} id="charaterInput" onChange={()=>(setCharacterAllowed((prev)=>!prev))}/>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

// The component renders for the first time.

// useCallback creates the passwordGenerator function.

// useEffect runs because it's watching passwordGenerator:

// State (password) updates, triggering a re-render.

// Because password is in useCallback dependencies, useCallback creates a new version of passwordGenerator.

// Since passwordGenerator is new, useEffect runs again.

// The cycle keeps repeating infinitely, continuously generating new passwords.
