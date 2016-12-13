import React from 'react';

class ArtistForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      band_name: this.props.artist.band_name,
      bio: this.props.artist.bio,
    };

    this.updateState = this.updateState.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  updateState(e) {
    this.setState({[e.currentTarget.id]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("artist[band_name]", this.state.band_name);
    formData.append("artist[bio]", this.state.bio);
    if (this.state.artist_pic != undefined) {
      formData.append("artist[artist_pic]", this.state.artist_pic);
    }
    if (this.state.band_header != undefined) {
      formData.append("artist[band_header]", this.state.band_header);
    }

    this.props.updateArtist(formData, this.redirect.bind(this), null, this.props.artistId);
  }

  redirect() {
    this.props.router.push(`/artist/${ this.props.artistId }`);
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
    return (
      <main className="form-content">
        <section className="form group band">
        <h2>Edit Band</h2>
        <form onSubmit={ this.handleSubmit }>
          <label><p>Band Name</p>
            <input
              id="band_name"
              type="text"
              onChange={ this.updateState }
              value={ this.state.band_name }/>
          </label>
          <label><p>Band Biography</p>
            <textarea
              id="bio"
              onChange={ this.updateState }
              defaultValue={ this.state.bio }>
            </textarea>
          </label>
          <label><p>Artist Pic</p>
            <input
              className="inputfile"
              id="artist_pic"
              type="file"
              onChange={this.updateFile}/>
          </label>
          <label><p>Band Header</p>
            <input
              className="inputfile"
              id="band_header"
              type="file"
              onChange={this.updateFile}/>
          </label>
          <br></br>
          <section>{ this.alerts() }</section>
          <button>Submit Changes</button>
        </form>
        </section>
      </main>
    );
  }
}

export default ArtistForm;
