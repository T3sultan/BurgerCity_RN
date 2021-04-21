import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity, ScrollView } from 'react-native';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Call from '../../components/Call';
import Card from '../../components/Card';
import HeaderLanguageChange from '../../components/HeaderLanguageChange';
import HeaderRight from '../../components/HeaderRight';
import Title from '../../components/Title';

const remarks = [
    {
        id: 1,
        name: "Another big Cheese ",

    },
];
const conditons = [
    {
        id: 1,
        name: "Select Your Condiments",

    },
]


const FullItems = ({ navigation, route }) => {

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
            <ScrollView style={styles.container}>
                <View style={{ height: 170, backgroundColor: "#1d2126", justifyContent: "flex-start" }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: "#fff", fontFamily: "Montserrat-Bold", fontSize: 16, lineHeight: 20 }}> Reviews & Confirm</Text>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{ color: "#ff9f1c", fontFamily: "Montserrat-Bold", fontSize: 12, lineHeight: 17 }}> Summery</Text>

                        </View>
                        <View style={{ marginLeft: 10, marginRight: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                                <Text style={{ color: "#ff9f1c", }}>SubTotal</Text>
                                <Text style={{ color: "#ffffff", }}>250 TK</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                                <Text style={{ color: "#ff9f1c", }}>Delivery Charge</Text>
                                <Text style={{ color: "#ffffff", }}>50 TK</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                                <Text style={{ color: "#ff9f1c", }}>Discount code (25%)</Text>
                                <Text style={{ color: "#ffffff", }}>25 TK</Text>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={styles.totalView}>
                    <View style={{ margin: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#ff9f1c' }}>Total</Text>
                            <Text style={{ color: "#ffffff" }}>325 TK</Text>

                        </View>
                        <View style={{ alignItems: 'flex-end', }}>
                            <Text style={{ color: "#fff", fontSize: 8 }}>Total (Includes VAT)</Text>

                        </View>

                    </View>


                </View>




                <View style={{ paddingTop: 16 }}></View>

                <View style={{ marginLeft: 0, backgroundColor: "#000" }} >
                    <Text style={{ color: "#fff", fontFamily: "Montserrat-Bold", marginLeft: 10 }}>Delivery By</Text>
                    <Text style={{ color: "#ff9f1c", marginLeft: 10 }}>4/21/2021 2:09 PM</Text>
                    <Text style={{ color: "#fff", marginLeft: 10 }}>Nabinagor,Salimgong</Text>

                </View>

                <Title
                    title="Remarks"
                />

                <View style={{ marginTop: -5 }}>
                    <Call
                        data={remarks}
                        renderItem={_renderItem}
                        onPress={_onItemClick} />

                </View>





                <Card />

                <Button
                    text="Confirm"
                    onPress={() => {


                    }}
                />
            </ScrollView>


        </Background>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    totalView: {
        height: 60,
        backgroundColor: "#11191e",
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
export default FullItems;