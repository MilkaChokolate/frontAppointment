import React from "react";
import './Input.scss'

function Input(props){
    return(
        <div>
            <p>{props.lable}:</p>
            <input type={props.type} placeholder={props.lable} id={props.id}/>
        </div>
    )
}

export default Input;