import React from 'react';
import "./Skills.css";
import { skills } from '../../data/constants';

function Skills() {
    return (
        <div id="skills">
            <h1 className='skill__title'>Skills</h1>

            <div className="skill__container">
                {skills.map((skill) => (
                    <div className="skill">
                        <h1>{skill.title}</h1>
                        <div className="skill__list">
                            {skill.skills.map((item) => (
                                <div className="items">
                                    <img src={item.image} alt="img" className="item" />
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Skills;