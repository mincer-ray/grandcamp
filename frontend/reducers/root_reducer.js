import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ArtistReducer from './artist_reducer';
import ErrorReducer from './error_reducer';
import AlbumReducer from './album_reducer';
import SearchReducer from './search_reducer';
import LoadingReducer from './loading_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  artist: ArtistReducer,
  errors: ErrorReducer,
  albums: AlbumReducer,
  search: SearchReducer,
  loading: LoadingReducer
});

export default rootReducer;
