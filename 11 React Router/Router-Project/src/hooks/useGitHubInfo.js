import { useEffect,useState } from "react"

function useGitHubInfo(){
    const [data,setData] = useState(0)
    useEffect(()=>{
        fetch("https://api.github.com/users/hiteshchoudhary")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            setData(res)
        })
    },[])
    return data
}

export default useGitHubInfo