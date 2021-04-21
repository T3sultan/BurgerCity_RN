import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = ({
    params,
}) => (
    <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: "flex-start", alignItems: 'center' }}>
                <Image source={require('../../assets/images/fastfood.png')}></Image>
            </View>
            <View style={{ justifyContent: 'center', marginLeft: 40 }}>
                <Text style={{ color: "#000000", fontSize: 14, lineHeight: 17 }}>1 Cheese Burger meal</Text>
                <Text style={{ color: "#727c8e", fontSize: 12, lineHeight: 17 }}>Cheese Burger </Text>
                <Text style={{ color: "#727c8e", fontSize: 12, lineHeight: 17 }}>Fries pack</Text>
                <Text style={{ color: "#727c8e", fontSize: 12, lineHeight: 17 }}>Coca cola</Text>
                <Text style={{ color: "#727c8e", fontSize: 12, lineHeight: 17 }}>No Add on</Text>
            </View>
        </View>
        <View style={{ alignItems: "flex-end", marginRight: 10, marginBottom: 20 }}>
            <Text style={{ color: "#ff9f1c", fontFamily: "Montserrat-Bold", fontSize: 13, lineHeight: 17 }}>250 TK</Text>
        </View>

    </View>
)
const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 0,
        backgroundColor: "#ffff"


    }
})


export default Card;