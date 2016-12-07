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
          <li><Link to='/'>{ this.props.currentUser.username }</Link></li>
          <li><Link to='/login' onClick={ this.handleLogout }>Log out</Link></li>
        </ul>
      );
    } else {
      return(
        <ul className="nav-links">
          <li><Link to='/login'>log in</Link></li>
          <li><Link to='/signup'>sign up</Link></li>
        </ul>
      );
    }
  }

  render () {
    return (
      <nav className="nav-container">
        <section className="navbar group">
          <div className="logo">
            <div className="logo-doodad"></div>
            <Link to='/' className="logo-text">gc</Link>
          </div>
          { this.navLinks() }
        </section>
      </nav>
    );
  }
}

export default Nav;
