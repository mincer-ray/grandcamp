import React from 'react';
import { Link } from 'react-router';

class Splash extends React.Component {

  Greeting () {
    if (this.props.currentUser) {
      return (
        <p className="splash-plug-user">Hi { this.props.currentUser.username } | <Link
          to={ `/artist/${ currentUser.id }` }>your site</Link></p>
      );
    } else {
      return(
        <p className="splash-plug">Discover amazing new music and directly support the artists who make it.</p>
      );
    }
  }

  render () {
    return(
      <div className="splash-wrapper">
        <nav className='splash-nav group'>
          <section className='splash-left'>
            <div className='splash-logo'></div>
            <div>{ this.Greeting() }</div>
          </section>
          <section className='splash-right'>
            <Link to='/signup'>sign up</Link>
            <Link to='/login'>log in</Link>
          </section>
        </nav>
        <main className="splash-pic"/>
      </div>
    );
  }
}

export default Splash;
