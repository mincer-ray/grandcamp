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

  render () {
    return (
      <main className="artist-page-container">
        { this.props.artist.band_name }
      </main>
    );
  }
}

export default ArtistPage;
