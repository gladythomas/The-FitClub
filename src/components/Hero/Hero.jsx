import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'
const Hero = () => {
  const transition={type:'spring',duration:6}
  const mobile=window.innerWidth<=756 ? true:false;
  return (
    <div className="hero" id='home'>
    <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* Best Add Starting */}
        <div className="the-best-add">
          <motion.div
          initial={{left:mobile? "178px":'238px'}}
          whileInView={{left:'10px'}}
          transition={transition}
          
          ></motion.div>
          <span>The Best Fitness Club</span>
        </div>
        {/* The Best Add Ending */}

        <div className="hero-text">
          <div>

            <span className='stroke-text'>Shape </span>
            <span>Your</span>

          </div>

          <div>
            <span>Ideal </span>
            <span>Body</span>
          </div>

          <div>
            <span>
              in here we will help you to shape and build your ideal body and live up your live to fullest.
            </span>
          </div>

        </div>

        {/* Experience Figures */}
        <div className="figures">
          <div>
            <span>
          <NumberCounter end={140} start={100} delay='4' preFix="+"/>

            </span>
            <span>Expert Coaches</span>
          </div>

          <div>
            <span>
            <NumberCounter end={978} start={800} delay='4' preFix="+"/>
            </span>
            <span>Members Joined</span>
          </div>

          <div>
            <span>
            <NumberCounter end={50} start={0} delay='4' preFix="+"/>
            </span>
            <span>Fitness Programs</span>
          </div>

        </div>

        {/* Buttons of learn more and started */}

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>


        </div>

      </div>

      <div className="right-h">

        <button className="btn">Join Now</button>
        <motion.div
        initial={{right:"-2rem"}}
        whileInView={{right:'3rem'}} 
        transition={transition}
         className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* Hero images */}
        <img src={hero_image} alt="" className='hero-image' />
        <motion.img
        initial={{right:"11rem"}}
        whileInView={{right:'22rem'}} 
        transition={transition}
        
         src={hero_image_back} alt="" className='hero-image-back' />

        {/* Calories Section */}
        <motion.div
         initial={{right:"37rem"}}
        whileInView={{right:'25rem'}} 
        transition={transition}
         className="calories">
          <img src={Calories} alt="" />
          <div>

            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>


    </div>
  )
}

export default Hero
