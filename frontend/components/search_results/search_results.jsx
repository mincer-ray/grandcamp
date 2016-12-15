import React from 'react';
import { Link } from 'react-router';

class SearchResults extends React.Component {
  constructor (props) {
    super(props);

  }

  formatResults () {
    if (this.props.results) {
      const results = this.props.results.map((result) => {
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

      return results;
    }
  }

  render () {
    return(
      <section>
        <ul>{ this.formatResults() }</ul>
      </section>
    );
  }
}

export default SearchResults;
