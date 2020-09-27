export const initialState = {
  term: '',
};

export const actionTypes = {
  setSearchTerm: 'SET_SEARCH_TERM',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.setSearchTerm:
      return {
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};
export default reducer;
