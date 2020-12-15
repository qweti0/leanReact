import React from 'react'

function Date(props) {
    const name = props.name;
    const id = props.id;
    return (
        <div>
            <label>{name} </label>
            <input type="date" id={id} name={id}></input>
        </div>
    );

}
export default Date