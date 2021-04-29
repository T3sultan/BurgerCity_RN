import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, Image, Dimensions,StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import Button from '../../src/components/Button';


const { width, height } = Dimensions.get("window")


class Onbording extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [
                { id: 1, image: require('../../assets/images/burgerItem1.png') },
                { id: 2, image: require('../../assets/images/burger2.jpg') },
                { id: 3, image: require('../../assets/images/burger3.jpg') },
                { id: 3, image: require('../../assets/images/burger4.jpg') },
                { id: 3, image: require('../../assets/images/burger5.jpg') },


            ],

        };
    }
    _btnClick = () => {
        this.props.navigation.navigate('Login');

    }


    render() {
        return (
            <View style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
                <Swiper autoplay={true}>
                    {this.state.slides.map((slide) => {
                        return (
                            <View key={slide.id} style={styles.slide}>
                                <Image source={slide.image} style={styles.image} />
                            </View>
                        )
                    })}
                </Swiper>
                <View style={styles.darkLayer} />
                <View style={styles.logo}>
                    <Image source={require('../../assets/images/logo.png')} style={styles.logoStyle} />

                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>Burger City Dhaka</Text>

                </View>
                <View style={styles.button}>
                    <Button text='Get start here' onPress={() => {
                        this._btnClick();

                    }} />

                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    darkLayer: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "#000000",
        opacity: 0.4

    },
    container: {
        flex: 1,

    },
    slide: {

        justifyContent: 'center',
        alignItems: 'center'

    },
    image: {
        // height:685,
        // width:550,
        // justifyContent:'center',
        // alignItems:'center'
        width: width,
        height: height



    },
    textContainer: {
        width: 130,
        position: 'absolute',
        top: 485,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 20

    },
    textStyle: {
        fontFamily: "Montserrat-Bold",
        color: 'cyan',
        fontSize: 20,
        fontWeight: '600'



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



    },
    button:
    {

        width: width,
        justifyContent: "center",
        alignItems: 'center',
        alignContent: 'center',
        position: 'absolute',
        bottom: 50
    }

})
export default Onbording;