import React from 'react';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
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
    this.downloadSong = this.downloadSong.bind(this);
  }

  componentDidMount () {
    if (Object.keys(this.props.songs).length > 0 ) {
      this.state = {
        songs: this.props.songs,
        audio: document.getElementById('audio-file'),
        seek: document.getElementById('seek'),
        playing: false,
        currentTime: 0,
        buttonClass: "play-btn play",
        currentTrack: 1,
        currentSong: this.props.songs[1].file,
        title: this.props.songs[1].title,
        trackListing: {},
        duration: 0
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
    this.setState({currentTime: this.state.audio.currentTime, duration: this.state.audio.duration });
  }

  timeTracker () {
    if(this.state) {
      return(
        <strong>{this.padTime(this.state.currentTime)} / { this.padTime(this.state.duration) }</strong>
      );
    }
  }

  padTime (time) {
    let secondsPad = "";
    let minutesPad = "";
    let seconds = Math.floor(time);
    let minutes = Math.floor(seconds/60);
    seconds = seconds - (minutes * 60);
    if (seconds < 10) {
      secondsPad = "0";
    } else if (seconds === 0) {
      secondsPad = "00";
    }
    if (minutes < 10) {
      minutesPad = "0";
    } else if (minutes === 0) {
      minutesPad = "00";
    }
    return(
      minutesPad + minutes + ":" + secondsPad + seconds
    );
  }

  SongList () {
    // if (Object.keys(this.state.songs).length > 0) {
      return(
        Object.keys(this.state.songs).map((trackNum) => {
          return(
            <div key={ trackNum } className="song-li-container group">
              <li
              id={ trackNum }
              onClick={ (e) => this.playSong(e) }>{ this.state.songs[trackNum].title }
              </li>
              <a
                className="download-link"
                download={ this.state.songs[trackNum].title }
                href={ this.state.songs[trackNum].file }>download</a>
            </div>);
        })
      );
    // }
  }

  downloadSong(e) {
    this.state.songs[parseInt(e.currentTarget.id)].file;
  }

  playSong (e) {
    this.setState({
      currentSong: this.state.songs[parseInt(e.currentTarget.id)].file,
      title: this.state.songs[parseInt(e.currentTarget.id)].title,
      playing: false,
      currentTime: 0
    });
    this.state.seek.value = 0;
    this.timeUpdate();
    this.playPause();
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
          </div>
          <div className="song-list-container group">
            <ol className="song-list group">
              { this.SongList() }
            </ol>
          </div>
          <div>
            <p className="album-description">{ this.props.album.description }</p>
            <br></br>
            <p>released { this.props.album.date }</p>
          </div>
        </div>
      );
    // } else {
    //   return(<div></div>);
    // }
  }
}

export default AudioPlayer;
