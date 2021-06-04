import React from "react";
import "./style.css";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";
import favourite, {fav1, fav2} from "./quote.js";




ReactDOM.render(
  <div>
  <h1 style = {{color: "brown",  backgroundColor: "black"}}> Blog No. {favourite} </h1>
  <h1 style = {{backgroundColor: "orange"}} fonttext ={"Serif"}> {fav1()}</h1>
  <h3 fonttext = {" red serif"}> {fav2()}</h3>
  
   <Heading/>
  <List/>
  </div>
  ,
  document.getElementById("root")
);
 
  

