import React from "react";
import "./styles/form.css";
import axios from "axios";
import Home from "./Home";
import { NavLink, useActionData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./Navigation";


function Login() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  function loginCheck(e) {
    e.preventDefault();
    // console.log('logging in with user email:',userEmail,'and user password',userPassword);
    axios
      .get("http://localhost:5600/user/login", {
        params: { userEmail: userEmail, userPassword: userPassword },
      })
      .then((response) => {
        console.log(response);
        if (response.data === "success") {
          localStorage.setItem("userInfo", JSON.stringify({ isLogin: true }));
          navigate("/Report");
          window.location.reload();
          // {
          //   localStorage.getItem("userInfo") &&
          //   JSON.parse(localStorage.getItem("userInfo")).isLogin ? (
          //     <Route path="/" element={<Home />} />
          //   ) : (
          //     <section class="leftSection">
          //       <Navigation />
          //     </section>
          //   );
          // }
        } else {
          alert("Login failed, Invalid username or password");
        }
      })
      .catch((error) => {
        console.log("API ERROR:", error.message);
        alert("An error occurred: " + error.message);
      });
  }
  return (
    <>
      <div className="mainBackground">
        <div className="container">
          <section className="firstSection">
            <div className="formQuote">
              You look the most beautiful when you wear your smile!
            </div>
          </section>
          <section className="secondSection">
            <form onSubmit={loginCheck}>
              <div className="dataContainer">
                <div className="formGroup">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    onChange={(e) => setUserEmail(e.target.value)}
                    name="email"
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setUserPassword(e.target.value)}
                    name="password"
                  />
                </div>
              </div>
              <div className="buttonContainer">
                <button type="submit">Login</button>
                <div className="accountSwitch">
                  <p>
                    New User? <Link to={"/App"}>Register</Link>
                  </p>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
export default Login;
