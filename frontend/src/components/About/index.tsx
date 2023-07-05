import { StyledAbout } from './About.styled';

const About = function () {
    return (
        <StyledAbout>
            <div className="about-wrapper">
                <h1 className='about-title'>Front-end developer</h1>
                <p className='about-text'>
                    Eu me chamo Victor Lira, sou Desenvolvedor Front-end e decidi criar esse blog para compartilhar conceitos importantes que eu estou aprendendo durante a minha carreira como desenvolvedor.
                </p>

                <button className='about-buttom'>Comece por aqui</button>
            </div>
            <div className='overlay'></div>
        </StyledAbout>
    );
};

export default About;
