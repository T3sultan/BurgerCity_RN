import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Alert, FlatList, Image } from 'react-native';

import Background from '../../components/Background';
import Button from '../../components/Button';
import HeadeerBack from '../../components/HeaderBack';
import HeaderRight from '../../components/HeaderRight';
import Title from '../../components/Title';

const Menu = ({
    navigation, route
}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate("WalletPayment") }} />),
            headerLeft: () => (<HeadeerBack onPress={() => { navigation.goBack() }} />)
        })
    });

    const Categories = [
        {
            id: 1,
            name: "Burger with drinks",
            image: require('../../../assets/images/drinkBurger2.png')
        },
        {
            id: 2,
            name: "Fast Food ",
            image: require('../../../assets/images/fastfood.png')
        },
        {
            id: 3,
            name: "Bucket",
            image: require('../../../assets/images/Bucket.png')
        },
        {
            id: 4,
            name: "chicken",
            image: require('../../../assets/images/ch.png')
        },


    ]

    const _renderCategory = (item, index) => {
        return (
            <View key={index} style={styles.box}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center'
                }}>
                    <View style={{height:100,justifyContent:"flex-end"}}>
                        <Image
                            style={{ height: 90, width: 90, }}
                            source={item.image}>

                        </Image>

                    </View>


                    <View style={{ width: 90, paddingTop: 10}}>

                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                </View>
            </View>
        )
    }



    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.addressBar}>
                    <Title
                        title="Delivery Address"
                        subTitle="Nabinagor,Nilokhi"

                    ></Title>
                </View>
                <View style={styles.dateTimeBar}>
                    <Title title="Delivery Date & Time" subTitle="4/19/2021 11:14 AM"></Title>
                </View>
                <View style={styles.category}>
                    {
                        Categories.map((category, index) => {
                            return _renderCategory(category, index);
                        })
                    }



                </View>
                <Button  text="Select Menu" onPress={()=>{
                    navigation.push('Burgers')
                }}/>

            </View>

        </Background>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    addressBar: {
        height: 80,
        backgroundColor: "cyan"

    }, dateTimeBar: {
        height: 90,
        backgroundColor: "cyan",

    },
    category: {
        marginLeft: 32,
        marginRight: 32,
        marginTop: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap'

    }
    ,
    box: {
        width: 150,
        height: 150,
        backgroundColor: "#ffffffff",
        margin: 7,
        //backgroundColor:"",
        borderRadius: 6,
        shadowRadius: 7,
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#000",
        elevation: 6,


    },
    text:{
        fontFamily:'Montserrat-Bold',
        color:'#000',
        fontSize:12,
        lineHeight:15,
    }

})

export default Menu;
