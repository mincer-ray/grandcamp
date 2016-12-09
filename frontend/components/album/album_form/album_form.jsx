import React from 'react';

class AlbumForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      date: "",
      album_art: ""
    };

    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
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
    formData.append("album[album_art]", this.state.album_art);
    this.props.processForm(formData, parseInt(this.props.params.albumId));
  }

  updateState(e) {
    this.setState({[e.currentTarget.id]: e.currentTarget.value});
  }

  alerts() {
    if (this.props.errors.responseJSON != undefined) {
      return (
        <ul>
          { this.props.errors.responseJSON.map((error, i) =>
            <li className="alert" key={ i }>{ error }</li>
          )}
        </ul>
      );
    }
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
              onChange={this.updateState}/>
          </label>
          <br></br>
          <section>{ this.alerts() }</section>
          <button>Submit</button>
        </form>
        </section>
      </main>
    );
  }
}

export default AlbumForm;
