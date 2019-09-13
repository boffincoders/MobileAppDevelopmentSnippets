import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from '../screens/login/';
import Register from '../screens/register/';
import ForgotPassword from '../screens/forgotpassword/';
import Home from '../screens/home'
const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
    ForgotPassword: {
      screen: ForgotPassword,
    },
    Home: {
      screen: Home,
    },
  },
  {headerMode: 'none'},
);

export default createAppContainer(AppNavigator);
