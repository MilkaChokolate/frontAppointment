import React from "react";
import Input from "./Input";
import Button from "./Button";
import './FormComponent.scss'

function FormComponent(props){
    return (
        <div id='form'>
            <form>
                <h1>{props.textOfForm}</h1>
                <Input lable='Login' type='text' id='inputLogin'></Input>
                <Input lable='Password' type='password' id='inputPassword'></Input>
                <Input lable='Password' type='password' id='inputRepeatPassword'></Input>
                <Button textOfButton='Зарегистрироваться' background='white' float='right' textOfHref='Авторизироваться'></Button>
            </form>
        </div>
    )
}
export default FormComponent;