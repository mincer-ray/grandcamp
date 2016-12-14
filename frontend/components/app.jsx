import React from 'react';
import Nav from './nav/nav_container';
import Footer from './footer/footer';

const App = (props) => (
  <div className="root">
    <Nav router={ props.router }/>
    <main className="artist-background group">
      { props.children }
    </main>
    <Footer/>
  </div>
);

export default App;
