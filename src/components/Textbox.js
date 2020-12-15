import React from "react";

function Textbox(props) {
    const name = props.name;
    const id = props.id;

    return (
        <div>
            <label>{name}</label>
            <input type="text" id={id} onChange={props.onChange}></input>
        </div>
    );
}

export default Textbox;
