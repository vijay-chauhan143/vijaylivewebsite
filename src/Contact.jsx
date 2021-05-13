import React, { useState } from "react";


const Contact=()=>{
    const [data,setData]=useState({
      fullname: "",
      phone: "",
      email: "",
      msg: "",
    });
    const change=(event)=>{

    
            const{name,value}=event.target;
            setData((preValue)=>{
              
                return{
                ...preValue,
                [name] : value,
                };
            });
        }
        const formSubmite=(e)=>{
            e.preventDefault();
            
            
                alert(`My name is ${data.fullname},My mobile number is ${data.phone},
                My email id is ${data.email} i want to say something ${data.msg}`);
            
        }
    
    return(
        <>
        <div className="container-fluid">
            <div className="row">
            <div className="col-10 mx-auto">
            <form onSubmit={formSubmite}>
        <div  className="mb-3">
  <label for="exampleFormControlInput1"  className="form-label">Full Name</label>
  <input type="text"  className="form-control" id="exampleFormControlInput1" 
  name="fullname"
  value={data.fullname}
  onChange={change}
  placeholder="Enter the name"/>
</div>
 <div  className="mb-3">
  <label for="exampleFormControlInput1"  className="form-label">Phone</label>
  <input type="number"  className="form-control" id="exampleFormControlInput1" 
  name="phone"
  value={data.phone}
  onChange={change}
  placeholder="Mobile number" />
</div>
<div  className="mb-3">
  <label for="exampleFormControlInput1"  className="form-label">Email address</label>
  <input type="email"  className="form-control" id="exampleFormControlInput1" 
  name="email"
  value={data.email}
  onChange={change}
  placeholder="name@example.com" />
</div>

<div  className="mb-3">
  <label for="exampleFormControlTextarea1"  className="form-label">Message </label>
  <textarea  className="form-control" id="exampleFormControlTextarea1" rows="3"
  name="msg"
  value={data.msg}
  onChange={change}
  ></textarea>
</div>
 <div  className="col-12">
    <button  className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
</form>
</div>
</div>
</div>
        </>
    )

}
export default Contact;