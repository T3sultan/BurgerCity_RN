import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Alert, FlatList, Image, ImageBackground } from 'react-native';

import Background from '../../components/Background';
import Button from '../../components/Button';
import Call from '../../components/Call';
import HeadeerBack from '../../components/HeaderBack';
import HeaderRight from '../../components/HeaderRight';
import Title from '../../components/Title';

const SelectItem = ({
    navigation, route
}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate("WalletPayment") }} />),
            headerLeft: () => (<HeadeerBack onPress={() => { navigation.goBack() }} />)
        })
    });

    const burgers = [
        {
            id: 1,
            name: "Chicken Big Burger",
            price: '200 TK',
            logo: require('../../../assets/images/ch.png'),
            icon: require('../../../assets/images/arrowback.png'),
            isNew: true,
            category:"Small burger"
        },
        {
            id: 2,
            name: "Fast Food ",
            price: '300 TK',
            logo: require('../../../assets/images/fastfood.png'),
            icon: require('../../../assets/images/arrowback.png'),
            isNew: true,
            category:"Big Burger"

        },
        

    ]

    const _renderItem = (item, index) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                
                <View style={{ marginLeft: 10 }}>
                    <View>
                        <Text style={styles.textStyle}>{item.name}</Text>
                    </View>
                    <View>
                        <Text style={styles.textStyle}>{item.category}</Text>

                    </View>
                </View>

            </View>

        );
    };
    const _onItemClick = (item, index) => {
        navigation.push("Choices")
    };
    return (
        <Background>
            <View style={styles.container}>
                <Title
                    title="Bucket Chicken"
                    subTitle="Please select your burger type"
                />
                <View style={{
                    justifyContent:'center',
                    alignItems:'center',
                    marginBottom:5
                    }}>

                    <Image source={require('../../../assets/images/Bucket.png')} />
                </View>

                <Call

                    data={burgers}
                    renderItem={_renderItem}
                    onPress={_onItemClick}
                />
            </View>
        </Background>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    textStyle: {
        color: "#ff9f1c",
        fontFamily: "Montserrat-Bold",
        fontSize: 14,
        lineHeight: 16
    }
})

export default SelectItem;
