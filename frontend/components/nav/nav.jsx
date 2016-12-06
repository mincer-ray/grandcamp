import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
  render () {
    return (
      <nav className="nav-container">
        <section className="navbar group">
          <div className="logo">
            <div className="logo-doodad"></div>
            <a className="logo-text">grandcamp</a>
          </div>
          <ul className="nav-links">
            <li><Link to='/login'>log in</Link></li>
            <li><Link to='/login'>sign up</Link></li>
          </ul>
        </section>
      </nav>
    );
  }
}

export default Nav;
