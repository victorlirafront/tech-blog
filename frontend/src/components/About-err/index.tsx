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
                    <div className="title-1">Hello, I'm a front Developer</div>
                    <div className="title-2">I've been coding since 2021</div>
                    <div className="title-3">JavaScript enthusiast</div>
                    <div className="title-4">Enjoy this tech blog 🚀</div>
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
