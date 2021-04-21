import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity, TextInput } from 'react-native';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Call from '../../components/Call';
import Card from '../../components/Card';
import HeaderLanguageChange from '../../components/HeaderLanguageChange';
import HeaderRight from '../../components/HeaderRight';
import Title from '../../components/Title';

const includes = [
    {
        id: 1,
        name: "Enter Your Codes",

    },
];
const conditons = [
    {
        id: 1,
        name: "Select Your Condiments",

    },
]


const MainItems = ({ navigation, route }) => {

    const [count, setCount] = useState(1);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate("WalletPayment") }} />),
            headerLeft: () => (<HeaderLanguageChange onPress={() => { navigation.goBack() }} />)
        })
    });


    const _renderItem = (item, index) => {
        return (
            <View
                key={index}
                style={{
                    flexDirection: 'row',
                    justifyContent: "center",
                    alignItems: 'center',
                    height: 90
                }}>

                <Text
                    key={item.id}
                    style={{
                        fontFamily: "Montserrat-SemiBold",
                        fontSize: 14,
                        lineHeight: 20,
                        marginLeft: 10
                    }}>
                    {item.name}</Text>

            </View>

        )
    }

    const _onItemClick = (item, index) => {

    }

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.totalView}>
                    <View style={styles.textView}>
                        <Text style={styles.totalText}>Cheese Burger</Text>
                        <Text style={styles.price}>250 TK</Text>
                    </View>

                </View>
                <Card />

               


                <Title
                    title="Includes"
                />

                <View style={{ marginTop: -5 }}>
                    <Call
                        data={includes}
                        renderItem={_renderItem}
                        onPress={_onItemClick} />

                </View>
                <Title
                    title="Condiments"
                />
                <View style={{ marginTop: -5 }}>
                    <Call
                        data={conditons}
                        renderItem={_renderItem}
                        onPress={_onItemClick} />

                </View>
                <Button
                    text="check out"
                    onPress={() => {
                        navigation.push("FullItems")

                    }}
                />
            </View>


        </Background>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    totalView: {
        height: 60,
        backgroundColor: "#000000",
        justifyContent: 'center'
    },
    textView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center'
    },
    totalText: {
        color: '#ffffff',
        fontFamily: "Montserrat-Bold",
        fontSize: 15,
        lineHeight: 25
    },
    price: {
        color: "#ff9f1c",
        fontFamily: "Montserrat-Bold",
        fontSize: 15,
        lineHeight: 15

    }

})
export default MainItems;