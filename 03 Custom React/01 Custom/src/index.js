
const customRender = function(reactElement,mainContainer){

    //1st, main issue it is not modular

    // const element = document.createElement(reactElement.type)
    // element.setAttribute("href",reactElement.props.href)
    // element.setAttribute("target",reactElement.props.target)

    // element.innerHTML = reactElement.children

    // mainContainer.appendChild(element)

    //2nd 
    const element = document.createElement(reactElement.type)
    element.innerHTML = reactElement.children

    for(let prop in reactElement.props){
        console.log(prop)
        console.log(reactElement.props[prop])
        element.setAttribute(prop,reactElement.props[prop])
    }

    mainContainer.appendChild(element)

    //Note
    // reactElement.props[prop] => When you use prop inside square brackets, JavaScript treats it as a variable and retrieves the corresponding value from the props object.

    //reactElement.props.prop => Here, JavaScript treats prop as a literal key, not as a variable.
}

const reactElement = {
    type : 'a',
    props : {
        href : "https://youtube.com",
        target : "_blank"
    },
    children : "Just click"
}

const mainContainer = document.getElementById("root")

//what to render, where to render
customRender(reactElement,mainContainer)

