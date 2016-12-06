import React from 'react';

class SessionForm extends React.Component {
  render () {
    return (
      <main className="session-form-content">
        <section className="session-form group">
        <h2>Account { this.props.formType }</h2>
        <form>
          <label><p>Username</p>
            <input type="text"></input>
          </label>
          <label><p>Password</p>
            <input type="password"></input>
          </label>
          <br></br>
          <button>Log in</button>
        </form>
        </section>
      </main>
    );
  }
}

export default SessionForm;
