import React, { useEffect, useRef } from 'react';
import "./HeroSection.css";
import { Bio } from '../../data/constants';
import logo from "../../pro.png";
import Typed from 'typed.js';

function HeroSection() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: Bio.roles,
            typeSpeed: 200,
            loop: true,
            loopCount: Infinity,
            cursorChar: "|",
            backSpeed: 50,
        });
        return () => {
            typed.destroy();
        }
    }, []);

    const handleButtonClick = () => {
        window.open('https://docs.google.com/document/d/1gciGtMcy0U7DEWtRuqUA2Zaf7oJwcPCcH-r5dgNAcUw/edit?usp=drive_link', '_blank');
    };

    return (
        <div id="about">

            <div className="about__container">

                <div className="left">
                    <h1>Hi, I am <br />{Bio.name}</h1>
                    <h2>I am a {" "}
                        {/* <span id="typewriter">{" "}{Bio.roles}</span> */}
                        <span ref={el}></span>
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