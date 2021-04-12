import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, Image, Dimensions, ImageBackground } from 'react-native';
import { RadioButton, RadioGroup } from 'react-native-flexi-radio-button';

const { width, height } = Dimensions.get("window");
import Input from '../components/Input';
import Button from '../components/Button';




const title = "Forget Password";
const tipTitle = "Must be 6-digit verification code was sent to xxx xxx";


const MobileNumber= ({
    params,
}) => (
    <View style={styles.container}>
        <ImageBackground
            source={require('../../assets/images/burger4.jpg')}
            style={{ width: width, height: height }}
        >
            <View style={styles.darkLayer}>
                <View style={styles.logo}>
                    <Image source={require('../../assets/images/burgerlogo1.png')} style={styles.logoStyle} />


                </View>

            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.tip}>
                <Text style={styles.tipText}>{tipTitle}</Text>

            </View>
            <View style={styles.input}>
                <Input
                    icon={require('../../assets/images/mobile.png')}
                    placeholder="Mobile Number"

                />
               

            </View>

            <View style={styles.button}>
                <Button text="Submit" />

            </View>


        </ImageBackground>
    </View>
)


const styles = StyleSheet.create({
    terms: {
        //marginTop:60,
        marginLeft: 80,
        marginRight: 80,
        justifyContent: 'center',
        alignItems: 'center'

    },
    termsText: {
        color: "#000",
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        textAlign: 'center'

    },
    signup: {
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center'

    },
    signupText: {
        color: '#000',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 15,

    },
    button: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'


    },
    forgotTextStyle: {
        color: "#ffffff",
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14

    },
    radioTextStyle: {
        color: "#ffffff",
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14

    },
    radioContainer: {
        marginTop: 10,
        marginRight: 30,
        marginLeft: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        opacity: 0.8

    },
    input: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30

    },
    tip: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 70,
        marginRight: 70

    },
    tipText: {
        color: '#ffff',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        textAlign: 'center'

    },
    title: {
        marginTop: 180,
        justifyContent: 'center',
        alignItems: 'center'


    },
    titleText: {
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 22,
        color: '#fff'



    },
    container: {
        flex: 1,

    },
    darkLayer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,

        opacity: 0.4
    },
    logo: {
        width: width,
        position: 'absolute',
        top: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    logoStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        position: 'absolute',
        top: 5,
        height: 150,
        borderRadius: 200,
        backgroundColor: '#FFFFFF'
    },

})
export default MobileNumber;