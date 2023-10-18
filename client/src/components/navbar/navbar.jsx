import React from "react";
import './navbar.css'
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../reducers/userReducer";

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return (
        <div className="navbar">
            <div className="container">
            <div className="navbar__header">ToDoList</div>
            {!isAuth && <div className="navbar__login"><NavLink to="/authorization">Войти</NavLink></div> }
            {!isAuth && <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div> }
            {isAuth && <div className="navbar__login" onClick={() => dispatch(logout())}>Выход</div> }
            </div>
        </div>
    );
};

export default Navbar;