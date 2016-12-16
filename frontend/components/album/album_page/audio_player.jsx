import React from 'react';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';
import { saveAs } from 'file-saver';

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
    this.autoPlay = this.autoPlay.bind(this);
    this.nextTrack = this.nextTrack.bind(this);
    this.prevTrack = this.prevTrack.bind(this);
    this.downloadZip = this.downloadZip.bind(this);
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

      this.state.audio.volume = 0.1;
      this.state.audio.addEventListener('timeupdate', this.timeUpdate);
      this.state.audio.addEventListener('loadeddata', this.autoPlay);
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
    if (this.state.playing){
      this.setState({playing: true, buttonClass: "play-btn pause"});
    } else {
      this.setState({playing: false, buttonClass: "play-btn play"});
    }

    if (this.state.audio.ended) {
      this.nextTrack();
    }
  }

  timeTracker () {
    if(this.state) {
      return(
        <strong>{this.padTime(this.state.currentTime)} / { this.padTime(this.state.duration) }</strong>
      );
    }
  }

  padTime (time) {
    if (time === undefined) {
      return "00:00";
    }
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
              onClick={ (e) => this.playSong(e) }>{ this.state.songs[trackNum].title } { this.padTime(this.state.songs[trackNum].duration) }
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

  downloadZip () {
    let zip = new JSZip();
    let songs = Object.keys(this.state.songs).map((key) => {
      return this.state.songs[key];
    });
    songs.forEach((song) => {
      JSZipUtils.getBinaryContent(song.file, (err, data) => {
        zip.file(`${song.title}.mp3`, data, {binary:true});
      });
    });

    zip.generateAsync({type:"blob"}).then((content) => saveAs(content, `${this.props.album.title}.zip`));
  }

  playSong (e) {
    this.setState({
      currentSong: this.state.songs[parseInt(e.currentTarget.id)].file,
      title: this.state.songs[parseInt(e.currentTarget.id)].title,
      playing: true,
      currentTime: 0,
      currentTrack: parseInt(e.currentTarget.id)
    });
    this.state.audio.src = this.state.currentSong;
    this.state.seek.value = 0;
    this.state.audio.load();
  }

  autoPlay () {
    if (this.state.playing) {
      this.state.audio.play();
    }
  }

  nextTrack () {
    if (Object.keys(this.state.songs).length > this.state.currentTrack){
      this.playSong({currentTarget: {id: this.state.currentTrack + 1}});
    }
  }

  prevTrack () {
    if (this.state.currentTrack > 1) {
      this.playSong({currentTarget: {id: this.state.currentTrack - 1}});
    }
  }

  render () {
    return(
      <div className="album-page-left">
        <div className="player-container group">
          <div className="seek-container group">
            <p>{ this.state.title } { this.timeTracker() }</p>
            <audio id="audio-file" src={ `${ this.state.currentSong }` }></audio>
            <input id="seek" type="range" min="0" max="100" step="1" defaultValue="0" onChange={ this.showRange }/>
            <div className="track-control">
              <div
                className="prev-track"
                onClick={ this.prevTrack }/>
              <div
                className="next-track"
                onClick={ this.nextTrack }/>
            </div>
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
  }
}

export default AudioPlayer;
