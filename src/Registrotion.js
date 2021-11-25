import React, {useState} from "react";
import Header from "./Header";
import './Registration.scss'
import HospitalLogo from "./HospitalLogo";
import Input from "./Input";

function Registration(props){
    const [reg,regState] = useState();
    return (
        <div className='registration'>
            <Header header='Зарегистрироваться'></Header>
            <div className='contentOfRegistration'>
                <HospitalLogo></HospitalLogo>
                <div id='form'>
                    <form>
                        <h1>Регистрация</h1>
                        <Input label="Username" type='text' required/>
                        <Input label='Password' type='password' required/>
                        <Input label='Repeat password' type='password'  required/>
                        <button type='submit' onClick={() => regState()}>Зарегистрироваться</button>
                        <div id='hrefReg'><a>Авторизироваться</a></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Registration;