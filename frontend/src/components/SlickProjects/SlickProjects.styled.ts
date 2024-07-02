import styled from 'styled-components';

const SlickProjects = styled.div`
  //slick dots
  width: 1200px;
  margin: 0 auto;

  .arrows-containers {
    width: 300px;
    height: 400px;
    position: absolute;
    padding: 30px;
    background: linear-gradient(135deg, #182517 0%, #71cd6a 100%);

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
    width: 940px;
    right: 0;
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
      justify-content: center;
      width: 297px;
      height: 400px;
      margin: 0 auto;
      padding: 30px;

      &:not(:last-child) {
        margin-right: 20px;
      }

      &.project-1 {
        border: 1px solid #00a3ff;
      }

      &.project-2 {
        border: 1px solid #e51d37;
      }

      &.project-3 {
        border: 1px solid #a6fb98;
      }

      &.project-4 {
        border: 1px solid #986dff;
      }

      h1 {
        font-size: 26px;
      }

      p {
        margin: 24px 0px;
      }
    }
  }
`;

export default SlickProjects;
