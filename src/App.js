import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './dependencies';

import history from '~/services/history';
import GlobalStyles from '~/styles/global';
import Application from '~/pages';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
        <Application />
      </Router>
    </Provider>
  );
}
