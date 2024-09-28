import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./Home.css";

import Outlet from "react";
const Home = () => {
  return (
    <>
      <section class="rightSection">
        <div class="mainContainer">
          <div class="header-mainContainer">
            <h4>STORYTIME</h4>
          </div>
          <div class="main-mainContainer">
            <div class="icon">
              <img
                src="https://2.bp.blogspot.com/-yWGFohNVRt8/UYvqnRo7P7I/AAAAAAAAAA8/tSIBF8GFQQo/s660/14226215-two-kids-reading-books.jpg"
                class="icon-image animations"
              />
                <Link to="/Comics">
                <div class="btn">COMICS</div>
              </Link>
            </div>
            <div class="icon">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.vHJgGd2ds60I-xIdb8phJAAAAA&pid=Api&P=0&h=220"
                class="icon-image"
              />
              <div class="btn">NOVELS</div>
            </div>
            <div class="icon">
              <img
                src="https://image.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg"
                class="icon-image"
              />
              <div class="btn">ARTICLES</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
