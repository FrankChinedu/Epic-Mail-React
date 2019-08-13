import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import ForgotPassword, { forgotPasswordComponent } from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

describe('Forgot Password', () => {
  beforeEach(() => {
    store = mockStore({
      auth: {
        authError: null,
        user: []
      }
    });
  });
  it('should render forgot password page', () => {
    const component = shallow(<forgotPasswordComponent />);

    expect(component).toMatchSnapshot();
  });

  it('should render forgot password with store', () => {
    const component = mount(
      <Router>
        <ForgotPassword store={store} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });
});
