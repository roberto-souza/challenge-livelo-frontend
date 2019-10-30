import React from 'react';

import logo from '~/assets/img/logo.png';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Livelo" />
      </Content>
    </Container>
  );
}
