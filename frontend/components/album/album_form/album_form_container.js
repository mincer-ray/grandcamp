import { connect } from 'react-redux';
import { createAlbum, updateAlbum, fetchAlbum, destroyAlbum, creatingAlbum } from '../../../actions/album_actions';
import AlbumForm from './album_form';

function mapStateToProps(state, { params }) {
  let albumId = parseInt(params.albumId);
  return ({
    userId: state.session.currentUser.id,
    albumId,
    album: state.albums[albumId],
    errors: state.errors,
    loading: state.loading
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
    processForm: (album, success, failure, id) => dispatch(func(album, success, failure, id)),
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    clearErrors: () => dispatch(clearErrors()),
    destroyAlbum: (id) => dispatch(destroyAlbum(id)),
    creatingAlbum: () => dispatch(creatingAlbum())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumForm);
