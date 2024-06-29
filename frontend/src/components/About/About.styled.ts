'use client';
import styled from 'styled-components';

const StyledAbout = styled.div`
  @font-face {
    font-family: 'bolder-font';
    src: local('Sua Fonte'), local('bolder-font'), url('bold-1.ttf') format('woff2'),
      url('bold-2.oft') format('woff');
    font-style: normal; /* Estilo da fonte, ajuste conforme necessário */
  }

  position: relative;

  .area {
    width: 100%;
    height: calc(100vh - 86px);
    top: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(rgb(0, 0, 0), rgb(18, 18, 18));

    @media screen and (max-width: 767px) {
      height: calc(100vh - 60px);
    }
  }

  .wrapper {
    position: relative;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);

    @media screen and (max-width: 767px) {
      height: calc(100vh - 60px);
    }

    #div-mask-front,
    #div-mask-back {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .writter {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 40px;

        @media screen and (max-width: 600px) {
          font-size: 25px;
        }

        .name {
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          white-space: nowrap;
          font-family: 'bolder-font', sans-serif;
          font-weight: bold;
          text-transform: uppercase;
        }

        img {
          width: 15px;
          height: 15px;
          margin-left: 10px;
        }
      }

      .profession {
        font-size: 20px;
        margin-top: 40px;
        white-space: nowrap;
        font-family: 'bolder-font', sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        color: #fff;
      }

      h1 {
        font-size: 70px;
        background-size: 0.25rem 0.25rem;
        -webkit-background-clip: text;
        background-clip: text;
        white-space: nowrap;
        font-family: 'bolder-font', sans-serif;
        letter-spacing: -4px;
        color: #fff;
        text-shadow: #07edb8 1px 3px 0px;

        @media screen and (max-width: 600px) {
          white-space: unset;
          text-align: center;
          line-height: 80px;
          width: 222px;
          border-bottom: 3px solid #fff;
        }

        span {
          color: #fff;
          text-shadow: #07edb8 1px 3px 0px;

          @media screen and (max-width: 600px) {
            display: none;
          }
        }
      }

      .arrow-down {
        height: 70px;
        width: 26px;
        margin-top: 75px;
        animation: bounce 1s infinite alternate;
        -webkit-animation: bounce 1s infinite alternate;
        cursor: pointer;
      }

      @keyframes bounce {
        from {
          transform: translateY(0px);
        }

        to {
          transform: translateY(-15px);
        }
      }

      @-webkit-keyframes bounce {
        from {
          transform: translateY(0px);
        }

        to {
          transform: translateY(-15px);
        }
      }
    }
  }
`;

export default StyledAbout;
