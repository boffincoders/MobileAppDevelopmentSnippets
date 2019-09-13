import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from './Style';
import InputField from '../../components/input/InputField';
import Colors from '../../assets/Colors';
import EmptyView from '../../components/EmptyView';
import RoundCornerButton from '../../components/RoundCornerButton';
import firebase from 'react-native-firebase';

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
      },
      error: {
        email: '',
      },
    };
  }

  onInputFieldChange = (key, value) => {
    this.setState({...this.state, form: {...this.state.form, [key]: value}});
  };

  onSubmit = () => {
    this.validateForm();
  };

  validateForm = () => {
    if (this.state.form.email.trim().length === 0) {
      this.setState({
        ...this.state,
        error: {...this.state.error, email: 'Usename required'},
      });
    } else {
      this.setState({
        ...this.state,
        error: {...this.state.error, email: ''},
      });
      this.props.forgotPassword(this.state.form);
    }
  };

  checkForgotPasswordResponse = () => {
    if (this.props.forgotPasswordResponse.response != null) {
      alert('Reset password link has been sent to your email id.');
      this.props.navigation.replace('Login');
    }
    if (this.props.forgotPasswordResponse.error != null) {
      alert('Wrong email. Please enter valid email.');
      this.props.reset();
    }
  };

  render() {
    const {goBack} = this.props.navigation;
    this.checkForgotPasswordResponse();
    return (
      <View style={Style.rootView}>
        <View style={Style.innerView}>
          <View style={Style.loginFormView}>
            <InputField
              onChange={value => {
                this.onInputFieldChange('email', value);
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
            <EmptyView />
            <RoundCornerButton
              borderRadius={20}
              padding={8}
              color={Colors.WHITE}
              fontSize={18}
              onPress={() => {
                this.onSubmit();
              }}
              backgroundColor={Colors.APP_PRIMARY}
              title="SUBMIT"
            />
          </View>
        </View>
      </View>
    );
  }
}
