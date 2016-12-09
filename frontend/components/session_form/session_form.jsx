import React from 'react';
import Alerts from '../error/alerts';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = { username: "", password: "" };
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guest = this.guest.bind(this);
    this.useGuest = this.useGuest.bind(this);
  }

  updateState(e) {
    this.setState({[e.currentTarget.id]: e.currentTarget.value});
  }

  componentWillReceiveProps() {
    this.state.password = "";
  }

  handleSubmit(e) {
    e.preventDefault();
    const newUser = Object.assign({}, this.state);
    this.props.processForm(newUser).then(
      () => this.redirect(),
      () => this.state.password = ""
    );
  }

  redirect() {
    this.props.router.push("/");
  }

  guest() {
    if (this.props.formType === "Log in") {
      return (
        <button className="guest" onClick={ this.useGuest }>Guest login</button>
      );
    }
  }

  useGuest() {
    this.state = { username: "Best Guest", password: "password" };
  }

  render () {
    return (
      <main className="form-content">
        <section className="form group">
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
          <Alerts errors={ this.props.errors }/>
          <button>{ this.props.formType }</button>
          { this.guest() }
        </form>
        </section>
      </main>
    );
  }
}

export default SessionForm;
