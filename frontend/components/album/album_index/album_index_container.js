import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { fetchAllAlbums } from '../../../actions/album_actions';

function mapStateToProps(state) {
  return ({
    albums: Array.from(state.albums)
  });
}

function mapDispatchToProps(dispatch) {
  return ({
    dispatch,
    fetchAllAlbums: (artistId) => dispatch(fetchAllAlbums(artistId))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);
