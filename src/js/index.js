//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import {Counter} from "./component/Counter.jsx";

// Hay que cambiar esto por que si no se dibuja cada milesima de segundo
// Asi es imposible usar funciones para los botones. (Estados?)
let seconds = 0;
setInterval(function(){
    ReactDOM.render(<Counter seconds={seconds}/>, document.querySelector("#app"));
    seconds++
},10)
