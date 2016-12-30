import { connect } from 'react-redux';
import AlbumPage from './album_page';
import { fetchAlbum, fetchAllAlbums, destroyAlbum, clearAlbums } from '../../../actions/album_actions';
import { fetchArtist, clearArtist } from '../../../actions/artist_actions';
import { finishLoading } from '../../../actions/loading_actions';
import { asArray } from '../../../reducers/selectors';
import { clearErrors } from '../../../actions/error_actions';

function mapStateToProps(state, { params }) {
  return ({
    albums: asArray(state.albums),
    album: state.albums[params.albumId],
    artist: state.artist,
    currentUser: state.session.currentUser,
    loading: state.loading
  });
}

function mapDispatchToProps(dispatch) {
  return({
    dispatch,
    fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
    fetchAllAlbums: (artistId) => dispatch(fetchAllAlbums(artistId)),
    destroyAlbum: (id) => dispatch(destroyAlbum(id)),
    fetchArtist: (artistId) => dispatch(fetchArtist(artistId)),
    clearErrors: () => dispatch(clearErrors()),
    clearAlbums: () => dispatch(clearAlbums()),
    clearArtist: () => dispatch(clearArtist()),
    finishLoading: () => dispatch(finishLoading())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumPage);
