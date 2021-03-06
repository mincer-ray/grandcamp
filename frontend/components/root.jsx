import React from 'react';
import { Provider } from 'react-redux';
import { finishLoading } from '../actions/loading_actions';
import { clearAlbums, fetchArtist } from '../actions/album_actions';
import { clearArtist, fetchAlbum } from '../actions/artist_actions';
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

  const _ensureProperUser = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    const albumArtist = store.getState().artist;
    
    if (currentUser.id != albumArtist.id) {
      replace('/');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _waitForLoad = (nextState, replace, _finishLoad) => {
    store.dispatch(fetchAlbum());
    store.dispatch(fetchArtist());
  };

  const _clearWindowListeners = () => {
    $(window).off();
  };

  const _finishLoad = () => {

  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory } onUpdate={ () => window.scrollTo(0,0) }>
        <Route path="/" component={ SplashContainer } onLeave={ _clearWindowListeners } />
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
            component={ SearchResultsContainer } />
          <Route
            path='/artist/:artistId'
            component={ ArtistPageContainer }
            onEnter={ _clearState } />
          <Route
            path='/album/:albumId'
            component={ AlbumPageContainer }
            onEnter={ _clearState } />
          <Route
            path='/album/:albumId/edit'
            component={ AlbumFormContainer }
            onEnter={ _ensureProperUser } />
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
