import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
//import Game from './Game';
//import Title from "./Title"

//import App from './App';
//import Digitalclock from './Digitalclock';
//import ComB from "./ComB";


//ReactDOM.render(<App/>,document.getElementById("root"));
//ReactDOM.render(<Digitalclock/>,document.getElementById('root'));
//ReactDOM.render(<ComB/>,document.getElementById("root"));
//ReactDOM.render(<Title/>,document.getElementById("root"));
//ReactDOM.render(<Game/>,document.getElementById("root"));
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById("root"));

