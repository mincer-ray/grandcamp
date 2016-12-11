import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Splash from './splash';

function mapStateToProps({ session }) {
  return ({
    currentUser: session.currentUser
  });
}

function mapDispatchToProps(dispatch, ownProps) {
  return ({
    dispatch,
    logout: () => dispatch(logout()),
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
