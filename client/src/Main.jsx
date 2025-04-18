import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
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

import Player from "./Player";
import Player1 from "./Player1";
import Player3 from "./Player3";
import Good_Option from "./Good_Option";

import Video from "./Video";
import Map from "./Map";
import Map1 from "./Map1";
import Home_page from "./Home_page";
import Report from "./Report";
import NavBar from "react";
import Outlet from "react";
import logo from "../src/assets/logo.jpg";
import { useState, useEffect } from "react";
import logo2 from "../src/assets/logo2.png";
const Main = () => {
  let login = 0;
  const [menuOpen, setMenuOpen] = useState(true);
  // const location = useLocation();
  // const [showLeftSection, setShowLeftSection] = useState(true);

  // useEffect(() => {
  //   setShowLeftSection(location.pathname !== "/login");
  // }, [location]);

  const toggleMenu = () => {
    
    setMenuOpen(!menuOpen);
  };
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
          <button className="toggle-button" onClick={toggleMenu}>Toggle</button>
            <Link to="/Login" style={{ outline: 0 }}>
              <button
                style={{
                  outline: 0,
                  border: 0,
                  margin: "10px",
                  fontSize: "1.1rem",
                  backgroundColor: "#F6E06C",
                  padding: "7px 20px",
                  borderRadius: "20px",
                }}
              >
                Check Report
              </button>
            </Link>
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

          <div className="sectionContainer">
            {/* {showLeftSection && (
              <section className="leftSection">
                <Navigation />
              </section>
            )} */}
            
              <Navigation menuOpen={menuOpen}/>
            
            <Routes>
              {/* {localStorage.getItem("userInfo") &&
              JSON.parse(localStorage.getItem("userInfo")).isLogin ? (
                <Route path="/" element={<Home />} />
              ) : (
                <section class="leftSection">
                  <Navigation />
                </section>
              )} */}

              <Route path="/" element={<Home_page />} />
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
              <Route path="/video" element={<Video />} />
              <Route path="/Player" element={<Player />} />
              <Route path="/Player1" element={<Player1 />} />
              <Route path="/Player3" element={<Player3 />} />
              <Route path="/Home_page" element={<Home_page />} />
              <Route path="/Good_Option" element={<Good_Option />} />
              <Route path="/Map" element={<Map />} />
              <Route path="/Map1" element={<Map1 />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Main;
