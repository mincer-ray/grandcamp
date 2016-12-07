import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
  constructor (props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout () {
    this.props.logout();
  }

  navLinks () {
    if ( this.props.currentUser != undefined ) {
      return(
        <ul className="nav-links">
          <Link to='/'><li>{ this.props.currentUser.username }</li></Link>
          <Link to='/login' onClick={ this.handleLogout }><li>Log out</li></Link>
        </ul>
      );
    } else {
      return(
        <ul className="nav-links">
          <Link to='/login' onClick={ this.props.clearErrors }><li>log in</li></Link>
          <Link to='/signup' onClick={ this.props.clearErrors }><li>sign up</li></Link>
        </ul>
      );
    }
  }

  render () {
    return (
      <nav className="nav-container">
        <section className="navbar group">
          <Link to='/'>
            <div className="logo-highlight">
            <div className="logo">
              <div className="logo-doodad"></div>
              <h1 className="logo-text">gc</h1>
            </div>
            </div>
          </Link>
          { this.navLinks() }
        </section>
      </nav>
    );
  }
}

export default Nav;
