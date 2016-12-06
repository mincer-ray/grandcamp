import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_CURRENT_ERRORS = "RECEIVE_CURRENT_ERRORS";

export const login = (user) => {
  return (dispatch) => {
    return APIUtil.login(user)
      .then(user => dispatch(receiveCurrentUser(user)));
  };
};

export const logout = (user) => {
  return (dispatch) => {
    return APIUtil.logout(user)
      .then(user => dispatch(receiveCurrentUser(null)));
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return APIUtil.signup(user)
      .then(user => dispatch(receiveCurrentUser(user)));
  };
};

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_CURRENT_ERRORS,
  user
});
