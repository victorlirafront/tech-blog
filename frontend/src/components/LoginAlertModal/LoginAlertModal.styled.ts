import styled from 'styled-components';

export const StyledLoginAlertModal = styled.div`
  width: 400px;
  height: 400px;
  background: #fff;
  position: fixed;
  z-index: 10;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  padding: 20px;

  h1 {
    font-size: 20px;
    text-align: center;

    &.txt-2 {
      margin-bottom: 50px;
    }
  }

  .close-modal {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 70px;
    height: 70px;
    cursor: pointer;
    padding: 20px;
  }
`;
