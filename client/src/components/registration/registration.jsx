import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/input.jsx";
import {registration} from "../../actions/user";

const Registration = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='authorization'>
            <div className="authorization__header">Регистрация</div>
            <Input value={login} setValue={setLogin} type="text" placeholder="Введите email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
            <button className="authorization__btn" onClick={() => registration(email, password)}>Зарегистрироваться</button>
        </div>
    );
};

export default Registration;