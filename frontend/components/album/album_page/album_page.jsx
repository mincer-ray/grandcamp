import React from 'react';
import { Link } from 'react-router';
import AudioPlayer from './audio_player';
import { songList } from '../../../reducers/selectors';

class AlbumPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      time: 0
    };
  }

  componentDidMount() {
    this.props.clearAlbums();
    this.props.clearArtist();
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
    if ( this.props.currentUser && this.props.currentUser.id === this.props.album.artist_id ) {
      return(
        <div className="edit-button">
          <Link to={ `/album/${ this.props.album.id }/edit` } onClick={ this.props.clearErrors }><p>Edit</p></Link>
        </div>
      );
    } else {
      return(
        <p></p>
      );
    }
  }

  // <Link to={ `/artist/${ this.props.album.artist_id }` } onClick={ this.props.destroyAlbum(this.props.album.id) }><p>Delete Album</p></Link>

  render () {
    if (this.props.artist.primary_color && document.getElementsByClassName("root")[0] != undefined) {
      document.getElementsByClassName("root")[0].style = `background: ${ this.props.artist.primary_color };`;
    }
    if (this.props.album && this.props.album.songs) {
      return(
        <div className="album-content-container group" style={ {backgroundColor: this.props.artist.secondary_color, color: this.props.artist.text_color }}>
          <header className="artist-header-image">
            <Link to={ `/artist/${ this.props.artist.id }` }>
              <img src={ this.props.artist.band_header } />
            </Link>
          </header>
          <main className="album-content group">
            <section className="album-play-container group">
              <h2 style={ {color: this.props.artist.primary_color }}>{ this.props.album.title }</h2>
              <h3>by <Link to={ `/artist/${ this.props.artist.id }` }>
                  <strong className="artist-name" style={ {color: this.props.artist.primary_color }}>
                    { this.props.artist.band_name }
                  </strong>
                </Link>
              </h3>
              { this.EditButtons() }
              <AudioPlayer songs={ songList(this.props.album.songs) } album={ this.props.album }/>
            </section>
            <section className="album-art-container">
              <div className="art-container"><img src={ this.props.album.album_art }/></div>
            </section>
          </main>
          { this.ArtistSidebar() }
        </div>
      );
    } else {
      return(
        <div className="album-content-container group">
          <section className="form">
            <div id="loader">
              <div id="box"></div>
              <div id="hill"></div>
            </div>
          </section>
        </div>
      );
    }
  }
}

export default AlbumPage;
