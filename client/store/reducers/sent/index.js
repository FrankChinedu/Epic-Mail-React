const initState = {
  sent: [],
  setSent: false
};

const SentReducer = (state = initState, action) => {
  switch (action.type) {
  case 'SENT_SUCCESS':
    return {
      ...state,
      sent: [...action.payload],
      setSent: true
    };
  default:
    return state;
  }
};

export default SentReducer;
