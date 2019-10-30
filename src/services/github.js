import api from './api';

const getUser = username => api.get(`/users/${username}`);

const getRepositories = username => api.get(`/users/${username}/repos`);

const getStarreds = username => api.get(`/users/${username}/starred`);

export default { getUser, getRepositories, getStarreds };
