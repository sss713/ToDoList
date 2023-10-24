import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from './components/registration/registration';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route path="/registration" element={<Registration/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
