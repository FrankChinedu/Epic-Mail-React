import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import Signup, { signupComponent } from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

describe('Sign up', () => {
  beforeEach(() => {
    store = mockStore({
      auth: {
        authError: null,
        user: []
      }
    });
  });
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<signupComponent />);

    expect(component).toMatchSnapshot();
  });

  it('should render signup with store', () => {
    const component = mount(
      <Router>
        <Signup store={store} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });
});
