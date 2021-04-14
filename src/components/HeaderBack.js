import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const HeadeerBack = ({
    onPress, ...params
}) => (
    <TouchableOpacity
        style={{
            marginLeft: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        onPress={onPress}
    >


        <Image style={{ height: 25, width: 25, marginLeft: 4 }} source={require('../../assets/images/back.png')} />
    </TouchableOpacity>
)
export default HeadeerBack