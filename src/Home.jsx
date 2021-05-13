import React from "react";
import { NavLink} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Common from "./Common"

const Home=()=>{

    return (
        <>
        <Common name="Grow your business with" visit="/services" btnname="Get Started"/> 
        </>
    )

    }
export default Home;