import styled from 'styled-components';

const Profile = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 20px 60px;
  background-color: #151515;
  border: 2px solid #1f1f1f;

  @media screen and (max-width: 450px) {
    padding: 20px;
  }

  .box-1 {
    display: flex;
    color: #fff;
    justify-content: space-between;
    padding: 60px 30px;
    border-radius: 4px;
    max-width: 1200px;
    margin: 0 auto;

    @media screen and (max-width: 1040px) {
      flex-direction: column;
      align-items: center;
    }

    @media screen and (max-width: 767px) {
      padding: 30px;
    }

    @media screen and (max-width: 453px) {
      padding: 30px 10px;
      padding-bottom: 100px;
    }

    .profile-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .card-image {
        border-radius: 100%;
        width: 250px;
        height: 250px;
        background-image: url(https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/profile-1_feYey8V23.jpeg?updatedAt=1712709533286);
        background-size: cover;

        @media screen and (max-width: 767px) {
          width: 170px;
          height: 170px;
        }
      }

      .button-wrapper {
        position: relative;

        .usa-box {
          width: 30px;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          bottom: 60px;

          cursor: pointer;

          &.active {
            filter: grayscale();
          }

          img {
            width: 100%;
            height: auto;
          }
        }

        .br-box {
          width: 30px;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          bottom: 60px;
          left: 33px;
          cursor: pointer;

          &.active {
            filter: grayscale();
          }

          img {
            width: 100%;
            height: auto;
          }
        }

        .download-wrapper {
          margin-top: 70px;
          width: 230px;
          padding: 10px 10px;
          text-align: center;
          border-radius: 30px;

          @media screen and (max-width: 1040px) {
            margin-top: 100px;
          }

          .download-btn {
            /* padding: 15px 30px; */
            cursor: pointer;
            background: transparent;
            font-size: 15px;
            text-decoration: none;
          }
        }
      }
    }

    .about-wrapper {
      position: relative;
      max-width: 550px;
      width: 100%;

      .modal-tech-information {
        background: white;
        height: 290px;
        position: absolute;
        width: 100%;
        transform: translateY(-150%);
        transition: 0.5s;
        color: #000;
        padding: 20px;
        text-align: center;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 4px;

        &.active {
          transform: translateY(0%);
          opacity: 1;
        }

        .error-icon {
          position: absolute;
          width: 30px;
          height: 30px;
          right: 10px;
          top: 10px;
          cursor: pointer;
        }

        .tech-documentation {
          margin: 10px 0;
        }
        .documentation-anchor {
          background: #6449ff;
          padding: 5px 10px;
          border-radius: 6px;
          color: #fff;
          text-decoration: none;
        }
      }

      @media screen and (max-width: 1040px) {
        margin-top: 50px;
      }

      .text-1 {
        @media screen and (max-width: 1040px) {
          text-align: center;
        }
      }

      .profile-h1 {
        margin: 10px 0px;

        @media screen and (max-width: 1040px) {
          text-align: center;
        }

        @media screen and (max-width: 400px) {
          font-size: 34px;
        }
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

      .tip {
        margin: 20px 0px 48px 0px;
      }
    }
  }
`;

export default Profile;
