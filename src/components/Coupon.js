import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, } from 'react-native';

const { width: width, height: height } = Dimensions.get('window');

const Coupon = ({
    icon,title,description
}) => (
    <View style={styles.container}>
        <View style={styles.wapper}>
            <View style={styles.leftCircle}></View>
            <View style={styles.content}>
                <Image style={styles.logoStyle} source={icon} />
                <View style={styles.textContainer}>
                    <Text style={styles.orderStyle}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>

            </View>
            <View style={styles.rightCircle}></View>
        </View>
    </View>
);
const styles = StyleSheet.create({
    container: {
        height: 70,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 13,
        backgroundColor: '#BA68C8',
        borderRadius: 6,
        justifyContent: 'center'

    },
    leftCircle: {
        width: 33,
        height: 33,
        borderRadius: 40,
        backgroundColor: "#f5f5f7"
    },
    rightCircle: {
        width: 33,
        height: 33,
        borderRadius: 40,
        backgroundColor: "#f5f5f7"
    },
    wapper: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        marginRight: -10,
        marginLeft: -10
    },
    logoStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        position: 'absolute',
        height: 40,
        borderRadius: 100,
    },
    content: {
    
        flexDirection:'row',

        
    },
    orderStyle:{
        color:"#ffff",
        fontFamily:"Montserrat-Bold",
        fontSize:20
    },
    description:{
        color:"#ffff",
        fontFamily:"Montserrat-Bold",
        fontSize:12
    },
    textContainer:{
        marginLeft:55
    }
})
export default Coupon;