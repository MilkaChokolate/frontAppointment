import React, {useEffect, useState} from "react";
import Header from "./Header";
import './Registration.scss'
import HospitalLogo from "./HospitalLogo";
import Input from "./Input";

function Registration(props){
    const [formState, setFormState] = useState({});
    const [formErrors, setFormErrors] = useState({})



    const handleInputChange = (e) => {
        const {value} = e.target;
        const name = e.target.getAttribute('name');
        console.log(value, name);
        setFormState({...formState, [name]: value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        e.stopPropagation();

        console.log(formState)
    }

    return (
        <div className='registration'>
            <Header header='Зарегистрироваться'></Header>
            <div className='contentOfRegistration'>
                <HospitalLogo></HospitalLogo>
                <div id='form'>
                    <form onSubmit={handleSubmit}>
                        <h1>Регистрация</h1>
                        <Input label="Username" type='text' onChange={handleInputChange} value={formState.username || ''}  name="username" required/>
                        <Input label='Password' type='password' onChange={handleInputChange}  name="password"  required/>
                        <Input label='Repeat password' type='password'  onChange={handleInputChange}  name="re_password"   required/>
                        <button type='submit'>Зарегистрироваться</button>
                        <div id='hrefReg'><a>Авторизироваться</a></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Registration;