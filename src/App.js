import React, { useState } from "react";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from 'react-router-dom';
import Info from "./components/info/Info";
import Contact from "./components/Contact/Contact";
import Home from "./components/home/Home";
// import Control from "./components/Control/Control";


const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route path="/info" element={<Info />} />

        <Route path="/contact" element={<Contact />} />

         <Route path="*" element={<Home />} />

        {/* <Route path="/Control" element={<Control />} /> */}


       

      </Routes>

    </div >
  )
}

export default App;