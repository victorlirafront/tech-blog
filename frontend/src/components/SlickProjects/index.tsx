import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import StyledSlickTech from './SlickProjects.styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Iprops } from '../SlickTech/Interface';

const SlickProjects = (props: Iprops) => {
  const [settings] = useState({
    // dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  return (
    <StyledSlickTech onClick={props.onClick}>
      <div className="arrows-containers">
        <h1>Projetos</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque amet dolores saepe
          exercitationem! Molestias impedit ipsa eius suscipit nemo modi velit! Corrupti obcaecati
        </p>
      </div>
      <Slider {...settings}>
        <div className="slider-container">
          <div className="slider-box next">
            <h1>teste</h1>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-box react">
            <h1>teste</h1>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-box typescript">
            <h1>teste</h1>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-box javascript">
            <h1>teste</h1>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-box styled-components">
            <h1>teste</h1>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-box sass">
            <h1>teste</h1>
          </div>
        </div>

        <div className="slider-container">
          <div className="slider-box html">
            <h1>teste</h1>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-box css">
            <h1>teste</h1>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-box css">
            <h1>teste</h1>
          </div>
        </div>
      </Slider>
    </StyledSlickTech>
  );
};

export default SlickProjects;
