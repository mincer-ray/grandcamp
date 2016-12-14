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

  componentDidMount() {
    this.props.router.setRouteLeaveHook(this.props.route, () => {
      this.props.clearResults();
      this.props.clearErrors();
    });
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
          to={ `/artist/${ this.props.currentUser.id }` }>your site</Link></p>
      );
    } else {
      return(
        <p className="splash-plug">Discover amazing new music and directly support the artists who make it.</p>
      );
    }
  }

  formatResults () {
    if (this.state.results) {
      const results = this.state.results.map((result) => {
        let path = result.type;
        if (path === "song") {
          path = "album";
        }
        return(
          <Link to={ `${path}/${result.id}` }>
            <li className="group">
              <img src={ result.pic }/>
              <h3>{ result.name }</h3>
              <p>{ result.type }</p>
            </li>
          </Link>
        );
      });

      return results.slice(0, 5);
    }
  }

  sessionLinks () {
    if (this.props.currentUser) {
      return(
        <div>
          <Link onClick={ this.props.logout }>log out</Link>
        </div>
      );
    } else {
      return(
        <div>
          <Link to='/signup'>sign up</Link>
          <Link to='/login'>log in</Link>
        </div>
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
            <form className="autocomplete-search" onSubmit={ this.fullResults }>
              <input onChange={ this.updateSearch } value={ this.state.value }></input>
              <div className="search-icon"/>
            </form>
            <div className="autocomplete-search-results">
              <ul className="group">
                { this.formatResults() }
              </ul>
            </div>
            { this.sessionLinks() }
          </section>
        </nav>
        <main className="splash-pic"/>
      </div>
    );
  }
}

export default Splash;
