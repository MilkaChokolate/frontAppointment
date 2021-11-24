import React from "react";

function Button(props){
    return (
        <div id='hrefAndButton'>
            <input type='submit' style={{background : props.background}} value={props.textOfButton} id=''></input>
            <p><a>{props.textOfHref}</a></p>
        </div>
    )
}

export default Button;
