import { RECEIVE_ARTIST, UPDATE_ARTIST } from '../actions/artist_actions';

const defaultState = {
  band_name: "",
  band_header: "",
  artist_pic: "",
  bio: ""
};

const ArtistReducer = (state = defaultState, action) => {
  let newState = Object.assign({}, state);
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ARTIST:
      newState = action.artist;
      return newState;
    default:
      return state;
  }
};

export default ArtistReducer;
