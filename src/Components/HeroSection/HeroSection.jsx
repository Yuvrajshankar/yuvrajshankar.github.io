import React from 'react';
import "./HeroSection.css";
import { Bio } from '../../data/constants';
import logo from "../../pro.png";

function HeroSection() {

    const handleButtonClick = () => {
        window.open('https://drive.google.com/file/d/1TlwN8kQCP377slnFWoYdlOluGoecgbHH/view?usp=sharing', '_blank');
    };

    return (
        <div id="about">

            <div className="about__container">

                <div className="left">
                    <h1>Hi, I am <br />{Bio.name}</h1>
                    <h2>I am a
                        <span> Full Stack Developer</span>
                    </h2>
                    <h3>{Bio.description}</h3>
                    <button className='resume' onClick={handleButtonClick}>Check Resume</button>
                </div>

                <div className="right">
                    <img src={logo} alt="logo" style={{ width: "300px" }} />
                </div>

            </div>

        </div>
    )
}

export default HeroSection;