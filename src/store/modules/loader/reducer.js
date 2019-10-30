import { produce } from 'immer';

import LoaderTypes from './types';

const INITIAL_STATE = {
  show: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case LoaderTypes.START:
        draft.show = true;
        break;
      case LoaderTypes.STOP:
        draft.show = false;
        break;
      default:
    }
  });
}
