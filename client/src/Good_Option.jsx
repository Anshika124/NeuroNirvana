import React from 'react'
import './Good_Option.css'
import { Link } from 'react-router-dom';
const Good_Option = () => {
  return (
    <>
        
                    <section class="rightSection">
                        <div class="mainContainer">
                            <div class="header-mainContainer">
                                <h4>GOOD TOUCH - BAD TOUCH</h4>
                                
                            </div>
                            <div class="main-mainContainer">
                                <div class="option_selector">
                                    <h2>Select Language Preference:</h2>
                                    <div class="button_class">
                                        <Link to="/Player"><button>English</button></Link>
                                        <Link to="/Player1"><button>Hindi</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
    </>
  );
}
export default Good_Option
