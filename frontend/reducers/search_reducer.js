import { RECEIVE_RESULTS } from '../actions/search_actions';

const SearchReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RESULTS:
      newState = action.results;
      return newState;
    default:
      return state;
  }
};

export default SearchReducer;
