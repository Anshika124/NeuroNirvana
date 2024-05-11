import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <div class="navigation">
      <div class="navComponent">
          <div class="navImg">
            <img src="https://cdn-icons-png.flaticon.com/512/1147/1147086.png"></img>
          </div>
          <Link to="/Home_page">
            <div class="navHead btn">HOME</div>
          </Link>
        </div>
        <div class="navComponent">
          <div class="navImg">
            <img src="https://cdn-icons-png.flaticon.com/512/7717/7717267.png"></img>
          </div>
          <Link to="/Chatbot">
            <div class="navHead btn">CHATBOT</div>
          </Link>
        </div>
        <div class="navComponent">
          <div class="navImg">
            <img src="https://cdn-icons-png.flaticon.com/512/950/950851.png"></img>
          </div>
          <Link to="/Home">
            <div class="navHead btn">STORY TIME</div>
          </Link>
        </div>
        <div class="navComponent">
          <div class="navImg">
            <img src="https://cdn-icons-png.flaticon.com/512/5985/5985765.png"></img>
          </div>
          <Link to="/Creativity">
            <div class="navHead btn">CREATIVITY</div>
          </Link>
        </div>
        <div class="navComponent btn">
          <div class="navImg">
            <img src="https://cdn-icons-png.flaticon.com/512/3663/3663335.png"></img>
          </div>
          <Link to="/Meditation">
            <div class="navHead btn">MEDITATION</div>
          </Link>
        </div>
        <div class="navComponent">
          <div class="navImg">
            <img src="https://cdn-icons-png.flaticon.com/512/8638/8638228.png"></img>
          </div>
          <Link to="/Suggestions">
            <div class="navHead btn">SUGGESTIONS</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
