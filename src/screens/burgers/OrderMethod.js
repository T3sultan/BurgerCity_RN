import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Call from '../../components/Call';
import HeaderLanguageChange from '../../components/HeaderLanguageChange';
import HeaderRight from '../../components/HeaderRight';
import Title from '../../components/Title';

const Methods = [
    {
        id: 1,
        name: "In-Store",
        selected: false,
        icon: require('../../../assets/images/tick.png'),
        activeIcon: require('../../../assets/images/tick-inactive.png'),
    },
    {
        id: 2,
        name: "Delivery",
        selected: true,
        icon: require('../../../assets/images/tick.png'),
        activeIcon: require('../../../assets/images/tick-inactive.png'),
    },
    {
        id: 3,
        name: "Drive In",
        selected: false,
        icon: require('../../../assets/images/tick.png'),
        activeIcon: require('../../../assets/images/tick-inactive.png'),
    },


]

const OrderMethod = ({ navigation, route }) => {
    const [data, setData] = useState(Methods);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate("WalletPayment") }} />),
            headerLeft: () => (<HeaderLanguageChange onPress={() => { Alert.alert("Do Someting") }} />)
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

    return (
        <Background>
            <View style={styles.container}>
                <Title title="Order System" subTitle="Please select your order system" />
                <View style={{ marginTop: 7 }}>
                    <Call data={data} renderItem={_renderItem} onPress={_onItemClick} />
                   
                </View>
            </View>
                <Button text="Proceed to Order" onPress={()=>{navigation.push("DeliveryAddress")}}/>
          
        </Background>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
export default OrderMethod;