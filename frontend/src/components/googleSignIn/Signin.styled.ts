import styled from 'styled-components';

export const StyledSignIn = styled.button`
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

  @media screen and (max-width: 700px) {
    position: absolute;
    top: 40px;
    left: 20px;
    left: 100px;
  }
`;

export const StyledProfile = styled.div`
  .profile-anchor {
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      margin-left: 10px;
      width: 40px;
      height: 40px;
    }
  }
`;
