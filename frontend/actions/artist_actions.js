import * as APIUtil from '../util/artist_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const UPDATE_ARTIST = "UPDATE_ARTIST";

export const fetchArtist = (artistId) => {
  return (dispatch) => {
    return APIUtil.fetch(artistId)
      .then(
        artist => dispatch(receiveArtist(artist)),
        errors => dispatch(receiveErrors(errors))
      );
  };
};

export const updateArtist = (artist, id) => {
  return (dispatch) => {
    return APIUtil.update(artist, id)
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
