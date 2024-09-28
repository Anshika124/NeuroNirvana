import React from "react";
import "./Home.css";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Creativity = () => {
  return (
    <>
      <section class="rightSection">
        <div class="mainContainer">
          <div class="header-mainContainer">
            <h4>MEDITATION</h4>
          </div>
          <div class="main-mainContainer">
            <div class="icon">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-flat-people-dancing_23-2149054026.jpg?size=626&ext=jpg&uid=R119596575&ga=GA1.2.879722347.1696602360"
                class="icon-image"
              />
              <div class="btn">
                <Link to="/Video">DANCING</Link>
              </div>
            </div>
            <div class="icon">
              <img
                src="https://img.freepik.com/free-vector/popular-music-abstract-concept-illustration-popular-singer-tour-pop-music-industry-top-chart-artist-musical-band-production-service-recording-studio-book-event_335657-3656.jpg?w=740&t=st=1697131722~exp=1697132322~hmac=b396e3c0d014ed51a386fae0e12b91fa87c3b9b4f051c69cc41833f698707b37"
                class="icon-image"
              />
              <div class="btn">KARAOKE</div>
            </div>
            <div class="icon">
              <img
                src="https://img.freepik.com/premium-vector/painting-flat-illustration-with-someone-who-paints-using-easel-canvas-brushes-watercolor_2175-3930.jpg?size=626&ext=jpg&uid=R119596575&ga=GA1.2.879722347.1696602360"
                class="icon-image"
              />

              <div class="btn">
                <Link to="/Sketching">SKETCHING</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Creativity;
