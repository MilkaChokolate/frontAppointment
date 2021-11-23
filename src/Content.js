import React from "react";
import './Content.scss'
import Vector2 from './Vector2.png'
import Input from "./Input";
import Button from "./Button";

function Content(props){
    return (
        <div className='content'>
            <div id='hospitalLogo'><img src={Vector2}/></div>
            <div>
                <form>
                    <h1>Регистрация</h1>
                    <Input lable='Login' type='text' id='inputLogin'></Input>
                    <Input lable='Password' type='password' id='inputPassword'></Input>
                    <Input lable='Repeat password' type='password' id='inputRepeatPassword'></Input>
                    <Button textOfButton='Зарегистрироваться' background='white'></Button>
                    <a>Авторизироваться</a>
                </form>
            </div>
        </div>
    )
}
export default Content;