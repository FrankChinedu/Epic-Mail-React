import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './main';
import store from './store';

import './style/main.css';

const app = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Main />
    </Provider>,
    app
  );
};

if (app) render();

if (module.hot) module.hot.accept();
