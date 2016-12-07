import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const login = (user) => {
  return (dispatch) => {
    return APIUtil.login(user)
      .then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors))
      );
  };
};

export const logout = (user) => {
  return (dispatch) => {
    return APIUtil.logout(user)
      .then(() => dispatch(receiveCurrentUser(null)));
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return APIUtil.signup(user)
      .then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors))
      );
  };
};

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = errors => ({
  type: CLEAR_ERRORS,
  errors
});
