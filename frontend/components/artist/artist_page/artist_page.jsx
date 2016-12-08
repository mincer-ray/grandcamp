import React from 'react';
import { Link } from 'react-router';

class ArtistPage extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.artistId !== nextProps.artistId)
      this.props.fetchArtist(nextProps.artistId);
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
    return (
      <main className="artist-page-container">
        <div>
          <header className="artist-header-image"><img src={ this.props.artist.band_header } /></header>
          { this.ArtistSidebar() }
        </div>
      </main>
    );
  }
}

export default ArtistPage;
