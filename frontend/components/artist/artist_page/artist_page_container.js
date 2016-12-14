import { connect } from 'react-redux';
import ArtistPage from './artist_page';
import { fetchArtist, clearArtist } from '../../../actions/artist_actions';
import { fetchAllAlbums, clearAlbums } from '../../../actions/album_actions';
import { asArray } from '../../../reducers/selectors';

function mapStateToProps(state, { params }) {
  const artistId = parseInt(params.artistId);
  return ({
    artist: state.artist,
    albums: asArray(state.albums),
    artistId,
    loading: state.loading
  });
}

function mapDispatchToProps(dispatch, ownProps) {
  return ({
    dispatch,
    fetchArtist: (artistId) => dispatch(fetchArtist(artistId)),
    fetchAllAlbums: (artistId) => dispatch(fetchAllAlbums(artistId)),
    clearArtist: () => dispatch(clearArtist()),
    clearAlbums: () => dispatch(clearAlbums())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistPage);
