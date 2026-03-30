import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile(){

    //using useContext hook to get the access the data
    const {user} = useContext(UserContext)

    if(!user){
        return (
            <h1>Please Login</h1>
        )
    }else{
        return (
            <h1>{user.username} Welcome to our webpage</h1>
        )
    }
}

export default Profile