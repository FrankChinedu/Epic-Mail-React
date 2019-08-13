import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { axiosCall } from '../../utils';
import { signInAction, signUpAction } from './authActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('../../utils');
let store;
const user = {
  firstname: 'frank',
  email: 'frank@me.com',
  password: 'sommething'
};

class CustomError extends Error {
  constructor(message, option = 'string') {
    super(message);
    this.response =			option === 'object' ? { data: { message: this.message } } : { data: { message: false } };
  }
}

const history = {
  push: e => e
};
describe('SignUp Action', () => {
  beforeEach(() => {
    store = mockStore({
      authError: null,
      user: []
    });
  });
  afterEach(() => {
    store.clearActions();
  });

  test('should successfully signup user', () => {
    const expectedActions = ['SIGNIN_SUCCESS'];
    axiosCall.mockResolvedValue({
      data: {
        data: {
          firstname: 'frank',
          lastname: 'obi',
          email: 'frank@me.com'
        }
      }
    });
    store.dispatch(signInAction(user, history)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });

  test('should successfully signin user', () => {
    const expectedActions = ['SIGNUP_SUCCESS'];
    axiosCall.mockResolvedValue({
      data: {
        data: {
          firstname: 'frank',
          lastname: 'obi',
          email: 'frank@me.com'
        }
      }
    });
    store.dispatch(signUpAction(user, history)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });

  test('should catch error on unsuccessful signup', () => {
    const expectedActions = ['SIGNUP_ERROR'];
    axiosCall.mockRejectedValue(
      new CustomError({
        response: {
          error: {
            message: 'user not found'
          }
        }
      })
    );
    store.dispatch(signUpAction(user, history)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });

  test('should catch error on unsuccessful signin', () => {
    const expectedActions = ['SIGNIN_ERROR'];
    axiosCall.mockRejectedValue(new CustomError('user not found'));
    store.dispatch(signInAction(user, history)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });
});
