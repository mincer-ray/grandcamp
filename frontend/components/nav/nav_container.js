import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Nav from './nav';

function mapStateToProps({ session }) {
  return ({
    currentUser: session.currentUser
  });
}

function mapDispatchToProps(dispatch, ownProps) {
  return ({
    dispatch,
    logout: () => dispatch(logout())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
