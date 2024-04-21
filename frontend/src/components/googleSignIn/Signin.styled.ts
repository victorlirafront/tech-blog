import styled from 'styled-components';

export const StyledSignIn = styled.div`
  @media screen and (max-width: 700px) {
    position: absolute;
    top: 15px;
    flex-direction: row-reverse;
    border-bottom: 1px solid #444;
    width: 90%;
    left: 10px;
    right: 10px;
    padding-bottom: 20px;
    margin: 0 auto;
  }

  .button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    font-weight: bolder;
    cursor: pointer;
    transition: 0.2s;
    background-color: #0beeb2;

    &:hover {
      background: #04c99b;
    }
  }
`;

export const StyledProfile = styled.div`
  @media screen and (max-width: 700px) {
    position: absolute;
    top: 15px;
    flex-direction: row-reverse;
    border-bottom: 1px solid #444;
    width: 90%;
    left: 10px;
    right: 10px;
    padding-bottom: 10px;
    margin: 0 auto;
  }

  .profile-anchor {
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;

    @media screen and (max-width: 700px) {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
    }

    img {
      border-radius: 50%;
      margin-left: 10px;
      width: 40px;
      height: 40px;

      @media screen and (max-width: 700px) {
        margin-right: 20px;
      }
    }
  }
`;
