import 'aos/dist/aos.css';
import StyledAbout from './About.styled';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const About = function () {
  const [allowAosAnimation, setAllowAosAnimation] = useState(false);

  const codeOpening = '< ';
  const heading = 'TECH BLOG';
  const codeClosing = '/ >';

  useEffect(() => {
    const handleResize = () => {
      const allowAosAnimationBoolean = window.innerWidth > 0 && window.innerWidth <= 768;
      setAllowAosAnimation(allowAosAnimationBoolean);
    };

    handleResize();
  }, []);

  return (
    <StyledAbout>
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
          <div
            className="writter"
            {...(!allowAosAnimation ? { 'data-aos': 'fade-down', 'data-aos-delay': '200' } : {})}
          >
            <p className="name">Victor Lira</p>
            <Image src="/verify.png" width={30} height={30} alt="teste" />
          </div>
          <h1 {...(!allowAosAnimation ? { 'data-aos': 'fade-down', 'data-aos-delay': '250' } : {})}>
            <span>{codeOpening}</span> {heading} <span>{codeClosing}</span>
          </h1>
          <p
            className="profession"
            {...(!allowAosAnimation ? { 'data-aos': 'fade-down', 'data-aos-delay': '300' } : {})}
          >
            Front-end Developer
          </p>
          <div
            {...(!allowAosAnimation ? { 'data-aos': 'fade-down', 'data-aos-delay': '350' } : {})}
          >
            <Image
              className="arrow-down"
              width={50}
              height={40}
              alt="arrow down"
              src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow-down_R_O49Lmno.webp?updatedAt=1708117050694"
            />
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
