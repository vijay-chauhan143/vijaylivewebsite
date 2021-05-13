import React from "react";
import Card from "./Card"
import Sdata from "./Sdata"

const Services=()=>{

    return (<>
        <div className="my-5">
        <h1 className="text-center">
            Our Services
        </h1>
        <div className="container-fluid">
            <div className="row">
            <div className=" col-10 mx-auto">
            <div className="mt-5">
            <div className="row">
            
            {
                Sdata.map((val,ind)=>{
                    return(
                        <Card
                            
                            imgsrc={val.imgsrc}
                            title={val.title}
                            btitle={val.btitle}
                        />
                    )
                })
            }
            </div>
            </div>
            </div>
            </div>
        </div>
         </div>
        
        
        </>
    )


}
export default Services;