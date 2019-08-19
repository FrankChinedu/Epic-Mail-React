import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthWrapper from './AuthWrapper';
import useSetUser from '../store/hooks';
import store from '../store';

export default function Main() {
  useSetUser({ ...store });
  return (
    <React.Fragment>
      <BrowserRouter>
        <AuthWrapper />
      </BrowserRouter>
    </React.Fragment>
  );
}
