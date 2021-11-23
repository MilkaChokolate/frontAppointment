import React from "react";
import Header from "./Header";
import Content from "./Content";
import './Registration.scss'

function Registration(props){
    return (
        <div className='registration'>
            <Header></Header>
            <Content></Content>
        </div>
    )
}
export default Registration;