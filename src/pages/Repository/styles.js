import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 20px 0;
`;

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .profile {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    img {
      border: 2px solid #ff0095;
      border-radius: 50%;
      height: 70px;
      width: 70px;
      margin-right: 15px;
    }

    .details {
      display: flex;
      flex-direction: column;

      .name {
        font-size: 18px;
        font-weight: bold;
        line-height: 12px;
      }

      .bio {
        font-size: 12px;
        font-style: italic;
      }
    }
  }

  a {
    background-color: #ffffff;
    color: #150958;
    padding: 0px 10px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  button {
    background-color: #ff0095;
    border: none;
    border-radius: 10px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    margin: 0 5px;
    padding: 10px;
    width: 300px;
    height: 100px;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${darken(0.15, '#ed047c')};
    }

    span {
      margin-left: 10px;
    }
  }
`;

export const Repositories = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
