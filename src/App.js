import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm/Loginform.jsx';
import Navbar from './Components/NavBar/Navbar.js';
import About from './Components/LoginForm/About.jsx';
import Services from './Components/LoginForm/Services.jsx';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    // <React.Fragment>
    //   <div>
    //     <Navbar/>
    //     {/* <LoginForm/> */}
    //   </div>
    // </React.Fragment>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
