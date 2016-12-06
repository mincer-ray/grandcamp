import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

function mapStateToProps(state) {
  return ({
    loggedIn: !!state.session.currentUser,
    errors: state.session.errors
  });
}

function mapDispatchToProps(dispatch, ownProps) {
  const formType = ownProps.location.pathname.slice(1);
  let processForm = "";

  if (formType === 'login') {
    processForm = login;
  } else {
    processForm = signup;
  }

  return ({
    formType,
    processForm
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
