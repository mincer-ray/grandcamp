import { CREATE_ALBUM } from '../actions/album_actions';

const LoadingReducer = (state = false, action) => {
  let newState = false;
  switch (action.type) {
    case CREATE_ALBUM:
      newState = true;
      return newState;
    default:
      return newState;
  }
};

export default LoadingReducer;
