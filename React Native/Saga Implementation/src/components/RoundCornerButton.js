import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import { sizeNormalization } from '../utils/AppUtils';

export default (props) => (
    <TouchableOpacity onPress={()=>{props.onPress()}} style={{backgroundColor:props.backgroundColor,borderRadius:props.borderRadius,padding: props.padding,}}>
        <Text style={{textAlign:'center',color:props.color,fontSize:sizeNormalization(props.fontSize)}}>{props.title}</Text>
    </TouchableOpacity>
)