import React from 'react'
// import { useState } from 'react';


function Dropdown(props) {
    // console.log(props);
    const options = props.options;
    // const [open, setOpen]  = useState(0);
    const name = props.name;
    const id= props.id;
    return (
        <div>
            <label>{name}</label>
            <select id={id}>
                {options.map((item) => (
                    <option key={item.id} value= {item.id}>{item.title}</option>
                ))}
            </select>
        </div>
    );
}


export default Dropdown