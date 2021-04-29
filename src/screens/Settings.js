import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Background, ImageBackground,Image } from 'react-native';
import HeaderBack from '../components/HeaderBack';
import HeaderRight from '../components/HeaderRight';

const Settings = ({ navigation, route }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight
                onPress={() => { navigation.navigate("WalletPayment") }} />),
            headerLeft: () => (<HeaderBack
                onPress={() => { navigation.goBack() }}
            />)
        })
    })
    return (
        <Background>
            <View style={{ flex: 1 }}>
                
            </View>

        </Background>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    container1: {
        width: 250,
        height: 100,
        backgroundColor: "#000000",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'cyan',
        fontSize: 25
    }
})
export default Settings;