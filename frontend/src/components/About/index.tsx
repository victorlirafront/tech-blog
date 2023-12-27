import StyledAbout from './About.styled';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = function () {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <StyledAbout data-aos="fade-down">
            <div className="about-wrapper" data-aos="fade-down">
               <div className='typed-animation'>
               </div>
                <div className="card">
                    <div className="card-img">
                    </div>

                    <p className='name'>Victor Lira</p>
                    <p className='profession'> Front-end Dev 🚀</p>
                </div>
            </div>
            <div className='overlay'></div>
        </StyledAbout>
    );
};

export default About;
