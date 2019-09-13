import ForgotPassword from './ForgotPassword';
import {connect} from 'react-redux';
const mapStateToProps = state => {
  return {
    forgotPasswordResponse: state.forgotPassword_response,
  };
};

const mapDispachToProps = dispatch => {
  return {
    forgotPassword: data => dispatch({type: 'FORGOT_PASSWORD', value: data}),
    reset: data => dispatch({type: 'RESET_FORGOT_PASSWORD', value: null}),
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(ForgotPassword);
