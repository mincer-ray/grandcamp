import { CREATE_ALBUM, REQUEST_SINGLE_ALBUM, REQUEST_ALL_ALBUMS, CLEAR_ALBUMS,
RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ARTIST, UPDATE_ARTIST } from '../actions/artist_actions';

const LoadingReducer = (state = false, action) => {
  let newState = false;
  switch (action.type) {
    case CREATE_ALBUM:
    case CLEAR_ALBUMS:
    case RECEIVE_ALL_ALBUMS:
    case RECEIVE_ALBUM:
    case REQUEST_SINGLE_ALBUM:
    case REQUEST_ALL_ALBUMS:
    case RECEIVE_ARTIST:
    case UPDATE_ARTIST:
      newState = true;
      return newState;
    default:
      return newState;
  }
};

export default LoadingReducer;
