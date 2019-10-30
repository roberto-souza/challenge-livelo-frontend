import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      font-size: 18px;
      font-weight: bold;
    }

    input {
      background-color: #cdcadb;
      border: none;
      border-radius: 3px;
      color: #4a4a4a;
      line-height: 17px;
      margin-top: 25px;
      padding: 0 10px;
      vertical-align: middle;
      height: 39px;
      width: 300px;

      + span {
        font-size: 10px;
        color: #ed047c;
      }
    }

    button {
      background-color: #ed047c;
      border: none;
      border-radius: 5px;
      color: #ffffff;
      line-height: 17px;
      margin-top: 25px;
      padding: 9px 44px;
      text-transform: uppercase;
      text-align: center;
      transition: all 0.3s ease;

      &:hover {
        background-color: ${darken(0.15, '#ed047c')};
      }
    }
  }
`;
