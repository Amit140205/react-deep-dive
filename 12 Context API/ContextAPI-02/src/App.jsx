import { ThemeProvider } from "./contexts/theme"
import { useState,useEffect } from "react"
import Button from "./components/Button"
import Card from "./components/Card"


function App() {

  const [themeMode,setThemeMode] = useState("light")

  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  const lightTheme = ()=>{
    setThemeMode("light")
  }

  useEffect(()=>{
    //first remove whatever present light or dark
    document.querySelector("html").classList.remove("light","dark")
    //then add
    document.querySelector("html").classList.add(themeMode)
  },[themeMode])

  return (
    <>
      <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* Button */}
              <Button/>
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* Card */}
              <Card/>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
