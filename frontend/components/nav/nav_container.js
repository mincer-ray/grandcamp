import { connect } from 'react-redux';
import Nav from './nav';

function mapStateToProps({ session }) {
  return ({
    currentUser: session.currentUser
  });
}

function mapDispatchToProps(dispatch, ownProps) {
  return ({
    dispatch
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
