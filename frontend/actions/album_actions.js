import * as APIUtil from '../util/album_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";

export const fetchAlbum = (albumId) => {
  return (dispatch) => {
    return APIUtil.fetch(albumId)
    .then(
      album => dispatch(receiveAlbum(album)),
      errors => dispatch(receiveErrors(errors))
    );
  };
};

export const fetchAllAlbums = (artistId) => {
  return (dispatch) => {
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

export const updateAlbum = (album, id) => {
  return (dispatch) => {
    return APIUtil.update(album, id)
    .then(
      album => dispatch(receiveAlbum(album)),
      errors => dispatch(receiveErrors(errors))
    );
  };
};

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const receiveAllAlbums = albums => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});
