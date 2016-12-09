import { connect } from 'react-redux';
import { updateArtist, fetchArtist } from '../../../actions/artist_actions';
import { clearErrors } from '../../../actions/error_actions';
import ArtistForm from './artist_form';

function mapStateToProps(state) {
  return ({
    artistId: state.session.currentUser.id,
    artist: state.session.currentUser,
    errors: state.errors
  });
}

function mapDispatchToProps(dispatch, ownProps) {
  return ({
    clearErrors: () => dispatch(clearErrors()),
    fetchArtist: (artistId) => dispatch(fetchArtist(artistId)),
    updateArtist: (artist, success, failure, id) => dispatch(updateArtist(artist, success, failure, id)),
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistForm);
