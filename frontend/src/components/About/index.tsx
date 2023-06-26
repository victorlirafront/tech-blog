import { StyledAbout } from './About.styled';

const About = function () {
    return (
        <StyledAbout>
            <div className="about-wrapper">
                <h1 className='about-title'>Blog da Vortex</h1>
                <p className='about-text'>
                    Junte-se a milhares de devs e acelere na direção dos seus
                    objetivos. Transforme sua carreira em uma jornada de evolução
                    contínua através das melhores tecnologias.
                </p>

                <button className='about-buttom'>Inscreva-se em nossa newsletter</button>
            </div>
        </StyledAbout>
    );
};

export default About;
