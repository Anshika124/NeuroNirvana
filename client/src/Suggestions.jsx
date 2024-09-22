import React from 'react'
import Navigation from './Navigation'
import good_image from './assets/6569491.jpg';
const Suggestions = () => {
  return (
    <>
        
                    <section class="rightSection">
                        <div class="mainContainer">
                            <div class="header-mainContainer">
                                <h4>SUGGESTIONS</h4>
                            </div>
                            <div class="main-mainContainer">
                                
                            <div class="icon">
                                    <img src={good_image} class="icon-image" />
                                    
                                    <div class="btn">
                                    <a href="http://localhost:3000/Good_Option">   
                                        GOOD TOUCH VS BAD TOUCH
                                        </a>
                                    </div>
                                    

                                </div>
                                <div class="icon">
                                    <img src="https://i.pinimg.com/736x/c9/66/b4/c966b48d0298bb9f8cdabf1f9b0933f4.jpg" class="icon-image" />
                                    <div class="btn">
                                        <a href='https://www.wikihow.com/Decide-on-a-Career-Path#:~:text=Make%20a%20list%20of%20your,day%20routines%20of%20those%20jobs'>
                                        HOW TO MAKE A RIGHT CAREER CHOICE
                                    </a>
                                    </div>

                                </div>
                                <div class="icon">
                                    <img src="https://image.freepik.com/free-vector/dating-couple-enjoying-romantic-dinner_74855-5233.jpg" class="icon-image" />
                                    <div class="btn">
                                        <a href='https://www.wikihow.com/Have-a-Healthy-Relationship'>
                                        TOP 10 DATING MISTAKES TO AVOID
                                        </a>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    </section>

    </>
  )
}

export default Suggestions;