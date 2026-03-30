import React from "react";
import { useLoaderData } from "react-router-dom";
// import useGitHubInfo from "../../hooks/useGitHubInfo";

function GitHub(){

    //using hooks => this is one way of doing things
    // const info = useGitHubInfo()

    // or

    // loader-hook
    const info = useLoaderData()
    // console.log(info)
    return (
        <div>
            <h1 className="p-4 m-6 bg-slate-700 text-white text-3xl text-center">GitHub Followers : {info.followers}</h1>
            <img src={info.avatar_url} alt="GitPicture" srcset="" className="mx-auto my-4"/>
        </div>
    )
}

export default GitHub

export const githubInfoLoader = async ()=>{
    const res = await fetch("https://api.github.com/users/hiteshchoudhary")
    return res.json()
}