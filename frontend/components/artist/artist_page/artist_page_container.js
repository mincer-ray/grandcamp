import { connect } from 'react-redux';
import ArtistPage from './artist_page';
import { fetchArtist } from '../../../actions/artist_actions';
import { fetchAllAlbums } from '../../../actions/album_actions';
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
    fetchAllAlbums: (artistId) => dispatch(fetchAllAlbums(artistId))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistPage);
