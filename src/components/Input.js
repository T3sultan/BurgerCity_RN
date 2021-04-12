import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Image } from 'react-native';

const { width, height } = Dimensions.get("window");


const Input = ({
    placeholder, icon, password, ...rest
}) => (
    <View style={styles.container}>
        <View style={styles.icon}>
            <Image style={styles.imageIcon} source={icon} />

        </View>
        <TextInput
            style={styles.input}
            secureTextEntry={password}
            placeholder={placeholder}

        >

        </TextInput>
        
    </View>
);
const styles = StyleSheet.create({
    container: {
        width: width - 80,
        height: 50,
        backgroundColor: '#ffffffff',
        borderRadius: 9,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10

    },
    icon: {
        paddingLeft: 13,

    },
    input: {
        backgroundColor: '#ffffffff',
        borderColor: "#ffffffff",
        color: "#727C8E",
        fontFamily: "Montserrat-SemiBold",
        fontWeight: '500',
        fontSize: 15,
        paddingLeft: 10,


    },
    imageIcon: {
        height: 40,
        width: 40
    }

});



export default Input;