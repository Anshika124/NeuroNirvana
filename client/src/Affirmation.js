import React from 'react'
import './Affirmation.css'
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import video from './assets/affirmation.mp4';
import Link from 'react'
const Dancing = () => {
  return (
    <>
        <section class="rightSection">
    <div class="mainContainer">
        <div class="header-mainContainer">
            <h4>MEDITATION</h4>
        </div>
        <div class="main-mainContainer">
            <div class="flexContainer">
              <div class="gridgit">
              <div class="gridheading">
                <h3>AFFIRMATION</h3>
              </div>
              <motion.div 
                initial={{ x: '100vw'}}
                animate={{ x: 0}}
                transition={{ delay: 0.5,type: 'spring'}}
              >
              <div class="grid-main">
                    <div class="main_affirmation">
                      <img src="https://img.freepik.com/free-vector/high-self-esteem-illustration_23-2148752346.jpg?w=740&t=st=1697195176~exp=1697195776~hmac=db9cd11daab19447358228e409d1247f4493a6b607a101ad6971b48eda4b3750" />
                      <div class="video_class"><ReactPlayer controls={true} url={video}/>
                        </div>
                    
                    
                    </div>
                    
                    
                    
              </div>
              </motion.div>
              </div>

            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Dancing