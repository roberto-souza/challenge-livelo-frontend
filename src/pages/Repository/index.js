import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaGithub, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import history from '~/services/history';
import {
  getRepositoriesRequest,
  getStarredsRequest,
} from '~/store/modules/github/actions';
import Repo from './components/Repo';

import { Container, User, Buttons, Repositories } from './styles';

export default function Repository() {
  const dispatch = useDispatch();
  const { user, repositories, starreds } = useSelector(state => state.github);

  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  }, []); // eslint-disable-line

  function searchRepositories() {
    dispatch(getRepositoriesRequest());
  }

  function searchStarreds() {
    dispatch(getStarredsRequest());
  }

  return (
    <Container>
      <User>
        <div className="profile">
          <img src={user.avatar_url} alt="profile" />
          <div className="details">
            <span className="name">{user.name}</span>
            <span className="bio">{user.bio}</span>
          </div>
        </div>
        <Link to="/">Alterar usuário</Link>
      </User>
      <Buttons>
        <button type="button" onClick={searchRepositories}>
          <FaGithub size={45} color="#ffffff" />
          <span>Repositórios</span>
        </button>
        <button type="button" onClick={searchStarreds}>
          <FaStar size={45} color="#ffffff" />
          <span>Favoritos</span>
        </button>
      </Buttons>
      <Repositories>
        {repositories.map(repo => (
          <Repo key={repo.id} repository={repo} />
        ))}
        {starreds.map(repo => (
          <Repo key={repo.id} repository={repo} />
        ))}
      </Repositories>
    </Container>
  );
}
