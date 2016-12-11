import React from 'react';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClass: ""
    };

    this.playPause = this.playPause.bind(this);
    this.showRange = this.showRange.bind(this);
    this.timeUpdate = this.timeUpdate.bind(this);
    this.timeTracker = this.timeTracker.bind(this);
  }

  componentDidMount () {
    this.state = {
      audio: document.getElementById('audio-file'),
      seek: document.getElementById('seek'),
      duration: document.getElementById('audio-file').duration,
      currentTime: 0,
      playing: false,
      buttonClass: "play-btn play"
    };

    this.state.audio.addEventListener('timeupdate', this.timeUpdate);
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

  render () {
    return(
      <div className="player-container group">
        <div className="seek-container">
          <p>{ this.props.songs[0].title } { this.timeTracker() }</p>
          <audio id="audio-file" src={ `${ this.props.songs[0].file }` }></audio>
          <input id="seek" type="range" min="0" max="100" step="1" defaultValue="0" onChange={ this.showRange }/>
        </div>
        <div className="button-container">
          <div className={ this.state.buttonClass } onClick={ this.playPause }/>
        </div>
        <br></br>
      </div>
    );
  }
}

export default AudioPlayer;
