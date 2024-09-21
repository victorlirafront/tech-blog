import styled from 'styled-components';

const Profile = styled.div`
  margin: 0 auto;
  background: #000;

  .container-vh {
    max-height: 100vh;
    margin: 0 auto;

    .item {
      color: #fff;
      display: flex;
      align-items: center;
      height: 100vh;
      scroll-snap-align: center;
      position: relative;

      @media screen and (max-width: 600px) {
        height: calc(100vh + 58px);
      }

      &.item-1 {
        height: 600px;
      }

      &.item-2 {
        height: 600px;

        @media screen and (max-width: 1274px) {
          height: auto;
        }

        @media screen and (max-width: 800px) {
          height: auto;
        }

        @media screen and (max-width: 500px) {
          margin-bottom: 200px;
        }
      }

      &.item-3 {
        height: 600px;
        margin-top: 100px;
        margin-bottom: 200px;

        @media screen and (max-width: 1274px) {
          margin-top: 200px;
        }

        @media screen and (max-width: 800px) {
          margin-top: 250px;
        }

        @media screen and (max-width: 450px) {
          margin-top: 300px;
        }
      }

      .header {
        max-width: 1200px;
        padding-left: 0;
        padding-right: 0;
        position: absolute;
        top: 0;
        right: 50%;
        transform: translate(50%, 0%);
        width: 100%;
      }

      .profile-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        margin-top: 86px;
        @media screen and (max-width: 1040px) {
          margin: 0 auto;
        }

        @media screen and (max-width: 500px) {
        }

        .card-wrapper {
          position: relative;
          width: 270px;
          height: 270px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100%;

          @media screen and (max-width: 767px) {
            width: 240px;
            height: 240px;
          }

          .card-image {
            width: 200px;
            height: 200px;
            border-radius: 100%;

            @media screen and (max-width: 767px) {
              width: 170px;
              height: 170px;
            }
          }

          .circle {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
          }
        }

        .name-box {
          display: flex;
          align-items: center;
          margin-right: -20px;
          margin-top: 15px;

          .name {
            margin-right: 10px;
          }
        }

        .profile-h1 {
          margin: 10px 0px;
          max-width: 42rem;
          font-size: 3rem;
          line-height: 1;
          margin: 0 auto;
          margin: 50px auto 50px auto;
          color: #fff;

          span:first-child {
            font-size: 18px;
            letter-spacing: 4px;
            text-align: center;
          }

          span:last-child {
            font-size: 80px;
            line-height: 80px;
            font-weight: 700;
            background-size: 100%;
            background-image: linear-gradient(135deg, #80ffea 0%, #8aff80 100%);
            background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-box-decoration-break: clone;

            @media screen and (max-width: 500px) {
              font-size: 40px;
            }
          }

          @media screen and (max-width: 1040px) {
            text-align: center;
          }

          @media screen and (max-width: 500px) {
            max-width: 300px;
            line-height: 21px;
            font-weight: 500;
          }

          @media screen and (max-width: 400px) {
            font-size: 34px;
          }
        }
      }

      .about-wrapper {
        position: relative;
        max-width: 830px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        scroll-snap-align: center;

        .modal-tech-information {
        }

        @media screen and (max-width: 1274px) {
          margin-top: 440px;
        }

        @media screen and (max-width: 1274px) {
          margin-top: 200px;
        }

        .profession {
          font-size: 20px;
          @media screen and (max-width: 1040px) {
            text-align: center;
          }

          @media screen and (max-width: 400px) {
            font-size: 16px;
          }
        }

        .description {
          @media screen and (max-width: 400px) {
            font-size: 14px;
            line-height: 24px;
          }
        }

        .skills {
          font-size: 30px;
          font-weight: bold;
          margin-top: 0px;
          background-size: 100%;
          background-image: linear-gradient(135deg, #80ffea 0%, #8aff80 100%);
          background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-box-decoration-break: clone;
          font-size: 40px;
          line-height: 80px;
          font-weight: 700;

          @media screen and (max-width: 800px) {
            font-size: 20px;
          }
        }

        .tip {
          margin: 20px 0px 48px 0px;
        }
      }

      .form-wrapper {
        width: 800px;
        margin: 0 auto;
        color: #fff;
        text-align: center;

        .title {
          text-align: center;
          font-size: 60px;
          margin-bottom: 20px;

          @media screen and (max-width: 800px) {
            font-size: 32px;
          }
        }

        .p-1 {
          text-align: center;
          @media screen and (max-width: 800px) {
            font-size: 14px;
            padding: 0 20px;
          }
        }

        #form {
          .box-1 {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 48px;

            @media screen and (max-width: 800px) {
              flex-direction: column;
            }
          }

          .box-2 {
            display: flex;
            align-items: center;
            justify-content: center;

            @media screen and (max-width: 800px) {
              flex-direction: column;
            }
          }

          .box-3 {
          }

          .form-control {
            padding: 10px 20px;
            text-align: start;

            @media screen and (max-width: 800px) {
              padding: 5px 20px;
            }

            &.control-1,
            &.control-2 {
              width: 480px;
              @media screen and (max-width: 800px) {
                width: 100%;
              }
            }

            &.control-3 {
              width: 500px;
              @media screen and (max-width: 800px) {
                width: 100%;
              }
            }
            &.control-4 {
              width: 100%;
            }

            &.control-5 {
              width: 100%;
            }

            label {
              white-space: nowrap;
              text-transform: uppercase;
              @media screen and (max-width: 800px) {
                font-size: 14px;
              }
            }

            input {
              border: none;
              padding: 13px 20px;
              width: 100%;
              outline: none;
              width: 100%;
              background: #fff;
              border-radius: 30px;
              margin-bottom: 20px;
              margin-top: 7px;
              font-size: 16px;
              color: #333;

              @media screen and (max-width: 800px) {
                padding: 10px 20px;
                margin-bottom: 10px;
                font-size: 14px;
              }
            }

            textarea {
              border: none;
              padding: 13px 20px;
              width: 100%;
              outline: none;
              width: 100%;
              background: #fff;
              border-radius: 30px;
              margin-bottom: 20px;
              margin-top: 7px;
              font-size: 16px;
              color: #333;
              height: 200px;
              @media screen and (max-width: 800px) {
                font-size: 14px;
              }
            }
          }

          .submit {
            border: none;
            border-radius: 30px;
            padding: 10px 30px;
            display: inline-block;
            transition: 0.5s ease-out;
            color: #000;
            background: #12edb2;
            display: block;
            width: 100%;
            max-width: 300px;
            margin: auto;
            font-weight: bold;
            cursor: pointer;
          }
        }
      }
    }
  }
`;

export default Profile;
