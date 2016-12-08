import { connect } from 'react-redux';
import AlbumPage from './album_page';
import { fetchAlbum, fetchAllAlbums } from '../../../actions/album_actions';
import { fetchArtist } from '../../../actions/artist_actions';

function mapStateToProps(state, { params }) {
  let albumId = parseInt(params.albumId);
  return ({
    album: state.albums[albumId],
    artist: state.artist
  });
}

function mapDispatchToProps(dispatch) {
  return({
    dispatch,
    fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
    fetchAllAlbums: (albumId) => dispatch(fetchAllAlbums(albumId)),
    fetchArtist: (artistId) =>dispatch(fetchArtist(artistId))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumPage);
