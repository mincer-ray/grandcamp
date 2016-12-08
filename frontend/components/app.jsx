import React from 'react';
import Nav from './nav/nav_container';

const App = (props) => (
  <div className="root">
    <Nav router={ props.router }/>
    { props.children }
  </div>
);

export default App;
