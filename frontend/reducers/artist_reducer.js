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
      newState.artist = action.artist;
      return newState;
    default:
      return state;
  }
};

export default ArtistReducer;
