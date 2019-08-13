import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import ResetPassword, { ResetPasswordComponent } from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

describe('Reset Password', () => {
  beforeEach(() => {
    store = mockStore({
      auth: {
        authError: null,
        user: []
      }
    });
  });
  it('should render reset password page', () => {
    const history = {
      history: {
        location: {
          search: '?x-access-token=snvdhrddcvcbhhfnfbfbbvbfv'
        }
      }
    };
    const component = shallow(<ResetPasswordComponent history={history} />);

    expect(component).toMatchSnapshot();
  });

  it('should render reset password with store', () => {
    const history = {
      history: {
        location: {
          search: 'somethind'
        }
      }
    };
    const component = mount(
      <Router>
        <ResetPassword store={store} history={history} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });
});
