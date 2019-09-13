import {combineReducers} from 'redux';
import login_response from '../screens/login/Reducer';
import register_response from '../screens/register/Reducer';
import forgotPassword_response from '../screens/forgotpassword/Reducer';
export default combineReducers({
  login_response,
  register_response,
  forgotPassword_response,
});
