import React from 'react';

class SongForm extends React.Component {
  render() {
    return(
      <li>
        <label><p>Title</p>
          <input
            id={ `songTitle${ this.props.trackCount }` }
            type='text'
            defaultValue={ this.props.title }
            onChange={ this.props.updateState }/>
        </label>
        <label><p>Track #</p>
          <input
            id={ `songTrack_Num${ this.props.trackCount }` }
            type='text'
            defaultValue={ this.props.trackNum }
            onChange={ this.props.updateState }/>
        </label>
        <label><p>Audio File</p>
          <input
            id={ `songFile${ this.props.trackCount }` }
            type='file'
            onChange={ this.props.updateFile }/>
        </label>
      </li>
    );
  }
}

export default SongForm;
