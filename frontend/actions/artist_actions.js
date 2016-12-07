import * as APIUtil from '../util/artist_api_util';

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const UPDATE_ARTIST = "UPDATE_ARTIST";

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const fetchArtist = (artist) => {
  return (dispatch) => {
    return APIUtil.fetch(artist)
      .then(
        artist => dispatch(receiveArtist(artist)),
        errors => dispatch(receiveErrors(errors))
      );
  };
};

export const updateArtist = (artist) => {
  return (dispatch) => {
    return APIUtil.update(artist)
      .then(
        artist => dispatch(receiveArtist(artist)),
        errors => dispatch(receiveErrors(errors))
      );
  };
};

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = errors => ({
  type: CLEAR_ERRORS,
  errors
});
