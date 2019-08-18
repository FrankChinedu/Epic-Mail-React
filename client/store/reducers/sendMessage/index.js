const initState = {
  success: false
};

const sendMessage = (state = initState, action) => {
  switch (action.type) {
  case 'SEND_SUCCESS':
    return {
      ...state,
      success: true
    };
  default:
    return state;
  }
};

export default sendMessage;
