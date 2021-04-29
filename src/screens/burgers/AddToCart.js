import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity, Dimensions} from 'react-native';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Call from '../../components/Call';
import HeaderLanguageChange from '../../components/HeaderLanguageChange';
import HeaderRight from '../../components/HeaderRight';
import Title from '../../components/Title';

const {width,height}=Dimensions.get('window');

const choices = [
    {
        id: 1,
        name: "Cheese Burger",
        icon: require('../../../assets/images/arrowback.png'),
        logo: require('../../../assets/images/ch.png'),
    },
    {
        id: 2,
        name: "Coca Cola ",
        icon: require('../../../assets/images/arrowback.png'),
        logo: require('../../../assets/images/drinkBurger2.png'),
    },
    {
        id: 3,
        name: "Fries Pack",
        icon: require('../../../assets/images/arrowback.png'),
        logo: require('../../../assets/images/fastfood.png'),
    },



]

const AddToCart = ({ navigation, route }) => {
    const [data, setData] = useState(choices);
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
                <Image style={{ height: 34, width: 34 }} source={item.logo} />
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
                    title="Cheese Burger Meal"
                    subTitle="Please customize your meal"
                />
                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <Image
                        source={require('../../../assets/images/fastfood.png')}
                    />

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{
                        width: 150,
                        height: 40,

                        borderRadius: 15,
                        marginTop: 13
                    }}>
                        <View style={{
                            height: 50,
                            flexDirection: 'row',
                            justifyContent: "space-between",
                            alignItems: 'center',
                            alignContent: 'center',
                            backgroundColor: "#fff",
                            borderRadius: 10
                        }} >
                            <TouchableOpacity onPress={() => {
                                count <= 1 ? setCount(0) : setCount(count - 1)

                            }}>


                                <Image
                                    style={{ height: 16, width: 16, marginLeft: 20 }}
                                    source={require('../../../assets/images/minus.png')} />
                            </TouchableOpacity>

                            <Text style={{ color: "#727C8E", fontFamily: "Montserrat-SemiBold", fontSize: 15 }}>{count}</Text>
                            <TouchableOpacity onPress={() => {
                                setCount(count + 1)

                            }}>

                                <Image style={{ height: 16, width: 16, marginRight: 20 }} source={require('../../../assets/images/plus.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ width:width-209, height: 45, marginLeft: 20, marginTop: 10, marginRight: 20 }}>
                        <Button text="Add to Cart" onPress={() => {navigation.push("MainItems") }} />
                    </View>
                </View>
                <Title
                    title="Includes"
                />

                <View style={{ marginTop: 0 }}>
                    <Call
                        data={data}
                        renderItem={_renderItem}
                        onPress={_onItemClick} />

                </View>
            </View>


        </Background>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
export default AddToCart;