import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const Background = ({
    children, style, ...rest
}) => (
    <View style={styles.container}>
        <View style={styles.topShadow}></View>
        {children}
        <View style={styles.buttonShadow}></View>


    </View>
)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f7",

    },
    topShadow: {
        position: 'absolute',
        top: 1,
        backgroundColor: '#f5f5',
        width: width,
        height: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,

    },
    buttonShadow: {
        position: 'absolute',
        bottom: 1,
        backgroundColor: '#f5f5',
        width: width,
        height: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,

    }
})

export default Background;