import { connect } from 'react-redux';
import ArtistPage from './artist_page';
import { fetchArtist } from '../../../actions/artist_actions';

function mapStateToProps({ artist }, { params }) {
  const artistId = parseInt(params.artistId);
  return ({
    artist,
    artistId
  });
}

function mapDispatchToProps(dispatch, ownProps) {
  return ({
    dispatch,
    fetchArtist: (artistId) => dispatch(fetchArtist(artistId))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistPage);
