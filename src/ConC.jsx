import React from "react"
import {Firstname ,Lastname} from "./App";


const ConC=()=>{

    return(<>
    <Firstname.Consumer>
    {(fname)=>{
        return(
        <Lastname.Consumer>
        {
            (lname)=>{
                return<h1>my name {fname} {lname}</h1>
            }
        }
        </Lastname.Consumer>
        )

    }}

    </Firstname.Consumer>
    </>
    )

}
export default ConC;