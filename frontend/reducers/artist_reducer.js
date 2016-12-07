import { RECEIVE_ARTIST, UPDATE_ARTIST, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/artist_actions';

const defaultState = {
  band_name: "Your Band Name",
  band_header: "",
  artist_pic: "",
  errors: []
};

const ArtistReducer = (state = defaultState, action) => {
  let newState = Object.assign({}, state);
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ARTIST:
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default ArtistReducer;
