'use client';
import styled from 'styled-components';

const StyledProfile = styled.div`
  margin: 0 auto;
  color: #fff;
  border-radius: 4px;
  margin: 0 auto;
  color: #b4b4b4;
  box-shadow: none;
  border-radius: 7px;
  text-align: center;
  padding-top: 60px;
  background: linear-gradient(rgb(0, 0, 0), rgb(18, 18, 18));
  min-height: 100vh;

  .favorit-post-title {
    font-size: 48px;
    background-size: 100%;
    background-image: linear-gradient(135deg, #9580ff 0%, #80ffea 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding-top: 60px;
  }
`;

export default StyledProfile;
