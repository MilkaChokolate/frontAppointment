import React from "react";
import Header from "./Header";
import './Registration.scss'
import Vector2 from "./Vector2.png";
import FormComponent from "./FormComponent";
import HospitalLogo from "./HospitalLogo";
import Input from "./Input";
import Button from "./Button";

function Registration(props){
    return (
        <div className='registration'>
            <Header header='Зарегистрироваться'></Header>
            <div className='content'>
                <HospitalLogo></HospitalLogo>
                <div id='form'>
                    <form>
                        <h1>Регистрация</h1>
                        <Input lable='Login' type='text' id='inputLogin'></Input>
                        <Input lable='Password' type='password' id='inputPassword'></Input>
                        <Input lable='Password' type='password' id='inputRepeatPassword'></Input>
                        <Button textOfButton='Зарегистрироваться' background='white' float='right' textOfHref='Авторизироваться'></Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Registration;