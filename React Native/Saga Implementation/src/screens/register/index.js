import Register from './Register';
import {connect} from 'react-redux';
const mapStateToProps = state => {
  return {
    registerResponse: state.register_response,
  };
};

const mapDispachToProps = dispatch => {
  return {
    register: data => dispatch({type: 'REGISTER', value: data}),
    reset: data => dispatch({type: 'RESET_REGISTER', value: null}),
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Register);
