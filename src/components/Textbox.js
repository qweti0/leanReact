import React from 'react'
import { useState, useEffect } from 'react';


function Textbox (props) {
    const name = props.name;
    const id = props.id;
    const [textValue, settextValue] = useState(0);
    useEffect(() => {
        // props.value(()=>textValue);
    });

    return (
        <div>
            <label>{name}</label>
            <input type="text" id={id} onChange={()=>settextValue(this.value)}></input>
        </div>
    ); 
}

export default Textbox