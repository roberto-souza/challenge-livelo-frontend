import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { getUserRequest } from '~/store/modules/github/actions';

import { Container } from './styles';

export default function User() {
  const dispatch = useDispatch();

  const schema = Yup.object({
    username: Yup.string().required('Deve ser informado um usuário'),
  });

  function handleSubmit({ username }) {
    dispatch(getUserRequest(username));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <span>Insira o nome de usuário do GitHub</span>
        <Input name="username" placeholder="Usuário" />
        <button type="submit">Pesquisar</button>
      </Form>
    </Container>
  );
}
