import { RECEIVE_ALBUM, RECEIVE_ALL_ALBUMS } from '../actions/album_actions';

const defaultState = {
};

const AlbumReducer = (state = defaultState, action) => {
  let newState = Object.assign({}, state);
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
      newState = action.albums;
      return newState;
    case RECEIVE_ALBUM:
      newState[[action.album.id]] = action.album;
      return newState;
    default:
      return state;
  }
};

export default AlbumReducer;
