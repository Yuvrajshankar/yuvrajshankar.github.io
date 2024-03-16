import React from 'react';
import "./Education.css";

function Education() {
    return (
        <div id="education">
            <h1>Education</h1>
            <div className="education__card">
                <div className="college__details">
                    <img src="https://www.careerindia.com/college-photos/375x275/4824/logo_1614346811.png" alt="edu_img" />
                    <h3>Shri C. U. Shah College of Commerce, Management & Computer Education.</h3>
                    <p>Opp Milk Dairy, B/h C. U. Shah English School, Wadhwan, Gujarat, India - 363035.</p>
                </div>
                <h4><span>dropped out in</span> - 4 months ( BCA, Nov - 2021 )</h4>
                <h5>
                    <span>Reason - </span>
                    I withdrew from college due to a lack of engagement and motivation, feeling that I wasn't acquiring new knowledge. Seeking more fulfilling opportunities, I chose to learn on my own.
                </h5>
            </div>
        </div>
    )
}

export default Education;
