import React from 'react';
import { Link } from 'react-router';
var $ = require('jQuery');

class Splash extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      value: "",
      random: []
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.fullResults = this.fullResults.bind(this);
    $(window).on("click", this.checkActiveSearch.bind(this));
  }

  componentDidMount() {
    this.props.router.setRouteLeaveHook(this.props.route, () => {
      this.props.clearErrors();
    });

    this.props.clearResults();
    this.props.getRandom(6);
  }

  componentWillReceiveProps(newProps) {
    if (this.state.random.length === 0) {
      this.setState({ random: newProps.random });
    }

    this.setState({ results: newProps.results });
  }

  checkActiveSearch () {
    if (document.getElementsByClassName('search-bar')[0] != document.activeElement) {
      this.props.clearResults();
      this.setState({ value: "" });
    }
  }

  updateSearch (e) {
    if (e.currentTarget.value != "") {
      this.props.clearErrors();
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
          <Link to={ `${path}/${result.id}` } key={ `${result.name}${result.type}${result.id}` }>
            <li className="group">
              <img src={ result.pic }/>
              <h3>{ result.name }</h3>
              <p>{ result.type }</p>
            </li>
          </Link>
        );
      });

      if (this.state.results[0] === "nothing found") {
        return(
          <Link>
            <li className="group">
              <img/>
              <h3>Nothing Found</h3>
              <p></p>
            </li>
          </Link>
        );
      }
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

  FeaturedRandom () {
    if (this.state.random && this.state.random.length > 0) {
      return(
        this.state.random.map((album) => {
          return(
            <div className="random-album-container" key={ `${album.name}${album.color}${album.artist_name}` }>
              <Link to={ `album/${ album.id }` }>
                <li>
                  <img src={ album.album_art }/>
                  <p className="featured-album" style={ {color: album.color} }>{ album.name }</p>
                  <p className="featured-artist">By { album.artist_name }</p>
                </li>
              </Link>
            </div>
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
            <form className="autocomplete-search" onSubmit={ this.fullResults }>
              <input className="search-bar" onChange={ this.updateSearch } value={ this.state.value } placeholder="Search for artist, track or album"></input>
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
        <main className='splash-content group'>
          <div className="splash-pic"/>
          <section className="featured-content group">
            <ul>
              <h2 className="featured-title">Listen to new albums by our featured artists</h2>
              { this.FeaturedRandom() }
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default Splash;
