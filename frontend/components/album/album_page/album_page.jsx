import React from 'react';

class AlbumPage extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.params.albumId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.albumId !== nextProps.albumId) {
      this.props.fetchAlbum(nextProps.albumId);
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

  render () {
    if (this.props.album) {
      return(
        <div className="album-content-container group">
          <main className="album-content group">
            <section className="album-play-container">
              <h2>{ this.props.album.title }</h2>
              <h3>by <strong>{ this.props.artist.band_name }</strong></h3>
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
