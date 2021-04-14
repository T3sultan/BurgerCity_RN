import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HeaderTitle = ({ params }) => (
    <View style={{justifyContent:'center',alignItems:'center'}}>
        <Image
            style={{ height: 36, width: 36  }}
            source={require('../../assets/images/header-logo.png')}

        />

    </View>

);
const styles = StyleSheet.create({

})

export default HeaderTitle;