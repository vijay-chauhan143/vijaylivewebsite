import React, { createContext, useEffect, useState } from "react"
import About from "./About";
import Contact from "./Contact";
import Services from "./Services"
import Home from "./Home";

import {Redirect, Route, Router,Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./Search";

const App=()=>{
    

   
return(
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/About" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/services" component={Services}/>
    <Redirect path="/"/>
    </Switch>
    </>
)
}
export default App;
//export {Firstname,Lastname};