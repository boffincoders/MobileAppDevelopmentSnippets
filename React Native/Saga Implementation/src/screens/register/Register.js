import React, {Component} from 'react';
import {View, Image, ScrollView, TouchableOpacity, Text} from 'react-native';
import Style from './Style';
import InputField from '../../components/input/InputField';
import Colors from '../../assets/Colors';
import EmptyView from '../../components/EmptyView';
import RoundCornerButton from '../../components/RoundCornerButton';
import firebase from 'react-native-firebase';
import ProgressLoader from 'rn-progress-loader';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      error: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  }

  onInpufieldChange = (key, value) => {
    this.setState({...this.state, form: {...this.state.form, [key]: value}});
  };
  onRegisterButtonPress = () => {
    this.validateForm();
  };

  validateForm = () => {
    let isValidated = true;
    let error = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    if (this.state.form.name.trim().length === 0) {
      isValidated = false;
      error = {...error, name: 'Name required'};
    }
    if (this.state.form.email.trim().length === 0) {
      isValidated = false;
      error = {...error, email: 'Email required'};
    }
    if (this.state.form.password.trim().length === 0) {
      isValidated = false;
      error = {...error, password: 'Password required'};
    }
    if (this.state.form.confirmPassword.trim().length === 0) {
      isValidated = false;
      error = {...error, confirmPassword: 'Confirm Password required'};
    }
    if (this.state.form.password !== this.state.form.confirmPassword) {
      isValidated = false;
      error = {...error, confirmPassword: 'Password mismatch.'};
    }
    this.setState({
      ...this.state,
      error: error,
    });
    if (isValidated == true) {
      this.registerUser();
    }
  };

  registerUser = () => {
    this.props.register(this.state.form);
  };

  checkLoginResponse = () => {
    if (this.props.registerResponse.response != null) {
      alert('Registration Completed. Try to login.');
      this.props.navigation.replace('Login');
    }
    if (this.props.registerResponse.error != null) {
      alert('Please check your detail again.');
      this.props.reset();
    }
  };

  render() {
    const {goBack} = this.props.navigation;
    this.checkLoginResponse();
    return (
      <ScrollView contentContainerStyle={Style.rootScrollView}>
        <View>
          <ProgressLoader
            visible={this.props.registerResponse.loading}
            isModal={true}
            isHUD={true}
            hudColor={'#000000'}
            color={'#FFFFFF'}
          />
          <TouchableOpacity
            style={Style.backButtonView}
            onPress={() => {
              goBack();
            }}>
            <Text style={Style.backText}>{'< Back'}</Text>
          </TouchableOpacity>
          <View style={Style.rootView}>
            <View style={Style.innerView}>
              <View style={Style.loginFormView}>
                <InputField
                  onChange={value => {
                    this.onInpufieldChange('name', value);
                  }}
                  value={this.state.form.name}
                  header="NAME"
                  headerStyle={Style.headerStyle}
                  placeholder=""
                  inputStyle={Style.inputStyle}
                  placeholderColor={Colors.APP_PRIMARY}
                  borderBottomColor={Colors.WHITE}
                  errorStyle={Style.errorStyle}
                  error={this.state.error.name}
                />
                <EmptyView />
                <EmptyView />
                <EmptyView />

                <InputField
                  onChange={value => {
                    this.onInpufieldChange('email', value);
                  }}
                  value={this.state.form.email}
                  header="EMAIL ADDRESS"
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
                <InputField
                  onChange={value => {
                    this.onInpufieldChange('confirmPassword', value);
                  }}
                  value={this.state.form.confirmPassword}
                  header="CONFIRM PASSWORD"
                  headerStyle={Style.headerStyle}
                  placeholder=""
                  inputStyle={Style.inputStyle}
                  placeholderColor={Colors.APP_PRIMARY}
                  borderBottomColor={Colors.WHITE}
                  errorStyle={Style.errorStyle}
                  error={this.state.error.confirmPassword}
                />
                <EmptyView />
                <EmptyView />
                <EmptyView />
                <RoundCornerButton
                  borderRadius={20}
                  onPress={() => {
                    this.onRegisterButtonPress();
                  }}
                  padding={8}
                  color={Colors.WHITE}
                  fontSize={18}
                  backgroundColor={Colors.APP_PRIMARY}
                  title="REGISTER"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
