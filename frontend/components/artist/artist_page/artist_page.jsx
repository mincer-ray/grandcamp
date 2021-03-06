import React from 'react';
import { Link } from 'react-router';
import AlbumIndex from '../../album/album_index/album_index';
import Spinner from '../../spinner/spinner';

class ArtistPage extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllAlbums(this.props.params.artistId)
      .then(() => this.props.fetchArtist(this.props.params.artistId)
      .then(() => this.props.finishLoading())
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.artistId !== nextProps.params.artistId) {
      this.props.fetchAllAlbums(nextProps.params.artistId)
        .then(() => this.props.fetchArtist(nextProps.params.artistId)
        .then(() => this.props.finishLoading())
      );
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
      <main className="album-index-container" style={ {color: this.props.artist.text_color }}>
        <ul>
          { this.props.albums.map(album => {
            return(
              <li key={ album.id }>
                <Link to={ `/album/${ album.id }` }>
                <div className="album-display-wrapper">
                  <img src={ album.album_art }/>
                  <h2>{ album.title }</h2>
                </div>
                </Link>
              </li>);
            }) }
          </ul>
      </main>
    );
  }

  render () {
    if (this.props.artist.primary_color && document.getElementsByClassName("root")[0] != undefined) {
      document.getElementsByClassName("root")[0].style = `background: ${ this.props.artist.primary_color } !important;`;
    }
    if (this.props.loading) {
      return (
        <Spinner />
      );
    } else {
      return (
        <main className="artist-page-container group" style={ {backgroundColor: this.props.artist.secondary_color, color: this.props.artist.text_color }}>
          <div>
            <header className="artist-header-image">
              <Link to={ `/artist/${ this.props.artistId }` }>
                <img src={ this.props.artist.band_header } />
              </Link>
            </header>
            { this.AlbumIndex() }
            { this.ArtistSidebar() }
          </div>
        </main>
      );
    }
  }
}

export default ArtistPage;

// return(
//   <div className="artist-page-container group">
//     <section className="form">
//       <div id="loader">
//         <div id="box"></div>
//         <div id="hill"></div>
//       </div>
//     </section>
//   </div>
// );
