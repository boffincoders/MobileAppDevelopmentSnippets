import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';



export default class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flexDirection: 'column',width:'100%' }}>
                <Text style={this.props.headerStyle}>{this.props.header}</Text>
                <View style={[Style.inputContainer, { borderBottomColor: this.props.borderBottomColor }]}>
                    <TextInput onChangeText={(text)=>{this.props.onChange(text)}} placeholderTextColor={this.props.placeholderColor} style={this.props.inputStyle} value={this.props.value} placeholder={this.props.placeholder} />
                </View>
                {this.props.error!==""?<Text style={[this.props.errorStyle, { marginTop: 10 }]}>{this.props.error}</Text>:<View/>}
            </View>
        );
    }
}

InputField.propTypes = {
    headerStyle: PropTypes.object.isRequired,
    inputStyle: PropTypes.object,
    errorStyle: PropTypes.object,
    borderBottomColor: PropTypes.string,
    value: PropTypes.string,
    header: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    placeholderColor:PropTypes.string
};


const Style = StyleSheet.create({
    inputContainer: {
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0.5,
    },
})