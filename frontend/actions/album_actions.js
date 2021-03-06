import * as APIUtil from '../util/album_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const CREATE_ALBUM = "CREATE_ALBUM";
export const REQUEST_SINGLE_ALBUM = "REQUEST_SINGLE_ALBUM";
export const REQUEST_ALL_ALBUMS = "REQUEST_ALL_ALBUMS";

export const CLEAR_ALBUMS = "CLEAR_ALBUMS";

export const fetchAlbum = (albumId) => {
  return (dispatch) => {
    dispatch(requestSingleAlbum());
    return APIUtil.fetch(albumId)
    .then(
      album => dispatch(receiveAlbum(album)),
      errors => dispatch(receiveErrors(errors))
    );
  };
};

export const fetchAllAlbums = (artistId) => {
  return (dispatch) => {
    dispatch(requestAllAlbums());
    return APIUtil.fetchAll(artistId)
    .then(
      albums => dispatch(receiveAllAlbums(albums)),
      errors => dispatch(receiveErrors(errors))
    );
  };
};

export const createAlbum = (album) => {
  return (dispatch) => {
    return APIUtil.create(album)
    .then(
      album => dispatch(receiveAlbum(album)),
      errors => dispatch(receiveErrors(errors))
    );
  };
};

export const destroyAlbum = (id) => {
  return (dispatch) => {
    return APIUtil.destroy(id);
  };
};

export const updateAlbum = (album, success, failure, id) => {
  return (dispatch) => {
    return APIUtil.update(album, success, failure, id)
    .then(
      album => dispatch(receiveAlbum(album)),
      errors => dispatch(receiveErrors(errors))
    );
  };
};

export const creatingAlbum = () => ({
  type: CREATE_ALBUM
});

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const receiveAllAlbums = albums => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

export const clearAlbums = () => ({
  type: CLEAR_ALBUMS
});

export const requestSingleAlbum = () => ({
  type: REQUEST_SINGLE_ALBUM
});

export const requestAllAlbums = () => ({
  type: REQUEST_ALL_ALBUMS
});
