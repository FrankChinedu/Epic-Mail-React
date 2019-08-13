import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import Signin, { signinComponent } from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

describe('Sign in', () => {
  beforeEach(() => {
    store = mockStore({
      auth: {
        authError: null,
        user: []
      }
    });
  });
  it('should render sign in page', () => {
    const component = shallow(<signinComponent />);

    expect(component).toMatchSnapshot();
  });

  it('should render signup with store', () => {
    const component = mount(
      <Router>
        <Signin store={store} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });
});
