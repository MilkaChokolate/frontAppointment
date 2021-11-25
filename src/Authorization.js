import React from "react";
import Header from "./Header";
import HospitalLogo from "./HospitalLogo";
import Input from "./Input";
import './Authirization.scss'

function Authorization(){
    return(
        <div className='registration'>
            <Header header='Войти в систему'></Header>
            <div className='contentOfAuthorization'>
                <HospitalLogo></HospitalLogo>
                <div id='form'>
                    <form>
                        <h1>Войти в систему</h1>
                        <Input label='Login' type='text' id='inputLogin' required='required'/>
                        <Input label='Password' type='password' id='inputPassword' required='required' pattern='"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$"'/>
                        <button type="submit">Submit</button>
                        <div id='hrefAuth'><a>Зарегистрироваться</a></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Authorization