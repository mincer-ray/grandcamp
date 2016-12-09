import { connect } from 'react-redux';
import { createAlbum, updateAlbum } from '../../../actions/album_actions';
import AlbumForm from './album_form';

function mapStateToProps(state, { params }) {
  let albumId = parseInt(params.albumId);
  return ({
    album: state.albums[albumId],
    errors: state.errors
  });
}

function mapDispatchToProps(dispatch, ownProps) {
  let formType = ownProps.location.pathname.slice(1);
  let func = "";

  if (formType === 'new-album') {
    func = createAlbum;
    formType = "New Album";
  } else {
    func = updateAlbum;
    formType = "Edit Album";
  }

  return ({
    formType,
    processForm: (album, id) => dispatch(func(album, id)),
    clearErrors: () => dispatch(clearErrors())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumForm);
