const initState = {
  draft: [],
  setDraft: false
};

const DraftReducer = (state = initState, action) => {
  switch (action.type) {
  case 'DRAFT_SUCCESS':
    return {
      ...state,
      draft: [...action.payload],
      setDraft: true
    };
  default:
    return state;
  }
};

export default DraftReducer;
