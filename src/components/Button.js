import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')

const Button = ({
    text, onPress, ...params
}) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>

    </TouchableOpacity>
);
const styles = StyleSheet.create({
    container: {
        width: width,
        height: 40,
        justifyContent: "center",
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 15,
        backgroundColor: 'yellow',



    },
    text: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#000',
        fontSize: 17,
        textAlign: 'center'

    }
})
export default Button;