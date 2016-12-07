import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import SessionForm from './session_form';

function mapStateToProps(state) {
  return ({
    loggedIn: !!state.session.currentUser,
    errors: state.errors
  });
}

function mapDispatchToProps(dispatch, ownProps) {
  let formType = ownProps.location.pathname.slice(1);
  let func = "";

  if (formType === 'login') {
    func = login;
    formType = "Log in";
  } else {
    func = signup;
    formType = "Sign up";
  }

  return ({
    formType,
    processForm: (newUser) => dispatch(func(newUser)),
    clearErrors: () => dispatch(clearErrors())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
