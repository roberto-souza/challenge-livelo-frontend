import { produce } from 'immer';

import GitHubTypes from './types';

const INITIAL_STATE = {
  repositories: [],
  starreds: [],
  user: '',
};

export default function reducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case GitHubTypes.GET_REPOSITORIES_REQUEST:
        draft.repositories = [];
        draft.starreds = [];
        break;
      case GitHubTypes.GET_REPOSITORIES_SUCCESS:
        draft.repositories = action.payload.repositories;
        draft.starreds = [];
        break;
      case GitHubTypes.GET_STARREDS_REQUEST:
        draft.repositories = [];
        draft.starreds = [];
        break;
      case GitHubTypes.GET_STARREDS_SUCCESS:
        draft.starreds = action.payload.starreds;
        draft.repositories = [];
        break;
      case GitHubTypes.GET_USER_REQUEST:
        draft.repositories = [];
        draft.starreds = [];
        break;
      case GitHubTypes.GET_USER_SUCCESS:
        draft.user = action.payload.user;
        break;
      default:
    }
  });
}
