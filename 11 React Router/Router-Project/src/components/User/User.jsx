import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userId} = useParams()
    return (
        <div>
            <h1 className="p-4 m-6 bg-slate-700 text-white text-3xl text-center">User : {userId}</h1>
        </div>
    )
}

export default User