import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Repo({ repository }) {
  return (
    <Container>
      <a href={repository.html_url} rel="noopener noreferrer" target="_blank">
        <span className="name">{repository.name}</span>
        <div className="infos">
          <div className="info">
            <span className="label">Stars</span>
            <span className="value">
              {new Intl.NumberFormat('pt-BR').format(
                repository.stargazers_count
              )}
            </span>
          </div>
          <div className="info">
            <span className="label">Forks</span>
            <span className="value">{repository.forks}</span>
          </div>
        </div>
      </a>
    </Container>
  );
}

Repo.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number,
    html_url: PropTypes.string,
    name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks: PropTypes.number,
  }).isRequired,
};
