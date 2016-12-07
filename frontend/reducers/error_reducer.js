import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

const ErrorReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      newState = action.errors;
      return newState;
    case CLEAR_ERRORS:
      newState = {};
      return newState;
    default:
      return state;
  }
};

export default ErrorReducer;
