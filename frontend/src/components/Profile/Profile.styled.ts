import styled from 'styled-components';

const Profile = styled.div`
  /* max-width: 90%; */
  margin: 0 auto;
  /* padding: 20px 60px; */
  /* background-color: #151515; */
  /* border: 2px solid #1f1f1f; */
  /* max-width: 1400px; */
  /* margin-top: 30px; */

  @media screen and (max-width: 450px) {
    padding: 20px;
  }

  .box-1 {
    display: flex;
    color: #fff;
    justify-content: space-between;
    /* padding: 60px 30px; */
    border-radius: 4px;
    max-width: 1200px;
    margin: 0 auto;
    flex-direction: column;

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

    //container
    scroll-snap-type: y;
  }

  .container-vh {
    max-height: 100vh;
    overflow: scroll;
    scroll-snap-type: y mandatory;
    width: 100vw;
    background: linear-gradient(rgb(0, 0, 0), rgb(18, 18, 18));

    .item {
      border-bottom: 1px solid white;
      color: #fff;
      display: flex;
      align-items: center;
      height: 100vh;
      scroll-snap-align: center;
      position: relative;
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
          margin-right: unset;
        }

        .card-wrapper {
          position: relative;
          width: 270px;
          height: 270px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100%;

          .card-image {
            /* border: 2px solid #1f1f1f;
            border-radius: 5px;
            width: 250px;
            height: 250px;
            background-image: url();
            background-size: cover;
            border-radius: 100%; */
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
            /* background-size: 100%;
            background-image: linear-gradient(135deg, #80ffea 0%, #8aff80 100%);
            background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-box-decoration-break: clone; */
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
          }

          @media screen and (max-width: 1040px) {
            text-align: center;
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
        /* height: 100vh; */
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        scroll-snap-align: center;

        .modal-tech-information {
        }

        @media screen and (max-width: 1040px) {
          margin-top: 50px;
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
        }

        .tip {
          margin: 20px 0px 48px 0px;
        }
      }
    }
  }
`;

export default Profile;
