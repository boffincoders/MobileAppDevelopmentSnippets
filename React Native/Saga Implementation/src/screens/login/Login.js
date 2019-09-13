import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Style from './Style';
import InputField from '../../components/input/InputField';
import Colors from '../../assets/Colors';
import EmptyView from '../../components/EmptyView';
import RoundCornerButton from '../../components/RoundCornerButton';
import ProgressLoader from 'rn-progress-loader';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
      },
      error: {
        email: '',
        password: '',
      },
    };
  }

  onInpufieldChange = (key, value) => {
    this.setState({...this.state, form: {...this.state.form, [key]: value}});
  };
  onLoginButtonPress = () => {
    this.validateForm();
  };

  validateForm = () => {
    let isValdiated = true;
    let error = {
      email: '',
      password: '',
    };
    if (this.state.form.email.trim().length === 0) {
      isValdiated = false;
      error = {...error, email: 'Email required'};
    }
    if (this.state.form.password.trim().length === 0) {
      isValdiated = false;
      error = {...error, password: 'Password required'};
    }
    this.setState({
      ...this.state,
      error: error,
    });
    if (isValdiated) {
      this.loginUser();
    }
  };

  loginUser = () => {
    this.props.login(this.state.form);
  };

  checkLoginResponse = () => {
    if (this.props.loginResponse.response != null) {
      this.props.navigation.replace('Home');
    }
    if (this.props.loginResponse.error != null) {
      alert('Wrong username/password');
      this.props.reset();
    }
  };

  render() {
    this.checkLoginResponse();
    return (
      <ScrollView contentContainerStyle={{height: '100%', flexGrow: 1}}>
        <View style={Style.rootView}>
          <ProgressLoader
            visible={this.props.loginResponse.loading}
            isModal={true}
            isHUD={true}
            hudColor={'#000000'}
            color={'#FFFFFF'}
          />
          <View style={Style.innerView}>
            <View style={Style.loginFormView}>
              <InputField
                onChange={value => {
                  this.onInpufieldChange('email', value);
                }}
                value={this.state.form.email}
                header="USER NAME"
                headerStyle={Style.headerStyle}
                placeholder=""
                inputStyle={Style.inputStyle}
                placeholderColor={Colors.APP_PRIMARY}
                borderBottomColor={Colors.WHITE}
                errorStyle={Style.errorStyle}
                error={this.state.error.email}
              />
              <EmptyView />
              <EmptyView />
              <EmptyView />
              <InputField
                value=""
                onChange={value => {
                  this.onInpufieldChange('password', value);
                }}
                value={this.state.form.password}
                header="PASSWORD"
                headerStyle={Style.headerStyle}
                placeholder=""
                inputStyle={Style.inputStyle}
                placeholderColor={Colors.APP_PRIMARY}
                borderBottomColor={Colors.WHITE}
                errorStyle={Style.errorStyle}
                error={this.state.error.password}
              />
              <EmptyView />
              <EmptyView />
              <EmptyView />

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.push('ForgotPassword');
                }}>
                <Text style={Style.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>
              <EmptyView />
              <EmptyView />
              <EmptyView />

              <RoundCornerButton
                onPress={() => {
                  this.onLoginButtonPress();
                }}
                borderRadius={20}
                padding={8}
                color={Colors.WHITE}
                fontSize={18}
                backgroundColor={Colors.APP_PRIMARY}
                title="SIGN IN"
              />
              <EmptyView />
              <EmptyView />
              <TouchableOpacity
                style={Style.dntHaveIdView}
                onPress={() => {
                  this.props.navigation.push('Register');
                }}>
                <Text style={Style.dntHaveId}>Don't have an id ? </Text>
                <Text style={Style.clickHere}>Click Here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
