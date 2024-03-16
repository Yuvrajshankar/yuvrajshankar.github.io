import React from 'react';
import "./Contact.css";

function Contact() {

    const handleEmailClick = () => {
        window.location.href = "mailto:yuvrajpandar2004@gmail.com";
    };

    return (
        <div className='contact'>
            <h1>Contact</h1>
            <p>Feel free to reach out to me for any questions or opportunities!</p>
            <p className="email" onClick={handleEmailClick}>yuvrajpandar2004@gmail.com</p>
        </div>
    )
}

export default Contact;