import React, { Component } from 'react';
import { StatusBar, View, Text, StyleSheet, Image, Dimensions, ImageBackground,TouchableOpacity } from 'react-native';
import { RadioButton, RadioGroup } from 'react-native-flexi-radio-button';

const { width, height } = Dimensions.get("window");
import Input from '../components/Input';
import Button from '../components/Button';




const title = "Welcome Back";
const tipTitle = "Login to continue Burger City";
const signup = "Your New user? Singup up"
const terms = "By signing up "

const Login = ({
    navigation,route
}) => (
    <View style={styles.container}>
    <StatusBar barStyle={'light-content'}/>
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
                    icon={require('../../assets/images/email2.jpg')}
                    placeholder="Email Address"

                />
                <Input icon={require('../../assets/images/lock.png')}
                    placeholder='Password' password
                />

            </View>
            <View style={styles.radioContainer}>
                <View>
                    <RadioGroup size={20} thickness={2} color={'#000'}>
                        <RadioButton color='#000000' value={''}>
                            <Text style={styles.radioTextStyle}>Remember me</Text>

                        </RadioButton>
                    </RadioGroup>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotTextStyle} 
                    onPress={()=>{
                        navigation.navigate('ForgetPassword');
                    }}
                    >Forgot Password ?</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.button}>
                <Button text="Login" 
                    onPress={()=>{
                        navigation.navigate('HomeScreen')
                    }}
                />

            </View>
            <View style={styles.signup}>
                <Text style={styles.signupText}>{signup}</Text>

            </View>
            <View style={styles.terms}>
            <Text style={styles.termsText}>{terms}</Text>

            </View>


        </ImageBackground>
    </View>
)


const styles = StyleSheet.create({
    terms:{
        //marginTop:60,
        marginLeft:80,
        marginRight:80,
        justifyContent:'center',
        alignItems:'center'

    },
    termsText:{
        color:"#000",
        fontFamily:'Montserrat-SemiBold',
        fontSize:12,
        textAlign:'center'

    },
    signup: {
        marginTop:100,
        justifyContent:'center',
        alignItems:'center'

    },
    signupText: {
        color:'#000',
        fontFamily:'Montserrat-SemiBold',
        fontSize:15,

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
        fontSize: 16

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
export default Login;