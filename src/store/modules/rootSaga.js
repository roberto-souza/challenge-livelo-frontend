import { all } from 'redux-saga/effects';

import github from './github/sagas';

export default function* rootSaga() {
  return yield all([github]);
}
