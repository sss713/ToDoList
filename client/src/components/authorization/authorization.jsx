import React, { useState } from "react";
import './authorization.css'
import Input from "../../utils/input/input";
import { authorization } from "../../actions/user";

const authorization = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    
    return (
        <div className="authorization">
            <div className="authorization__header">Авторизация</div>
            <Input value={login} setValue={setLogin} type="text" placeholder="Login"/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Password"/>
            <button className="authorization__btn" onClick={() => authorization(login, password)}>Войти</button>
        </div>
    )
}

export default authorization;