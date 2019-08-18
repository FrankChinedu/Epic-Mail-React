const initState = {
  authError: null,
  user: [],
  isAuthenticated: false,
  isSettingAuth: true
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
  case 'SIGNUP_SUCCESS':
    return {
      ...state,
      isAuthenticated: true,
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
      isAuthenticated: true,
      user: action.payLoad
    };
  case 'SIGNIN_ERROR':
    return {
      ...state,
      authError: action.error
    };
  case 'SETUP_USER':
    return {
      ...state,
      ...action.payload,
      isSettingAuth: false
    };
  default:
    return state;
  }
};

export default authReducer;
