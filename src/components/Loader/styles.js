import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10000;
`;

export const Content = styled.div`
  background-color: #150958;
  border-radius: 50%;
  box-shadow: 0 0 20px 1px #150958;
  padding: 5px;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 110px;
  height: 110px;
  top: 50%;
  left: 50%;
`;
