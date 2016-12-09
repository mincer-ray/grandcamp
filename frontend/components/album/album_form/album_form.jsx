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
        date: this.props.date,
        album_art: this.props.album_art
      };
    } else {
      this.state = {
        id: "",
        title: "",
        description: "",
        date: "",
        album_art: ""
      };
    }

    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
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
    if (this.state.albumArt != undefined) {
      formData.append("album[album_art]", this.state.album_art);
    }
    this.props.processForm(formData, this.redirect.bind(this), null, parseInt(this.props.params.albumId));
  }

  redirect() {
    debugger
    this.props.router.push(`/album/${ this.props.album.id }`);
  }

  updateState(e) {
    this.setState({[e.currentTarget.id]: e.currentTarget.value});
  }

  render () {
    return(
      <main className="form-content">
        <section className="form group album">
        <h2>{ this.props.formType }</h2>
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
              className="inputfile"
              id="date"
              type="date"
              value={ this.state.date }
              onChange={this.updateState}/>
          </label>
          <br></br>
          <Alerts errors={ this.props.errors }/>
          <button>Submit</button>
        </form>
        </section>
      </main>
    );
  }
}

export default AlbumForm;
