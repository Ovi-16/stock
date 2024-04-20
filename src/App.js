import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm/Loginform.jsx';
import {Navbar} from './Components/NavBar/Navbar.jsx';
import {About} from './Components/LoginForm/About.jsx';
import {Register} from './Components/LoginForm/register.jsx';
import { Route, Routes } from "react-router-dom";
import Loginform from './Components/LoginForm/Loginform.jsx';
function App() {
  return (
    // <React.Fragment>
    //   <div>
    //     <Navbar/>
    //     {/* <LoginForm/> */}
    //   </div>
    // </React.Fragment>
    <div className="App">
      
      <Loginform/>
    </div>
  );
}

export default App;
