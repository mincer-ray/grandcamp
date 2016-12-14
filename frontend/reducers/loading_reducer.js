import { CREATE_ALBUM, RECEIVE_ALBUM, RECEIVE_ALL_ALBUMS } from '../actions/album_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';

const LoadingReducer = (state = false, action) => {
  let newState = false;
  switch (action.type) {
    case CREATE_ALBUM:
    case RECEIVE_ALBUM:
    case RECEIVE_ALL_ALBUMS:
      newState = true;
      return newState;
    default:
      return newState;
  }
};

export default LoadingReducer;
