import React from 'react';
import { Link } from 'react-router';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <main className="album-index-container">
        <ul>{ this.props.albums.map(album => <li>album.title</li>) }</ul>
      </main>
    );
  }
}

export default AlbumIndex;
