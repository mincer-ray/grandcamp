import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { runSearch, clearResults } from '../../actions/search_actions';
import { clearErrors } from '../../actions/error_actions';
import { receiveCurrentUser } from '../../actions/session_actions';
import { resultsArray } from '../../reducers/selectors';
import Splash from './splash';

function mapStateToProps(state) {
  return ({
    results: resultsArray(state.results),
    currentUser: state.session.currentUser
  });
}

function mapDispatchToProps(dispatch, ownProps) {
  return ({
    dispatch,
    logout: () => dispatch(logout()),
    runSearch: (query) => dispatch(runSearch(query)),
    clearResults: () => dispatch(clearResults()),
    clearErrors: () => dispatch(clearErrors())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
