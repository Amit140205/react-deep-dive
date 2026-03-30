import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// function MyApp(){
//   return (
//     <>
//     <div>
//       <h1>Name : Amit</h1>
//     </div>
//     </>
//   )
// }

//Also can not run this => there is a particular format that the render function excepts
//though ultimately the HTML is parsed and converted into this type of object

// function customRender (reactElement,mainContainer){
//   const element = document.createElement(reactElement.type)
//     element.innerHTML = reactElement.children

//     for(let prop in reactElement.props){
//         console.log(prop)
//         console.log(reactElement.props[prop])
//         element.setAttribute(prop,reactElement.props[prop])
//     }

//     mainContainer.appendChild(element)
// }

//but if we are elementing this
// const anotherElement = (
//   <a href='https://youtube.com' target='blank'>click on it</a>
// )
//now lets decode the function that we are passing as a reference inside the render function
//it simply returns HTML code
//that's why we are making "anotherElement" like this


// now we want to create element by using react
const variable = "Amit"
const reactElement = React.createElement(
  'a',
  {href : "https://youtube.com", target : "_blank"},
  "click on me",
  variable
)
//how to pass the variable

createRoot(document.getElementById('root')).render(
  
    // <MyApp />
    // MyApp => can not run

    //not a best practice
    // MyApp() //overrall it is nothing but a function that returns some HTML, so it executes
    
    // anotherElement
    reactElement

    // <App/>
)
