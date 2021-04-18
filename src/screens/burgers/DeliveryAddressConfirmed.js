
import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Call from '../../components/Call';
import GroupButton from '../../components/GroupButton';
import HeaderBack from '../../components/HeaderBack';
import HeaderLanguageChange from '../../components/HeaderLanguageChange';
import HeaderRight from '../../components/HeaderRight';
import Title from '../../components/Title';

const AddressConfirmed = [
    {
        id: 1,
        name: "Bangladesh,Brahmanbaria,Nabinagor",
        icon: require('../../../assets/images/edit.png'),

    },
];
const DataAddressConfirmed = [
    {
        id: 1,
        name: "4/18/2021 3:04:2021",
        icon: require('../../../assets/images/edit.png'),

    },
];

const DeliveryAddressConfirmed = ({ navigation, route }) => {
    const [data, setData] = useState(AddressConfirmed);
    const [dateTime, setDateTime] = useState(DataAddressConfirmed)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate("WalletPayment") }} />),
            headerLeft: () => (<HeaderBack onPress={() => { navigation.goBack() }} />)
        })
    });


    const _renderItem = (item, index) => {
        return (
            <Text
                key={item.id}
                style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: 14,
                    lineHeight: 20
                }}>
                {item.name}</Text>
        )
    }

    const _onItemClick = (item, index) => {
        // Alert.alert(''+index)
        let temp = [];
        data.map((entry, idx) => {
            if (idx === index) {
                entry.selected = true;
                temp.push(entry);
            }
            else {
                entry.selected = false;
                temp.push(entry)
            }
        });
        setData(temp);
    }
    const buttons = [
        {
            activated: false,
            text: "Order Now",
            onPress: () => {  },
        },
        {
            activated: false,
            text: "Order in Advance",
            onPress: () => { },
        },


    ]

    return (
        <Background>
            <View style={styles.container}>

                <Title subTitle="To proceed, please confirm your delivery details" />
                <GroupButton activeColor="yellow" buttons={buttons}></GroupButton>
                <Title title="Delivery Address"></Title>
                <Call data={data} renderItem={_renderItem} onPress={() => Alert.alert("Address Screen")}></Call>
                <View style={styles.buttonStyle}>
                    <Button

                        text="Change Address"
                        onPress={() => Alert.alert("Location Please")} />
                </View>
                <Title title="Delivery Date & Time" subTitle="Please select delivery Date & Time"></Title>
                <Call
                    data={dateTime}
                    renderItem={_renderItem}
                    onPress={() => Alert.alert("Go to Change Address")}>

                </Call>
                <View style={{ marginTop: 10 }}>
                    <Button
                        text="Proceed to Order" 
                        style={{ backgroundColor: "#000" }} 
                        onPress={() => Alert.alert("Order Submitted")}
                    />
                </View>
            </View>

        </Background>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    buttonStyle: {
        marginTop: 20,

    }

})
export default DeliveryAddressConfirmed