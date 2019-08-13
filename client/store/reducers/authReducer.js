const initState = {
  authError: null,
  user: []
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
  case 'SIGNUP_SUCCESS':
    return {
      ...state,
      user: action.payLoad
    };
  case 'SIGNUP_ERROR':
    return {
      ...state,
      authError: action.error
    };
  case 'SIGNIN_SUCCESS':
    return {
      ...state,
      user: action.payLoad
    };
  case 'SIGNIN_ERROR':
    return {
      ...state,
      authError: action.error
    };
  default:
    return state;
  }
};

export default authReducer;
