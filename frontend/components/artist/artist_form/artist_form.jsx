import React from 'react';
import Spinner from '../../spinner/spinner';

class ArtistForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      band_name: this.props.artist.band_name,
      bio: this.props.artist.bio,
      primary_color: this.props.artist.primary_color,
      secondary_color: this.props.artist.secondary_color,
      text_color: this.props.artist.text_color
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
    formData.append("artist[primary_color]", this.state.primary_color);
    formData.append("artist[secondary_color]", this.state.secondary_color);
    formData.append("artist[text_color]", this.state.text_color);
    if (this.state.artist_pic != undefined) {
      formData.append("artist[artist_pic]", this.state.artist_pic);
    }
    if (this.state.band_header != undefined) {
      formData.append("artist[band_header]", this.state.band_header);
    }
    this.props.updatingArtist();
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
    if (this.props.loading) {
      return (
        <Spinner />
      );
    } else {
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
            <label><p>Primary</p>
              <input
                id="primary_color"
                type="color"
                onChange={this.updateState}
                value={ this.state.primary_color }/>
            </label>
            <label><p>Secondary</p>
              <input
                id="secondary_color"
                type="color"
                onChange={this.updateState}
                value={ this.state.secondary_color }/>
            </label>
            <label><p>Text</p>
              <input
                id="text_color"
                type="color"
                onChange={this.updateState}
                value={ this.state.text_color }/>
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
}

export default ArtistForm;
