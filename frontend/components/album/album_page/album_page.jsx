import React from 'react';
import { Link } from 'react-router';

class AlbumPage extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.params.albumId)
      .then(() => this.props.fetchArtist(this.props.album.artist_id));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.albumId !== nextProps.albumId) {
      this.props.fetchAlbum(nextProps.albumId)
        .then(() => this.props.fetchArtist(this.props.album.artist_id));
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

  EditButtons () {
    if ( this.props.currentUser.id === this.props.album.artist_id ) {
      return(
        <div>
          <Link to={ `/album/${ this.props.album.id }/edit` } onClick={ this.props.clearErrors }><p>Edit Album</p></Link>
        </div>
      );
    } else {
      return(
        <p>not logged in</p>
      );
    }
  }
  // <Link to={ `/artist/${ this.props.album.artist_id }` } onClick={ this.props.destroyAlbum(this.props.album.id) }><p>Delete Album</p></Link>

  render () {
    if (this.props.album) {
      return(
        <div className="album-content-container group">
          <header className="artist-header-image"><img src={ this.props.artist.band_header } /></header>
          <main className="album-content group">
            <section className="album-play-container">
              <h2>{ this.props.album.title }</h2>
              <h3>by <strong>{ this.props.artist.band_name }</strong></h3>
              { this.EditButtons() }
            </section>
            <section className="album-art-container">
              <div className="art-container"><img src={ this.props.album.album_art }/></div>
            </section>
          </main>
          { this.ArtistSidebar() }
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default AlbumPage;
