import React from "react";
import Header from "./Header";
import HospitalLogo from "./HospitalLogo";
import FormComponent from "./FormComponent";
import Input from "./Input";
import Button from "./Button";

function Authorization(){
    return(
        <div className='registration'>
            <Header header='Зарегистрироваться'></Header>
            <div className='content'>
                <HospitalLogo></HospitalLogo>
                <div id='form'>
                    <form>
                        <h1>Войти в систему</h1>
                        <Input lable='Login' type='text' id='inputLogin'></Input>
                        <Input lable='Password' type='password' id='inputPassword'></Input>
                        <Input lable='Password' type='password' id='inputRepeatPassword'></Input>
                        <Button textOfButton='Войти в систему' background='white' float='right' textOfHref='Зарегистрироваться'></Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Authorization