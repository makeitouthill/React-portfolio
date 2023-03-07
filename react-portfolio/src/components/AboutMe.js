import React from "react";
import Portfolio from '../images/Portfolio-image.jpg';

function AboutMe(){
    return(
        <section id="about-me">
            <h2>About Me</h2>
            <img src={Portfolio} alt="Portfolio Headshot"/>
            <p>
                Hi, my name is Alex Horning and I'm an aspiring full stack web developer.
            </p>
        </section>
    )
}

export default AboutMe
