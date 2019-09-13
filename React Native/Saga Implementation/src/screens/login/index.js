import Login from './Login';
import {connect} from 'react-redux';
const mapStateToProps = state => {
  return {
    loginResponse: state.login_response,
  };
};

const mapDispachToProps = dispatch => {
  return {
    login: data => dispatch({type: 'LOGIN', value: data}),
    reset: data => dispatch({type: 'RESET_LOGIN', value: null}),
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Login);
