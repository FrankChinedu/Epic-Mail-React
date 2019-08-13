import saveToLocalStorage, { axiosCall } from '../../utils';
import callToast from '../../components/Toast';

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

export const forgotPasswordAction = value => async () => {
  try {
    const result = await axiosCall({
      path: '/api/v1/auth/reset',
      payload: value,
      method: 'post'
    });
    const payLoad = result.data;
    callToast(payLoad.message, 'success');
  } catch (err) {
    const { response } = err;
    const { message } = response.data.data;
    /* istanbul ignore next */
    callToast(message, 'error');
  }
};

export const ResetPasswordAction = value => async () => {
  const { password, accessToken } = value;
  const body = {
    password
  };
  try {
    const result = await axiosCall({
      path: '/api/v1/auth/reset-password',
      payload: body,
      method: 'post',
      token: accessToken
    });
    const message = result.data;
    callToast(message, 'success');
  } catch (err) {
    const { response } = err;
    const { error } = response.data;
    const message = (error && error.message) || error;
    callToast(message, 'error');
  }
};
