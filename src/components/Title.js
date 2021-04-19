import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const Title = ({
    title, subTitle,
}) => (
    <View style={styles.container}>
        {title ? <Text style={styles.textContainer}>{title}</Text> : <View />}
        {subTitle ? <Text style={styles.subTextContainer}>{subTitle}</Text> : <View />}

    </View>
)
const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginTop: 10


    },
    textContainer: {
        fontFamily: 'Montserrat-Bold',
        color: '#000000',
        fontSize: 20,
        lineHeight: 30

    },
    subTextContainer: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#000000',
        fontSize: 15,
        lineHeight: 20

    }
})

export default Title;