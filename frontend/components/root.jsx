import React from 'react';
import { Provider } from 'react-redux';
import { clearAlbums } from '../actions/album_actions';
import { clearArtist } from '../actions/artist_actions';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import ArtistPageContainer from './artist/artist_page/artist_page_container';
import ArtistFormContainer from './artist/artist_form/artist_form_container';
import AlbumPageContainer from './album/album_page/album_page_container';
import AlbumFormContainer from './album/album_form/album_form_container';
import SplashContainer from './splash/splash_container';
import SearchResultsContainer from './search_results/search_results_container';

const Root = ({ store }) => {

  const _clearState = () => {
    store.dispatch(clearArtist());
    store.dispatch(clearAlbums());
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ SplashContainer } />
        <Route component={ App }>
          <Route
            path='/login'
            component={ SessionFormContainer }
            onEnter={ _redirectIfLoggedIn } />
          <Route
            path='/signup'
            component={ SessionFormContainer }
            onEnter={ _redirectIfLoggedIn } />
          <Route
            path='/results'
            component={ SearchResultsContainer }/>
          <Route
            path='/artist/:artistId'
            component={ ArtistPageContainer }
            onLeave={ _clearState } />
          <Route
            path='/album/:albumId'
            component={ AlbumPageContainer }
            onLeave={ _clearState } />
          <Route
            path='/album/:albumId/edit'
            component={ AlbumFormContainer }
            onEnter={ _ensureLoggedIn } />
          <Route
            path='/new-album'
            component={ AlbumFormContainer }
            onEnter={ _ensureLoggedIn } />
          <Route
            path='/edit-artist'
            component={ ArtistFormContainer }
            onEnter={ _ensureLoggedIn } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
