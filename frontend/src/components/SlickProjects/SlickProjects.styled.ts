import styled from 'styled-components';

const SlickProjects = styled.div`
  //slick dots
  width: 1200px;
  margin: 0 auto;

  .arrows-containers {
    width: 300px;
    height: 400px;
    border: 1px solid red;
    position: absolute;
    padding: 30px;

    p {
      font-size: 13px;
      letter-spacing: 2px;
      line-height: 24px;
      margin-top: 20px;
    }
  }

  .slick-dots {
    @media screen and (max-width: 453px) {
      bottom: -75px;
      line-height: 0;
    }

    li {
      button {
        &::after {
          font-family: 'slick';
          font-size: 12px;
          line-height: 20px;
          position: absolute;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          content: '•';
          text-align: center;
          opacity: 0.25;
          -webkit-font-smoothing: antialiased;
        }
      }
    }

    li {
      &.slick-active {
        &::after {
          font-family: 'slick';
          font-size: 12px;
          line-height: 20px;
          position: absolute;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          content: '•';
          text-align: center;
          /* opacity: 0.5; */
          color: #0beeb2;
          -webkit-font-smoothing: antialiased;
        }
      }
    }
  }

  //arrow
  .slick-arrow {
    display: block;
    border: 1px solid #fff;
    border-radius: 20px;
  }

  .slick-prev {
    left: 50px;
    top: -10px !important;
    transform: rotate(-180deg);
    top: 300px !important;
    width: 40px !important;
    height: 40px !important;

    &::before {
      content: '';
      background-image: url('../../../teste.svg');
      display: inline-block; /* Ensure the pseudo-element takes up space */
      width: 20px; /* Adjust the size as needed */
      height: 20px; /* Adjust the size as needed */
      opacity: 0.75;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  .slick-next {
    right: 0;
    width: 40px;
    height: 40px;
    left: 200px;
    top: 320px !important;

    &::before {
      content: '';
      background-image: url('../../../teste.svg');
      display: inline-block; /* Ensure the pseudo-element takes up space */
      width: 20px; /* Adjust the size as needed */
      height: 20px; /* Adjust the size as needed */
      opacity: 0.75;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  .slick-list {
    width: 900px;
    right: 0;
    border: 1px solid red;
    height: 400px;
    top: 0;
    margin-left: 300px;
  }

  .slider-container {
    .slider-box {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 297px;
      height: 400px;
      margin: 0 auto;
      border: 1px solid white;

      .slide-image {
        width: 70px;
        height: auto;
        cursor: pointer;
      }

      &.next {
        img {
          width: 90px;
        }

        .text {
          font-size: 13px;
          margin-top: 10px;
        }
      }

      &.react {
        img {
          width: 90px;
        }
        .text {
          font-size: 13px;
          margin-top: 10px;
        }
      }

      &.typescript {
        img {
          width: 70px;
        }
        .text {
          font-size: 13px;
          margin-top: 20px;
        }
      }

      &.javascript {
        img {
          width: 70px;
        }
        .text {
          font-size: 13px;
          margin-top: 20px;
        }
      }

      &.wordpress {
        img {
          width: 70px;
        }
        .text {
          font-size: 13px;
          margin-top: 20px;
        }
      }

      &.styled-components {
        img {
          width: 70px;
        }
        .text {
          font-size: 13px;
          margin-top: 20px;
        }
      }

      &.html {
        img {
          width: 70px;
        }
        .text {
          font-size: 13px;
          margin-top: 18px;
        }
      }

      &.sass {
        img {
          width: 70px;
        }
        .text {
          font-size: 13px;
          margin-top: 18px;
        }
      }

      &.css {
        img {
          width: 70px;
        }
        .text {
          font-size: 13px;
          margin-top: 18px;
        }
      }
    }
  }
`;

export default SlickProjects;
