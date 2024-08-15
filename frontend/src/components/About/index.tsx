import 'aos/dist/aos.css';
import StyledAbout from './About.styled';
import React from 'react';

const About = function () {
  function teste() {
    return '<dev>';
  }

  return (
    <StyledAbout>
      <h1 data-aos="fade-down" data-aos-delay="100">
        Artigos
      </h1>
      <p data-aos="fade-down" data-aos-delay="200">
        Desenvolvimento de software e tecnologia em artigos, toda semana! Conteúdo{' '}
        <span>{teste()}</span>.
      </p>
    </StyledAbout>
  );
};

export default About;
