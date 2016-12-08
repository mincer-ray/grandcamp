import React from 'react';
import { Link } from 'react-router';
import AlbumIndex from '../../album/album_index/album_index';

class ArtistPage extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllAlbums(this.props.artistId);
    this.props.fetchArtist(this.props.artistId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.artistId !== nextProps.artistId) {
      this.props.fetchAllAlbums(nextProps.artistId);
      this.props.fetchArtist(nextProps.artistId);
    }
  }

  ArtistSidebar () {
    return (
      <sidebar className="artist-sidebar">
        <img src={ this.props.artist.artist_pic } />
        <h2>{ this.props.artist.band_name }</h2>
        <p>{ this.props.artist.bio }</p>
      </sidebar>
    );
  }

  AlbumIndex () {
    return (
      <main className="album-index-container">
        <ul>
          { this.props.albums.map(album => {
            return(
              <li key={ album.id }>
                <div className="album-display-wrapper">
                  <img src={ album.album_art }/>
                  { album.title }
                </div>
              </li>);
            }) }
          </ul>
      </main>
    );
  }

  render () {
    return (
      <main className="artist-page-container">
        <div>
          <header className="artist-header-image"><img src={ this.props.artist.band_header } /></header>
          { this.AlbumIndex() }
          { this.ArtistSidebar() }
        </div>
      </main>
    );
  }
}

export default ArtistPage;
