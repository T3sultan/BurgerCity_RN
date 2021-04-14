import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const HeaderLanguageChange = ({
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
        <Text style={{ color: "#000", fontSize: 19, fontFamily: 'Montserrat-Bold' }}>EN</Text>

        <Image style={{ height: 30, width: 30, marginLeft: 4 }} source={require('../../assets/images/drop-down.png')} />
    </TouchableOpacity>
)
export default HeaderLanguageChange;