'use client';
import styled from 'styled-components';

const StyledAbout = styled.div`
  @font-face {
    font-family: 'bolder-font';
    src: local('Sua Fonte'), local('bolder-font'),
      url('bold-1.ttf') format('woff2'), url('bold-2.oft') format('woff');
    font-style: normal; /* Estilo da fonte, ajuste conforme necessário */
  }
  position: relative;
  .area {
    width: 100%;
    height: 500px;
    top: 0;
    left: 0;
    z-index: -1;

    @media screen and (max-width: 767px) {
      height: calc(100vh - 60px);
    }

    .circles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;

      li {
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background: #ffffff4d;
        animation: animate 25s linear infinite;
        bottom: -150px;

        &:nth-child(1) {
          left: 25%;
          width: 20px;
          height: 20px;
          animation-delay: 0s;
          background-color: #0edba4;
        }

        &:nth-child(2) {
          left: 10%;
          width: 20px;
          height: 20px;
          animation-delay: 2s;
          animation-duration: 7s;
          background-color: #0edba4;
        }

        &:nth-child(3) {
          left: 70%;
          width: 20px;
          height: 20px;
          animation-delay: 4s;
          background-color: #0edba4;
        }

        &:nth-child(4) {
          left: 40%;
          width: 33px;
          height: 33px;
          animation-delay: 0s;
          animation-duration: 9s;
        }

        &:nth-child(5) {
          left: 65%;
          width: 20px;
          height: 20px;
          animation-delay: 0s;
          background-color: #0edba4;
        }

        &:nth-child(6) {
          left: 75%;
          width: 20px;
          height: 20px;
          animation-delay: 2s;
        }

        &:nth-child(7) {
          left: 35%;
          width: 20px;
          height: 20px;
          animation-delay: 5s;
        }

        &:nth-child(8) {
          left: 50%;
          width: 25px;
          height: 25px;
          animation-delay: 15s;
          animation-duration: 8s;
        }

        &:nth-child(9) {
          left: 20%;
          width: 15px;
          height: 15px;
          animation-delay: 1s;
          animation-duration: 7s;
          background-color: #0edba4;
        }

        &:nth-child(10) {
          left: 85%;
          width: 22px;
          height: 22px;
          animation-delay: 0s;
          animation-duration: 10s;
        }
      }

      @keyframes animate {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
          border-radius: 0;
        }

        100% {
          transform: translateY(-1000px) rotate(720deg);
          opacity: 0;
          border-radius: 50%;
        }
      }
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

        img {
          width: 20px;
          height: 20px;
          margin-left: 10px;
        }
      }

      p {
        color: rgba(255, 255, 255, 0.9);
        font-size: 25px;
        white-space: nowrap;
        font-family: 'bolder-font', sans-serif;
        font-weight: bold;
        text-transform: uppercase;

        &.profession {
          margin-top: 40px;
        }
      }

      h1 {
        font-size: 80px;
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
        display: none;

        @media screen and (max-width: 767px) {
          display: block;
        }
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
