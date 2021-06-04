import React from "react";



const state = {

  color: 'orange',
  backgroundColor: 'black',
  fontfamily: 'papyrus'
}


function Heading() {
  return (<h1 className = "color" contentEditable="true" style={state}>Every things to know about for being Mentally Strong
 
    </h1> );
}

export default Heading;