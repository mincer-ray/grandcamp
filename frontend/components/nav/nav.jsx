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
        <div className="logged-in">
          <a className="dropdown-anchor">
            <div className="mini-pic">
              <img src={ this.props.currentUser.artist_pic }/>
            </div>
            <div className="dropdown-name">
              { this.props.currentUser.band_name }
            </div></a>
          <ul className="nav-links">
            <Link to={ `/artist/${this.props.currentUser.id}` }><li>Home</li></Link>
            <Link to='/edit-artist' onClick={ this.props.clearErrors }><li>Edit</li></Link>
            <Link to='/new-album' onClick={ this.props.clearErrors }><li>Add Album</li></Link>
            <Link to='/login' onClick={ this.handleLogout }><li>Log out</li></Link>
          </ul>
        </div>
      );
    } else {
      return(
        <div className="logged-out">
          <ul className="nav-links">
            <Link to='/login' onClick={ this.props.clearErrors }><li>log in</li></Link>
            <Link to='/signup' onClick={ this.props.clearErrors }><li>sign up</li></Link>
          </ul>
        </div>
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
