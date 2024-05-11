import React from 'react';
import video from './assets/good_touch_hindi.mp4';
import ReactPlayer from 'react-player';
import './Player.css'

function Player1 (){
    return (
        <>

            <section class="rightSection">
                <div class="mainContainer">
                    <div class="header-mainContainer">
                                
                        <h4>GOOD TOUCH vs BAD TOUCH (Hindi) </h4>
                    </div>
                    <div class="main-mainContainer">
                        {/* 4<video width="750" height="500" controls>
                            <source src='./assets/a.mp4' type="video/mp4"/>
                        </video> */}
                        <div class="video_class"><ReactPlayer controls={true} url={video}/>
                        </div>
                    </div>
                </div>
            </section>
        </>


    );
}
export default Player1;