import React from 'react'
import './Home_page.css'
import home_image from './assets/image-removebg-preview.png';
import Navigation from './Navigation'
import Link from 'react'

const Home_page = () => {
  return (
    <>

                    <section class="rightSection">
                        <div class="mainContainer">
                            <div class="header-mainContainer">
                                <h4>HOME</h4>
                            </div>
                            <div class="main-mainContainer">
                            <div class="home_container">
                                <div class="text-home">
                                <div class="main-text">NeuroNirvana<br /><br /><br/></div>
                                Your Path to a<br /> Balanced Mind<br/> Starts Now!<br/><br/><br/>
                                <div class="part-text">Discover a supportive solution with<br/></div>
                                NeuroNirvana
                                </div>
                                <div class="image-container">
                                    <img src={home_image}/>
                                </div>
                            </div>

                                
                                
                            
                            </div>
                        </div>
                    </section>
                
           </> 
  )
}

export default Home_page