import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Home.css";
import App from "./App";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import reportWebVitals from "./reportWebVitals";
import Creativity from "./Creativity";
import Meditation from "./Meditation";
import Suggestions from "./Suggestions";
import Navigation from "./Navigation";
import Chatbot from "./Chatbot";
import Comics from "./Comics";
import Sketching from "./Dancing";
import Affirmation from "./Affirmation";
import Affirmation_next from "./Affirmation_next";
import Video from "./video";
import NavBar from "react";
import Outlet from "react";
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
            
            {localStorage.getItem("userInfo") &&
                JSON.parse(localStorage.getItem("userInfo")).isLogin && (
                  <section class="leftSection">
                  <Navigation />
                  </section>
                )}
            

            <Routes>
              {localStorage.getItem("userInfo") &&
              JSON.parse(localStorage.getItem("userInfo")).isLogin ? (
                <Route path="/" element={<Home />} />
              ) : (
                <Route path="/" element={<Login />} />
              )}
              <Route path="/Home" element={<Home />} />
              <Route path="/Comics" element={<Comics />} />
              <Route path="/App" element={<App />} />
              <Route path="/Chatbot" element={<Chatbot />} />
              <Route path="/Creativity" element={<Creativity />} />
              <Route path="/Meditation" element={<Meditation />} />
              <Route path="/Suggestions" element={<Suggestions />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Sketching" element={<Sketching />} />
              <Route path="/Affirmation" element={<Affirmation />} />
              <Route path="/Affirmation_next" element={<Affirmation_next />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default main;
