import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ArtistReducer from './artist_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  artist: ArtistReducer
});

export default rootReducer;
