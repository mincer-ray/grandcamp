import React from 'react';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = { username: "", password: "" };
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateState(e) {
    this.setState({[e.currentTarget.id]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const newUser = Object.assign({}, this.state);
    this.props.processForm(newUser).then(() => this.redirect());
  }

  redirect() {
    this.props.router.push("/");
  }

  alerts() {
    if (this.props.errors.responseJSON != undefined) {
      return (
        <ul>
          { this.props.errors.responseJSON.map((error) =>
            <li className="alert">{ error }</li>
          )}
        </ul>
      );
    }
  }

  render () {
    return (
      <main className="session-form-content">
        <section className="session-form group">
        <h2>Account { this.props.formType }</h2>
        <form onSubmit={ this.handleSubmit }>
          <label><p>Username</p>
            <input
              id="username"
              type="text"
              onChange={ this.updateState }
              value={ this.state.username }/>
          </label>
          <label><p>Password</p>
            <input
              id="password"
              type="password"
              onChange={ this.updateState }
              value={ this.state.password }/>
          </label>
          <br></br>
          <section>{ this.alerts() }</section>
          <button>Log in</button>
        </form>
        </section>
      </main>
    );
  }
}

export default SessionForm;
