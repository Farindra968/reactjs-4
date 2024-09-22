import React, { useState } from 'react'

const Button = (props) => {

    const[label, setlabel]=useState("Want to Press");
    function newlabel (){
        setlabel("WOW You Done");
    }

  return (
    <div>
      <button onClick={newlabel}>{label}</button>
    </div>
  )
}

export default Button

