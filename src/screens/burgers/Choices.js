import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Call from '../../components/Call';
import HeaderLanguageChange from '../../components/HeaderLanguageChange';
import HeaderRight from '../../components/HeaderRight';
import Title from '../../components/Title';

const choices = [
    {
        id: 1,
        name: "Large Fries",
        selected: false,
        icon: require('../../../assets/images/tick.png'),
        activeIcon: require('../../../assets/images/tick-inactive.png'),
    },
    {
        id: 2,
        name: "Mediun Fries",
        selected: true,
        icon: require('../../../assets/images/tick.png'),
        activeIcon: require('../../../assets/images/tick-inactive.png'),
    },
  

]

const Choices = ({ navigation, route }) => {
    const [data, setData] = useState(choices);

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
            <View style={styles.container}>
                <Title
                    title="Choices"
                    subTitle="Please select your order in choices"
                />
                <View style={{ marginTop: 7 }}>
                    <Call data={data} renderItem={_renderItem} onPress={_onItemClick} />

                </View>
            </View>
            <Button text="Proceed to Add Cart" onPress={() => { navigation.push("AddToCart") }} />

        </Background>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
export default Choices;