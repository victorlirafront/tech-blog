import StyledAbout from './About.styled';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = function () {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <StyledAbout>
            <div className="about-wrapper" data-aos="fade-down">
                <div className='content-container'>
                    <h1 className='about-title'>Front-end developer</h1>
                    <p className='about-text'>
                        Meu nome é Victor Lira e sou um Desenvolvedor Front-end. Decidi criar este blog para compartilhar conceitos importantes que tenho aprendido ao longo da minha carreira. Aqui, pretendo compartilhar dicas, truques e insights que podem ser úteis para outros desenvolvedores. Vamos explorar juntos o mundo da programação!
                    </p>

                    <button className='about-buttom'>Comece por aqui</button>
                </div>
                <div className='overlay-inside'>

                </div>
            </div>
            <div className='overlay'></div>
        </StyledAbout>
    );
};

export default About;
