import React from 'react';

class ArtistNav extends React.Component {
  render () {
    return (
      <nav>
        { this.props.band_name }
        { this.props.bio }
      </nav>
    );
  }
}

export default ArtistNav;
