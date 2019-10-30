import { createGlobalStyle } from 'styled-components';

import GlegooRegular from '~/assets/font/Glegoo-Regular.ttf';
import GlegooBold from '~/assets/font/Glegoo-Bold.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Glegoo';
    src: url(${GlegooRegular});
  }

  @font-face {
    font-family: 'Glegoo';
    src: url(${GlegooBold});
    font-weight: bold;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-size: 14px;
    font-family: 'Glegoo', serif;

    &:focus {
      outline: 0;
    }
  }

  a {
    text-decoration: none;

    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
