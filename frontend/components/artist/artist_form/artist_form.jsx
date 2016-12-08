import React from 'react';

class ArtistForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      band_name: this.props.artist.band_name,
      bio: this.props.artist.bio
    };
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateState(e) {
    this.setState({[e.currentTarget.id]: e.currentTarget.value});
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.artistId !== nextProps.artistId)
      this.props.fetchArtist(nextProps.artistId);
  }

  handleSubmit(e) {
    e.preventDefault();
    const updateParams = Object.assign({}, this.state);
    this.props.updateArtist(updateParams, this.props.artistId).then(
      () => this.redirect()
    );
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
      <main className="session-form-content">
        <section className="session-form group">
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
