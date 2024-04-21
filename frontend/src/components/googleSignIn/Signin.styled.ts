import styled from 'styled-components';

const StyledSignIn = styled.button`
  padding: 5px 10px;
  background: #06e7b2;
  border: none;
  border-radius: 4px;
  font-weight: bolder;
  cursor: pointer;
  transition: 0.2s;

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

export default StyledSignIn;
