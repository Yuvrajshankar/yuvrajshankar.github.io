import React from 'react';
import "./Navbar.css";

function Navbar() {

    const handleButtonClick = () => {
        window.open('https://github.com/Yuvrajshankar', '_blank');
    };

    return (
        <nav>

            <h1>Yuvraj.</h1>

            <div className="nav__items">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#education">Education</a>
            </div>

            <button className='git' onClick={handleButtonClick}>
                Github Profile
            </button>

        </nav>
    )
}

export default Navbar;
