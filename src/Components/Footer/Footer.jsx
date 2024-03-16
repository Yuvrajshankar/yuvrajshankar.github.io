import React from 'react';
import "./Footer.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

function Footer() {

    const X = () => {
        window.open('https://twitter.com/YuvrajPandar', '_blank');
    };

    const Linked = () => {
        window.open('https://www.linkedin.com/in/yuvraj-pandar-79aba325b/', '_blank');
    };

    return (
        <div className='footer'>
            <h1>Pandar Yuvraj</h1>

            <div className="links">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#education">Education</a>
            </div>

            <div className="social__media">
                <LinkedInIcon className='social' onClick={Linked} />
                <XIcon className='social' onClick={X} />
            </div>

            <p>
                &copy; 2024 Pandar Yuvraj. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;