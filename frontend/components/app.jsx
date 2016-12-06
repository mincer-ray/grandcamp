import React from 'react';
import Nav from './nav/nav_container';

const App = ({ children }) => (
  <div className="root">
    <Nav />
    { children }
  </div>
);

export default App;
