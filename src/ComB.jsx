import React, { useContext } from "react"
import {Firstname,Lastname} from "./App"

const ComB=()=>{
    const fname=useContext(Firstname);
    const lname=useContext(Lastname);

    return(
        <h1>MY name {fname} {lname}</h1>
    )
}


export default ComB;