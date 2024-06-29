import styled from 'styled-components';

const StyledHeader = styled.header`
  position: relative;
  padding: 20px 60px;
  margin: 0 auto;
  z-index: 3;
  background: #121212 !important;

  @media screen and (max-width: 500px) {
    padding: 10px 20px;
  }

  .home {
    @media screen and (max-width: 500px) {
      height: 38px;
    }
  }

  .container {
    margin: 0 auto;
    max-width: 1200px;
    color: #ffffff;

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
          background: rgb(0, 98, 72);
          position: fixed;
          left: -100%;
          top: 0;
          bottom: 0;
          height: 100vh;
          width: 100vw;
          flex-direction: column-reverse;
          justify-content: center;
        }

        .div-left {
          display: flex;
          justify-content: space-between;

          .home {
            &.active {
              border-bottom: 3px solid rgb(11, 238, 178);
              padding-bottom: 6px;
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

            p {
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

        .div-right {
          display: flex;
          align-items: center;

          .dark-mode {
            margin-right: 20px;
            @media screen and (max-width: 700px) {
              margin-right: unset;
            }
          }
        }

        .anchor {
          &:last-child {
            @media screen and (max-width: 700px) {
              margin-top: 40px;
            }
          }
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
