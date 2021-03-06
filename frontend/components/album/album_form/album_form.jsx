import React from 'react';
import Alerts from '../../error/alerts';
import SongForm from './song_form';
import Spinner from '../../spinner/spinner';

class AlbumForm extends React.Component {
  constructor (props) {
    super(props);

    if (this.props.album) {
      this.state = {
        id: this.props.album.id,
        title: this.props.album.title,
        description: this.props.album.description,
        date: this.props.album.date,
        album_art: this.props.album_art,
        trackCount: 1,
        trackForms: []
      };
    } else {
      this.state = {
        id: "",
        title: "",
        description: "",
        date: "",
        album_art: "",
        trackCount: 1,
        trackForms: []
      };
    }

    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.addSongForm = this.addSongForm.bind(this);
    this.removeSongForm = this.removeSongForm.bind(this);
    this.deleteAlbum = this.deleteAlbum.bind(this);
    this.deleteAlbumButton = this.deleteAlbumButton.bind(this);
    this.defaultSongForms = this.defaultSongForms.bind(this);
  }

  componentDidMount() {
    if (this.formType === "Edit Album") {
      this.props.fetchAlbum(this.props.params.albumId);
    }
    if (this.props.album) {
      this.defaultSongForms();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.formType === "Edit Album") {
      if (this.props.params.albumId !== parseInt(nextProps.params.albumId)) {
        this.props.fetchAlbum(nextProps.params.albumId);
      }
    }
  }

  updateFile (e) {
    let file = e.currentTarget.files[0];
    const type = e.currentTarget.id;
    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ [type]: file });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("album[title]", this.state.title);
    formData.append("album[description]", this.state.description);
    formData.append("album[date]", this.state.date);
    if (this.state.album_art != undefined) {
      formData.append("album[album_art]", this.state.album_art);
    }
    if (this.state.trackCount > 1) {
      for (var key in this.state) {
        if (key.slice(0, 4) === "song") {
          let id = key[key.length-1];
          let type = key.slice(4);
          type = type.substring(0, type.length-1).toLowerCase();
          formData.append(`album[songs_attributes][${ id }][${ type }]`, this.state[key]);
        }
      }
    }
    this.props.creatingAlbum();
    this.props.processForm(formData, null, null, parseInt(this.props.params.albumId)).then(
      () => this.redirect()
    );
  }

  redirect() {
    this.props.router.push(`/artist/${ this.props.userId }`);
  }

  updateState(e) {
    this.setState({[e.currentTarget.id]: e.currentTarget.value});
  }

  songForm(title, trackNum, trackCount = this.state.trackCount) {
    return(
      <SongForm
        key= { `${Math.random()}` }
        trackCount={ trackCount }
        updateState={ this.updateState }
        updateFile={ this.updateFile }
        title={ title }
        trackNum={ trackNum }
        />
    );
  }

  defaultSongForms () {
    let trackCount = 1;
    let songsInOrder = [];
    while ( songsInOrder.length < this.props.album.songs.length ) {
      this.props.album.songs.forEach(song => {
        if ( song.track_num === trackCount ) {
          songsInOrder.push(song);
        }
      });
      trackCount += 1;
    }

    trackCount = 1;
    let trackForms = songsInOrder.map((song) => {
      this.setState({
        [`songTitle${trackCount}`]: song.title,
        [`songTrack_Num${trackCount}`]: song.track_num,
        [`songId${trackCount}`]: song.id});
      trackCount = trackCount + 1;
      return(
        this.songForm(song.title, song.track_num, song.track_num)
      );
    });

    this.setState({ trackForms, trackCount });
  }

  addSongForm() {
    let newForms = this.state.trackForms;
    newForms.push(this.songForm("", ""));
    this.setState({ trackForms: newForms, trackCount: this.state.trackCount + 1 });
  }

  removeSongForm() {
    let oldForms = this.state.trackForms;
    oldForms.pop();
    this.setState({ trackForms: oldForms, trackCount: this.state.trackCount - 1});
  }

  deleteAlbumButton() {
    if (this.props.formType === "New Album") {
      return(
        <h2>{ this.props.formType }</h2>
      );
    } else {
      return(
        <h2>{ this.props.formType } <strong
          className="danger"
          onClick={ this.deleteAlbum }>delete album</strong></h2>
      );
    }
  }

  deleteAlbum () {
    this.props.destroyAlbum(this.state.id).then(() => this.redirect());
  }

  render () {
    if (this.props.loading) {
      return (
        <Spinner />
      );
    } else {
      return(
        <main className="form-content group">
          <section className="form group album">
          { this.deleteAlbumButton() }
          <form onSubmit={ this.handleSubmit }>
            <div className="info">
            <label><p>Album Title</p>
              <input
                id="title"
                type="text"
                onChange={ this.updateState }
                value={ this.state.title }/>
            </label>
            <label><p>Description</p>
              <textarea
                id="description"
                onChange={ this.updateState }
                defaultValue={ this.state.description }>
              </textarea>
            </label>
            <label><p>Album Art</p>
              <input
                className="inputfile"
                id="album_art"
                type="file"
                onChange={this.updateFile}/>
            </label>
            <label><p>Release Date</p>
              <input
                id="date"
                type="date"
                value={ this.state.date }
                onChange={this.updateState}/>
            </label>
            <Alerts errors={ this.props.errors }/>
            <button className="album-submit-button" type="submit">Submit</button>
            </div>
            <div className="tracks">
            <a onClick={ this.removeSongForm }>-Remove Song-</a>
            <ul className="trackForms group">
              { this.state.trackForms }
            </ul>
            <a onClick={ this.addSongForm }>+Add Song+</a>
            <br></br>
            </div>
          </form>
          </section>
        </main>
      );
    }
  }
}

export default AlbumForm;
