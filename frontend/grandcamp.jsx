import React from 'react';
import ReactDOM from 'react-dom';
import * as UTIL from './util/album_api_util';
import configureStore from './store/store';
import Root from './components/root';

window.fetchAll = UTIL.fetchAll;
window.fetch = UTIL.fetch;
window.configureStore = configureStore;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store =configureStore(preloadedState);
    window.currentUser = null;
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ window.store }/>, root);
});
