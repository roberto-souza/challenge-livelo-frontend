import React from 'react';

import Routes from '~/routes';

import Header from '~/components/Header';
import Loader from '~/components/Loader';

import { Container, Content } from './styles';

export default function Application() {
  return (
    <Container>
      <Header />
      <Content>
        <Routes />
      </Content>
      <Loader />
    </Container>
  );
}
