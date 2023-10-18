import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from './components/registration/registration';
import Authorization from './components/authorization/authorization';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <Routes>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/authorization" element={<Authorization/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
