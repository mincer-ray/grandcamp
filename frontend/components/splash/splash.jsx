import React from 'react';
import { Link } from 'react-router';

class Splash extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      value: ""
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.fullResults = this.fullResults.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({results: newProps.results});
  }

  updateSearch (e) {
    if (e.currentTarget.value != "") {
      this.props.runSearch(e.currentTarget.value);
    } else {
      this.setState({results: []});
    }
    this.setState({value: e.currentTarget.value});
  }

  fullResults (e) {
    e.preventDefault();
  }

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

  formatResults () {
    if (this.state.results) {
      return(
        this.state.results.map((result) => {
          return(
            <li>
              { result.name }
            </li>
          );
        })
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
            <form className="autocompleteSearch" onSubmit={ this.fullResults }>
              <input onChange={ this.updateSearch } value={ this.state.value }></input>
            </form>
            <div className="autocompleteSearchResults">
              <ul>
                { this.formatResults() }
              </ul>
            </div>
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
