import React from "react";

function Button(props){
    return (
        <div>
            <button style={{background : props.background}}>{props.textOfButton}</button>
        </div>
    )
}

export default Button;
