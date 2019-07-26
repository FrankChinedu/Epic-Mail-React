import axios from 'axios';

const signUpAction = (values, history) => (dispatch, getState) => {
  console.log('history', history);
  delete values.passwordConfirmation;

  const payLoad = values;
  axios
    .post('/api/v1/auth/signup', payLoad)
    .then((res) => {
      console.log('passed', res.data.data);
      const user = res.data.data;
      console.log('user', user);
      dispatch({
        type: 'SIGNUP_SUCCESS',
        payLoad: user
      });
      return history.push('/');
    })
    .catch(({ response }) => {
      const { error } = response.data;
      history.push('/signup');
      dispatch({ type: 'SIGNUP_ERROR', error });
    });
};

export { signUpAction };
