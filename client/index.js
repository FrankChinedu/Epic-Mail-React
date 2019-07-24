import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './main';
import rootReducer from './store/reducers/rootReducer';

import './style/main.css';

const store = createStore(rootReducer);

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
