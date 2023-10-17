import React, { useState } from "react";
import './registration.css'
import Input from "../../utils/input/input";
import { registration } from "../../actions/user";

const Registration = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    
    return (
        <div className="registration">
            <div className="registration__header">Регистрация</div>
            <Input value={login} setValue={setLogin} type="text" placeholder="Login"/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Password"/>
            <button className="registration__btn" onClick={() => registration(login, password)}>Регистрация</button>
        </div>
    )
}

export default Registration;