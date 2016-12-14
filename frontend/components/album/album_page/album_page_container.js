import { connect } from 'react-redux';
import AlbumPage from './album_page';
import { fetchAlbum, fetchAllAlbums, destroyAlbum } from '../../../actions/album_actions';
import { fetchArtist } from '../../../actions/artist_actions';
import { clearErrors } from '../../../actions/error_actions';

function mapStateToProps(state, { params }) {
  let albumId = parseInt(params.albumId);
  return ({
    album: state.albums[albumId],
    artist: state.artist,
    currentUser: state.session.currentUser,
    loading: state.loading
  });
}

function mapDispatchToProps(dispatch) {
  return({
    dispatch,
    fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
    fetchAllAlbums: (albumId) => dispatch(fetchAllAlbums(albumId)),
    destroyAlbum: (id) => dispatch(destroyAlbum(id)),
    fetchArtist: (artistId) => dispatch(fetchArtist(artistId)),
    clearErrors: () => dispatch(clearErrors())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumPage);
