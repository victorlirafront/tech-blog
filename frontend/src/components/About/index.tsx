import 'aos/dist/aos.css';
import StyledAbout from './About.styled';
import Image from 'next/image';
import React from 'react';

const About = function () {
  const codeOpening = '< ';
  const heading = 'TECH BLOG';
  const codeClosing = '/ >';

  return (
    <StyledAbout data-aos="fade-down" data-aos-delay="200">
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
          <div className="writter">
            <p>Victor Lira</p>
            <Image src='/verify.png' width={30} height={30} alt='teste' />
          </div>
          <h1>
            <span>{codeOpening}</span> {heading} <span>{codeClosing}</span>
          </h1>
          <p className="profession">Front-end Developer</p>
          <Image
            className="arrow-down"
            width={50}
            height={40}
            alt="teste"
            src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow-down_R_O49Lmno.webp?updatedAt=1708117050694"
          />
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
