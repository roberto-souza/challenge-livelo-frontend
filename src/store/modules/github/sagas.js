import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import GitHubService from '~/services/github';

import * as LoaderActions from '~/store/modules/loader/actions';
import {
  getRepositoriesSuccess,
  getStarredsSuccess,
  getUserSuccess,
} from './actions';

import GitHubTypes from './types';
import history from '~/services/history';

export function* getRepositories() {
  try {
    yield put(LoaderActions.start());

    const { login } = yield select(state => state.github.user);

    const response = yield call(GitHubService.getRepositories, login);

    yield put(getRepositoriesSuccess(response.data));

    yield put(LoaderActions.stop());
  } catch (e) {
    yield put(LoaderActions.stop());
    toast.error('Ocorreu um erro ao buscar, tente mais tarde!');
  }
}

export function* getStarreds() {
  try {
    yield put(LoaderActions.start());

    const { login } = yield select(state => state.github.user);

    const response = yield call(GitHubService.getStarreds, login);

    yield put(getStarredsSuccess(response.data));

    yield put(LoaderActions.stop());
  } catch (e) {
    yield put(LoaderActions.stop());
    toast.error('Ocorreu um erro ao buscar, tente mais tarde!');
  }
}

export function* getUser({ payload }) {
  try {
    yield put(LoaderActions.start());
    const { username } = payload;

    const response = yield call(GitHubService.getUser, username);

    yield put(getUserSuccess(response.data));

    history.push(`/${username}`);

    yield put(LoaderActions.stop());
  } catch (e) {
    yield put(LoaderActions.stop());
    toast.error('Ocorreu um erro ao buscar, tente mais tarde!');
  }
}

export default all([
  takeLatest(GitHubTypes.GET_REPOSITORIES_REQUEST, getRepositories),
  takeLatest(GitHubTypes.GET_STARREDS_REQUEST, getStarreds),
  takeLatest(GitHubTypes.GET_USER_REQUEST, getUser),
]);
