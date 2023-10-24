import React from "react";
import './input.css'

const Input = (props) => {
    return (
        <input type={props.type} placeholder={props.placeholder}/>
    )
}

export default Input;