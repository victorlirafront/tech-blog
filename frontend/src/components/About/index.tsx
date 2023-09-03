import StyledAbout from './About.styled';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Typed from "react-typed"

const About = function () {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <StyledAbout data-aos="fade-down">
            <div className="about-wrapper" data-aos="fade-down">
               <div className='typed-animation'>
                    <Typed className='title-1' strings={[
                        "Hello, I'm a Front-end Developer"
                    ]}
                        typeSpeed={70}
                        backSpeed={40}
                    />
                    
                    <p></p>
                    <Typed className='title-2' strings={[
                        "I've been building ideias since 2021"
                    ]}
                        typeSpeed={90}
                        backSpeed={40}
                    />
                    <p></p>
                    <Typed className='title-3' strings={[
                        "I'm gonna share my knolodge in this blog"
                    ]}
                        typeSpeed={100}
                        backSpeed={40}
                    />
                    <p></p>
                    <Typed className='title-4' strings={[
                        "I hope you enjoy it 🚀"
                    ]}
                        typeSpeed={160}
                        backSpeed={40}
                    />
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
