import React from "react";

const Sresult=(props)=>{

    const img=`https://source.unsplash.com/user/erondu/200x300?${props.name}`

    return(
        <>
        <img src={img} alt="vijay"/>
        </>
    )
}
export default Sresult;