import React from "react";
import Vector from './Vector.png'
import './Header.scss'

function Header(props){
    return (
        <div className='header'>
            <img src={Vector} id='logo'/>
            <h1>{props.header}</h1>
        </div>
    )
}
export default Header;