import React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';


const HeaderRight = ({ onPress, ...params }) => (

    <TouchableOpacity style={{marginRight:10}} onPress={onPress}>
        <Image
            style={{ height: 30, width: 30, marginRight: 6 }}
            source={require('../../assets/images/cart.png')} />
    </TouchableOpacity>

)
export default HeaderRight;