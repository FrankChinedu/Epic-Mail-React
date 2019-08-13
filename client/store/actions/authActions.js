import saveToLocalStorage, { axiosCall } from '../../utils';

export const signUpAction = (values, history) => async (dispatch) => {
  delete values.passwordConfirmation;

  const payLoad = values;
  try {
    const result = await axiosCall({
      path: '/api/v1/auth/signup',
      payload: payLoad,
      method: 'post'
    });
    const user = result.data.data;
    saveToLocalStorage(user);
    dispatch({
      type: 'SIGNUP_SUCCESS',
      payLoad: user
    });
    return history.push('/');
  } catch (err) {
    const { response } = err;
    const { error } = response.data;
    history.push('/signup');
    dispatch({ type: 'SIGNUP_ERROR', error });
  }
};

export const signInAction = (values, history) => async (dispatch) => {
  const payLoad = values;
  try {
    const result = await axiosCall({
      path: '/api/v1/auth/login',
      payload: payLoad,
      method: 'post'
    });
    const user = result.data;
    saveToLocalStorage(user);
    dispatch({
      type: 'SIGNIN_SUCCESS',
      payLoad: user
    });
    history.push('/');
  } catch (err) {
    const { response } = err;
    const { error } = response.data;
    history.push('/signin');
    dispatch({ type: 'SIGNIN_ERROR', error });
  }
};
