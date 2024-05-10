import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Home.css";
import App from "./App";
import Login from "./Login";
import Home from "./Home";
import Navigation from "./Navigation"
import Comics from "./Comics";


import logo from "../src/assets/logo.jpg";
import { useState } from "react";
import logo2 from "../src/assets/logo2.png";
const main = () => {

  if (
    localStorage.getItem("userInfo") &&
    !JSON.parse(localStorage.getItem("userInfo")).isLogin
  ) {
    localStorage.setItem("userInfo", JSON.stringify({ isLogin: false }));
  }

  function logoutUser() {
    localStorage.setItem("userInfo", JSON.stringify({ isLogin: false }));
    
  }
  return (
    <>
      <Router>
        <div class="bgImage">
          <div class="header">
            <div class="Logo"></div>
            {localStorage.getItem("userInfo") &&
            JSON.parse(localStorage.getItem("userInfo")).isLogin && (
              <div class="main_data">
            
              <div class="he1">
                <img src={logo2} height="100vh" />
              </div>
              <div class="he">neuroNIRAVANA</div>
            </div>
            )}

            
            <div class="user_photo Logo"></div>
          </div>

          <div class="sectionContainer">
            <section class="leftSection">
            {/* {localStorage.getItem("userInfo") &&
                JSON.parse(localStorage.getItem("userInfo")).isLogin && (
                  <Navigation />
                )} */}
                <Navigation />
            </section>

            <Routes>
              {localStorage.getItem("userInfo") &&
              JSON.parse(localStorage.getItem("userInfo")).isLogin ? (
                <Route path="/" element={<Home />} />
              ) : (
                <Route path="/" element={<Home />} />
              )}
              <Route path="/Home" element={<Home />} />
              <Route path="/Comics" element={<Comics />} />          
              
              
              
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default main;
