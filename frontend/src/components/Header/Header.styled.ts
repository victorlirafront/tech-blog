import styled from 'styled-components';

const StyledHeader = styled.header`
  position: relative;
  margin: 0 auto;
  z-index: 3;
  background: #000;

  .home {
    @media screen and (max-width: 500px) {
      margin-bottom: 15px;
    }
  }

  .container {
    margin: 0 auto;
    max-width: 1200px;
    color: #ffffff;
    padding: 20px;

    @media screen and (max-width: 500px) {
      padding: 10px 20px;
    }

    nav {
      width: 100%;
      display: flex;

      @media screen and (max-width: 700px) {
        justify-content: space-between;
      }

      .header-icon {
        width: 34px;
        margin-right: 15px;
        cursor: pointer;
      }

      .menu-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        width: 100%;

        @media screen and (max-width: 700px) {
          transition: 0.5s;
        }

        &.active {
          left: 0px;

          @media screen and (max-width: 700px) {
            transition: 0.5s;
            padding: 70px 20px;
          }
        }

        .close {
          width: 20px;
          position: absolute;
          top: 40px;
          right: 20px;
          display: none;
          z-index: 555;

          @media screen and (max-width: 700px) {
            display: block;
            top: 20px;
          }
        }

        @media screen and (max-width: 700px) {
          background: #000;
          position: fixed;
          left: -100%;
          top: 0;
          bottom: 0;
          height: 100vh;
          width: 100vw;
          flex-direction: column-reverse;
          justify-content: flex-end;
        }

        .div-left {
          display: flex;
          justify-content: space-between;
          width: 100%;

          > div {
            @media screen and (max-width: 700px){
              display: flex;
              flex-direction: column;
            }
          }

          .home {
            &.active {
              border-bottom: 3px solid rgb(11, 238, 178);
              padding-bottom: 6px;
            }
          }

          .google-wrapper {

            .profile {
              background: #00c08e;
              padding: 5px 20px;
              border-radius: 4px;
              color: #fff;
            }
          }

          @media screen and (max-width: 700px) {
            flex-direction: column;
            min-width: 87%;
          }

          .category-options {
            margin-right: 30px;
            margin-left: 30px;
            display: flex;

            @media screen and (max-width: 700px){
              flex-direction: column;
              margin: 0;
            }

            p {
              @media screen and (max-width: 700px){
                margin-bottom: 15px;
              }

              &.front-end-option {
                &.active {
                  border-bottom: 3px solid rgb(11, 238, 178);
                  padding-bottom: 6px;
                }
              }

              &.react-option {
                &.active {
                  border-bottom: 3px solid rgb(11, 238, 178);
                  padding-bottom: 6px;
                }
              }

              &.typescript-option {
                &.active {
                  border-bottom: 3px solid rgb(11, 238, 178);
                  padding-bottom: 6px;
                }
              }

              &:not(:last-child) {
                margin-right: 30px;
              }
            }
          }

          .anchor {
            color: #fff;
            @media screen and (max-width: 700px) {
              margin-bottom: 15px;

              &:first-child {
                margin-bottom: 40px;
              }
            }

            &.active {
              border-bottom: 3px solid #0beeb2;
              padding-bottom: 6px;
            }
          }

          cursor: pointer;

          a {
            text-decoration: none;

            &:hover {
              color: #c5c5c5;
            }

            @media screen and (max-width: 700px) {
              &:hover {
                color: #fff;
              }
            }
          }
        }

        .anchor {

        }
      }

      .menu-hamburguer {
        display: none;

        @media screen and (max-width: 700px) {
          display: block;
          width: 30px;
          height: 20px;
          margin-top: 8px;
        }
      }
    }
  }
`;

export default StyledHeader;
