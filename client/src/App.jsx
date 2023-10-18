import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from './components/registration/registration';
import Authorization from './components/authorization/authorization';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './actions/user';


function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(auth())
  }, [])

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <div className="wrap">
          {!isAuth && 
          <Routes>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/authorization" element={<Authorization/>}/>
          </Routes>
          }
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
