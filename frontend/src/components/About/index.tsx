import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import StyledAbout from './About.styled';

const About = function () {
    return (
        <StyledAbout data-aos="fade-down">
            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            <div className="wrapper">
                <div id="div-mask-front">
                    <h1>I'm Victor Lira</h1>
                    <p>Front-end Developer</p>
                </div>
            </div>
        </StyledAbout>
    );
};

export default About;
