import { combineReducers } from 'redux';

import loader from './loader/reducer';
import github from './github/reducer';

export default combineReducers({ loader, github });
