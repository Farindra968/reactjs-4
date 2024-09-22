import React, { useState } from 'react'

const ButtonTwo = (props) => {

    const[name, setname]=useState("Click me to know my name");

    function myname(){
        setname("Farindra Bahadur Bhandari");
    }
  return (
    <div>
      <button onClick={myname}> {name}</button>
    </div>
  )
}

export default ButtonTwo
