import { RECEIVE_CURRENT_USER, RECEIVE_CURRENT_ERRORS } from '../actions/session_action';

const SessionReducer = (state = { currentUser: null, errors: [] }, action) => {
  let newState = Object.assign({}, state);
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      return newState;
    case RECEIVE_CURRENT_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
