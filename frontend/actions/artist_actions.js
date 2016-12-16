import * as APIUtil from '../util/artist_api_util';
import { receiveErrors } from './error_actions';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const UPDATE_ARTIST = "UPDATE_ARTIST";

export const CLEAR_ARTIST = "CLEAR_ARTIST";

export const fetchArtist = (artistId) => {
  return (dispatch) => {
    return APIUtil.fetch(artistId)
      .then(
        artist => dispatch(receiveArtist(artist)),
        errors => dispatch(receiveErrors(errors))
      );
  };
};

export const updateArtist = (artist, success, failure, id) => {
  return (dispatch) => {
    return APIUtil.update(artist, success, failure, id)
      .then(
        artist => dispatch(receiveCurrentUser(artist)),
        errors => dispatch(receiveErrors(errors))
      );
  };
};

export const updatingArtist = () => ({
  type: UPDATE_ARTIST
});

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const clearArtist = () => ({
  type: CLEAR_ARTIST
});
