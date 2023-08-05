import React from 'react'
import "./Hero.css"
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import NumberCounter from "number-counter"
import {motion} from "framer-motion"




const Hero = () => {
  return (
    <div className="hero" id='Home'>
        <div className="left-h">
            <Header />
            <div className="the-best-ad">
                <div></div>
                    <span>
                        The Best Fitness club in th Town
                    </span>
            </div>
            <div className='hero-text'>
                <div>
                    <spam className = "stroke-text">Shap </spam>
                    <spam>your</spam>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span>
                    IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST
                    </span>
                    
                </div>
            </div>
            {/* */}
            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end = {140} start ={60} delay='4' preFix="+"/>

                    </span>
                    <span>Expert coachs</span></div>
                <div><span>
                <NumberCounter end = {978} start ={860} delay='4' preFix="+"/>
                </span>
                <span>members joined</span></div>
                <div><span>
                <NumberCounter end = {50} start ={10} delay='4' preFix="+"/>
                </span>
                <span>Fitness programs</span></div>
            </div>
            {/* */}
            <div className="hero-button">
                <button className="btn">Get started</button>
                <button className="btn">Learn more</button>
            </div>
        </div>
        <div className="right-h">
            <button className='btn'>Join Now</button>
            <div className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span><span>116 bpm</span>
            </div>
            <img src={hero_image} alt="" className='hero-image'/>
            <img src={hero_image_back} alt="" className='hero-image-back'/>

            <div className="calories">
                <img src={Calories} alt="" />
                <div>
                <span>Calories Burned</span><span>220 kcal</span>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Hero
