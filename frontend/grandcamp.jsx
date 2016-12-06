import React from 'react';
import ReactDOM from 'react-dom';
import * as UTIL from './util/session_api_util';

window.signup = UTIL.signup;
window.login = UTIL.login;
window.logout = UTIL.logout;

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Grandcamp</h1>, root);
});
