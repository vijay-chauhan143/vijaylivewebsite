import React, { useState } from "react";
import Sresult from "./Sresult";

const Search=()=>{
    const [imgs,setimg]=useState();
    const inputEvent=(event)=>{

        const data= event.target.value;
        setimg(data);

    }
    

    return(
        <>
        <center>
        <input type="text" placeholder="here Searching" onChange={inputEvent} value={imgs}/>
        <br/>
         {imgs===""?null:<Sresult name={imgs}/>}
        </center>
        </>
    )

}
export default Search;