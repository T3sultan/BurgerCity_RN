import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert,ScrollView } from 'react-native';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Call from '../../components/Call';
import HeaderLanguageChange from '../../components/HeaderLanguageChange';
import HeaderRight from '../../components/HeaderRight';
import Title from '../../components/Title';

const Methods = [
    {
        id: 1,
        name: "Savings Amount",
        selected: false,
        icon: require('../../../assets/images/tick.png'),
        activeIcon: require('../../../assets/images/tick-inactive.png'),
    },
    {
        id: 2,
        name: "Cash on Delivery",
        selected: true,
        icon: require('../../../assets/images/tick.png'),
        activeIcon: require('../../../assets/images/tick-inactive.png'),
    },
    {
        id: 3,
        name: "Android Cell Phone Pay",
        selected: false,
        icon: require('../../../assets/images/tick.png'),
        activeIcon: require('../../../assets/images/tick-inactive.png'),
    },
    {
        id: 4,
        name: "iPhone Pay",
        selected: false,
        icon: require('../../../assets/images/tick.png'),
        activeIcon: require('../../../assets/images/tick-inactive.png'),
    },
    {
        id: 5,
        name: "Cheese Burger",
        selected: false,
        icon: require('../../../assets/images/tick.png'),
        activeIcon: require('../../../assets/images/tick-inactive.png'),
    },
    {
        id: 6,
        name: "Vegetables Burgers",
        selected: false,
        icon: require('../../../assets/images/tick.png'),
        activeIcon: require('../../../assets/images/tick-inactive.png'),
    },
    {
        id: 7,
        name: "Whiskey King Burger. ",
        selected: false,
        icon: require('../../../assets/images/tick.png'),
        activeIcon: require('../../../assets/images/tick-inactive.png'),
    },
    




]

const WalletPayment = ({ navigation, route }) => {
    const [data, setData] = useState(Methods);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate("WalletPayment") }} />),
            headerLeft: () => (<HeaderLanguageChange onPress={() => { navigation.goBack() }} />)
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
            <ScrollView style={styles.container}>
                <Title title="Order Payment"/>
                <View style={{ marginTop: 7 }}>
                    <Call data={data} renderItem={_renderItem} onPress={_onItemClick} />
                   
                </View>
            </ScrollView>
                <Button text="Confirm" onPress={()=>{navigation.push("ConfirmedScreen")}}/>
          
        </Background>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
export default WalletPayment;