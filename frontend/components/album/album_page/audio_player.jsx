import React from 'react';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClass: "",
      title: "",
      songFile: "",
      playing: false,
      currentTime: 0,
      buttonClass: "play-btn play",
      songs: {}
    };

    this.playPause = this.playPause.bind(this);
    this.showRange = this.showRange.bind(this);
    this.timeUpdate = this.timeUpdate.bind(this);
    this.timeTracker = this.timeTracker.bind(this);
    this.playSong = this.playSong.bind(this);
  }

  componentDidMount () {
    if (Object.keys(this.props.songs).length > 0 ) {
      this.state = {
        songs: this.props.songs,
        audio: document.getElementById('audio-file'),
        seek: document.getElementById('seek'),
        duration: document.getElementById('audio-file').duration,
        playing: false,
        currentTime: 0,
        buttonClass: "play-btn play",
        currentTrack: 1,
        currentSong: this.props.songs[1].file,
        trackListing: {}
      };

      this.state.audio.addEventListener('timeupdate', this.timeUpdate);
    }
  }

  playPause (e) {
    if (this.state.playing){
      this.state.audio.pause();
      this.setState({playing: false, buttonClass: "play-btn play"});
    } else {
      this.state.audio.play();
      this.setState({playing: true, buttonClass: "play-btn pause"});
    }
  }

  showRange () {
    this.state.audio.currentTime = (parseInt(this.state.seek.value)) * this.state.audio.duration / 100;
  }

  timeUpdate () {
    this.state.seek.value = this.state.audio.currentTime / this.state.audio.duration * 100;
    this.setState({currentTime: this.state.audio.currentTime});
  }

  timeTracker () {
    if(this.state) {
      return(
        <strong>{this.state.currentTime} / { this.state.duration }</strong>
      );
    }
  }

  SongList () {
    // if (Object.keys(this.state.songs).length > 0) {
      return(
        Object.keys(this.state.songs).map((trackNum) => {
          return(<li
            id={ trackNum }
            onClick={ (e) => this.playSong(e) }>{ this.state.songs[trackNum].title }</li>);
        })
      );
    // }
  }

  playSong (e) {
    this.setState({ currentSong: this.state.songs[parseInt(e.currentTarget.id)].file });
    this.timeUpdate();
    this.state.audio.play();
  }

  render () {
    // if (this.props.songs.length > 0){
      return(
        <div className="album-page-left">
          <div className="player-container group">
            <div className="seek-container group">
              <p>{ this.state.title } { this.timeTracker() }</p>
              <audio id="audio-file" src={ `${ this.state.currentSong }` }></audio>
              <input id="seek" type="range" min="0" max="100" step="1" defaultValue="0" onChange={ this.showRange }/>
            </div>
            <div className="button-container group">
              <div className={ this.state.buttonClass } onClick={ this.playPause }/>
            </div>
            <br></br>
          </div>
          <div className="song-list-container group">
            <ol className="song-list">
              { this.SongList() }
            </ol>
          </div>
        </div>
      );
    // } else {
    //   return(<div></div>);
    // }
  }
}

export default AudioPlayer;
