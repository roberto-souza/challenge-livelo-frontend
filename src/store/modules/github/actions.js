import GitHubTypes from './types';

export function getRepositoriesRequest() {
  return {
    type: GitHubTypes.GET_REPOSITORIES_REQUEST,
  };
}

export function getRepositoriesSuccess(repositories) {
  return {
    type: GitHubTypes.GET_REPOSITORIES_SUCCESS,
    payload: { repositories },
  };
}

export function getStarredsRequest() {
  return {
    type: GitHubTypes.GET_STARREDS_REQUEST,
  };
}

export function getStarredsSuccess(starreds) {
  return {
    type: GitHubTypes.GET_STARREDS_SUCCESS,
    payload: { starreds },
  };
}

export function getUserRequest(username) {
  return {
    type: GitHubTypes.GET_USER_REQUEST,
    payload: { username },
  };
}

export function getUserSuccess(user) {
  return {
    type: GitHubTypes.GET_USER_SUCCESS,
    payload: { user },
  };
}
