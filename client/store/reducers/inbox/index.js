const initState = {
  inbox: [],
  setInbox: false
};

const InboxReducer = (state = initState, action) => {
  switch (action.type) {
  case 'INBOX_SUCCESS':
    return {
      ...state,
      inbox: [...action.payload],
      setInbox: true
    };
  default:
    return state;
  }
};

export default InboxReducer;
