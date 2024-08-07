import React, { useState } from 'react';
import Slider from 'react-slick';
import StyledSlickTech from './SlickProjects.styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Iprops } from '../SlickTech/types';

const SlickProjects = (props: Iprops) => {
  const [settings] = useState({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 634,
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
          <div className="slider-box project-1">
            <h1>Em construção...</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, accusantium.
            </p>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-box project-2">
            <h1>Em construção...</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, accusantium.
            </p>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-box project-3">
            <h1>Em construção...</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, accusantium.
            </p>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-box project-4">
            <h1>Em construção...</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, accusantium.
            </p>
          </div>
        </div>
      </Slider>
    </StyledSlickTech>
  );
};

export default SlickProjects;
