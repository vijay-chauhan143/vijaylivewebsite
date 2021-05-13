import { SettingsInputComponent } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

const Title=()=>{
    const [num,setnum]=useState(0);
    useEffect(()=>{
        document.title=`i am clicked ${num} times`;
    })


return(
    <button onClick={()=>{
        setnum(num+1);
        
    }}>Click me {num}</button>
)

}
export default Title;