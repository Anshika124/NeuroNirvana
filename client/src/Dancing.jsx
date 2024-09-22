import React from 'react'
import axios from 'axios'
import './Dancing.css'
import {useState} from 'react'
function Dancing(){
  const[image, setImage]=useState('')
  function handleImage(e) {
    console. log(e.target.files)
    setImage(e.target.files[0])
}
function handleApi() {
  const formData = new FormData()
  formData.append('image', image)
  axios.post('url', formData).then((res) =>{
  console.log(res)
})
}
  
  
  return (
    <>
        <section class="rightSection">
    <div class="mainContainer">
        <div class="header-mainContainer">
            <h4>CREATIVITY</h4>
        </div>
        <div class="main-mainContainer">
            <div class="flexContainer">
              <div class="gridgit">
              <div class="gridheading">
                <h3>SKETCHING</h3>
              </div>
              <div class="grid-main">
                    <div class="grid-main-menu">
                      <div class="grid-main-menu-m">
                        <input type="file" name='file' onChange={handleImage} />
                        <img src="https://tse4.mm.bing.net/th?id=OIP.A8kNRhNlY4TjiVNiS4clQQHaHa&pid=Api&P=0&h=220" class="btn"/>
                      </div>
                      <div class="grid-main-menu-n btn"><button onClick={handleApi}>Upload Sketch</button></div>
                    
                    </div>
                    <div class="grid-main-menu">
                      <div class="gridheading">UPLOADED SKETCHES</div>
                      <div class="grid-main-menu-h">1.DUM LAGAKE </div>
                    </div>
              </div>
              </div>

            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Dancing