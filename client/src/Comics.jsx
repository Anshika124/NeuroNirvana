import React from 'react'
import './Comics.css'
import { motion } from 'framer-motion';
import Comics_pdf from '../src/assets/Starfish - Lisa Fipps.pdf'
import Comics_pdf1 from '../src/assets/Niylog.com-Focused_by_Alyson_Gerber.pdf'
const Comics = () => {
  return (
    <>
      <section class="rightSection">
        <div class="mainContainer">
          <div class="header-mainContainer">
            <h4>STORYTIME</h4>
          </div>

          <div class="main-mainContainer">
            <div class="gridgit">
              <div class="gridheading">COMICS</div>
              <motion.div 
                initial={{ x: '100vw'}}
                animate={{ x: 0}}
                transition={{ delay: 0.5,type: 'spring'}}
              >
              <div class="gridContainer">
                <a href={Comics_pdf} download>
                  <div class="comics btn">
                    <img src="https://i.pinimg.com/736x/a4/e6/61/a4e66117eeb76ece24a7ce9e82896d72.jpg" />
                    </div>
                </a>
                <a href={Comics_pdf1} download>
                <div class="comics btn">
                  <img src="https://www.cartoonstudies.org/wp-content/themes/ccs-2015/images/healthwealth/healthwealth-cover-m.jpg" />

                </div>
                </a>
                <div class="comics btn">
                  <img src="https://images.squarespace-cdn.com/content/v1/5a86d18cbff2001e37611590/1600107912769-S7UYD2L4YYOZ06QDO4S5/Mental+Health+%26+Wellbeing+Front+Cover.jpeg?format=2500w" />
                </div>
                <div class="comics btn">
                  <img src="https://i.etsystatic.com/15618734/r/il/be3df3/3489014942/il_794xN.3489014942_cp0a.jpg" />
                </div>


              </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Comics