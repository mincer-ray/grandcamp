import React from 'react';
import Alerts from '../../error/alerts';

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
  }

  componentDidMount() {
    if (this.formType === "Edit Album") {
      this.props.fetchAlbum(this.props.params.albumId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.formType === "Edit Album") {
      if (this.props.albumId !== parseInt(nextProps.params.albumId)) {
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

  songForm() {
    return(
      <li key={ this.state.trackCount }>
        <p>Track { this.state.trackCount }</p>
        <label><p>Title</p>
          <input
            id={ `songTitle${ this.state.trackCount }` }
            type='text'
            onChange={ this.updateState }/>
        </label>
        <label><p>Track #</p>
          <input
            id={ `songTrack_Num${ this.state.trackCount }` }
            type='text'
            onChange={ this.updateState }/>
        </label>
        <label><p>Audio File</p>
          <input
            id={ `songFile${ this.state.trackCount }` }
            type='file'
            onChange={ this.updateFile }/>
        </label>
      </li>
    );
  }

  addSongForm() {
    let newForms = this.state.trackForms;
    newForms.push(this.songForm());
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
        <main className="form-content">
          <section className="form">
            <div id="loader">
              <div id="box"></div>
              <div id="hill"></div>
            </div>
          </section>
        </main>
      );
    } else {
      return(
        <main className="form-content">
          <section className="form group album">
          { this.deleteAlbumButton() }
          <form onSubmit={ this.handleSubmit }>
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
            <a onClick={ this.removeSongForm }>-Remove Song-</a>
            <ul className="trackForms group">
              { this.state.trackForms }
            </ul>
            <a onClick={ this.addSongForm }>+Add Song+</a>
            <br></br>
            <Alerts errors={ this.props.errors }/>
            <button className="album-submit-button" type="submit">Submit</button>
          </form>
          </section>
        </main>
      );
    }
  }
}

export default AlbumForm;
