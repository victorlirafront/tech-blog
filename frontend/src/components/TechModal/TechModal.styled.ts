import styled from 'styled-components';

export const StyledSlickTech = styled.div`
  background: white;
  position: fixed;
  z-index: 20;
  transform: translateY(-100%);
  color: #000;
  padding: 20px;
  text-align: center;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  transition: 0.5s;
  width: 600px;
  top: 200px;
  right: 100px;

  @media screen and (max-width: 640px) {
    width: 70%;
    right: 500px;
  }

  &.active {
    position: fixed;
    transform: translateY(0%);
    opacity: 1;
    transition: 0.5s;
    visibility: visible;

    @media screen and (max-width: 767px) {
      transform: translateY(23%);
    }

    @media screen and (max-width: 1035px) {
      right: 50%;
      transform: translateX(50%);
    }

    @media screen and (max-width: 700px) {
      right: 50%;
      top: 50%;
      transform: translate(50%, 50%);
      width: 90%;
    }
  }

  h1 {
    line-height: 30px;
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
    margin: 20px 0;

    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  }
  .documentation-anchor {
    background: #6449ff;
    padding: 5px 10px;
    border-radius: 6px;
    color: #fff;
    text-decoration: none;
    transition: 0.5s;

    &:hover {
      background: #4730c9;
    }

    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  }
`;

export const StyledSlickTechWrapper = styled.div`
  position: fixed;
  z-index: 10;
  width: 1400px;
  right: 50%;
  top: 0%;
  transform: translate(50%, 50%);

  @media screen and (max-width: 1286px) {
    width: 100vw;
  }
`;
