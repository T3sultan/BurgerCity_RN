import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Button,Image, TouchableOpacity } from 'react-native';
import Modal  from 'react-native-modal'
import Background from '../../components/Background';

import HeadeerBack from '../../components/HeaderBack';
import HeaderRight from '../../components/HeaderRight';
import Title from '../../components/Title';


const ConfirmedScreen = ({ navigation, route }) => {
    const [ModalVisible, setModalVisible] = useState(false);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate("WalletScreen") }} />),
            headerLeft: () => (<HeadeerBack onPress={() => { navigation.goBack() }} />)
        })
    })
    return (
        <Background>
            <View style={styles.container}>
                <View style={{
                    height: 120,
                    backgroundColor: "#fff"
                }}>
                    <Title
                        title="Order Confirmed"
                        subTitle="Pay By Tipu"

                    >

                    </Title>
                    <Title
                        subTitle="2345-4/23/2021"

                    ></Title>

                </View>
                <View
                    style={{
                        height: 120,
                        backgroundColor: "#fff"

                    }}


                >
                    <Title
                        title="Delivery By "
                        subTitle="4/23/2021 2:57 PM"

                    >

                    </Title>
                    <Title
                        subTitle="Nabinagor,Salimgong"

                    ></Title>

                </View>
                <View style={{ marginLeft: 14, marginRight: 14, marginTop: 5 }}>
                    <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 16, lineHeight: 20 }}
                    >We have sent an eamil confirmation message of your order</Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 20, marginRight: 20, justifyContent: "center", marginTop: 200 }}>
                    <View style={{

                        marginRight: 10,
                        marginLeft: 10,
                        flexDirection: "row",
                        justifyContent: 'center',
                        marginTop: 10

                    }}>
                        <Button
                            style={{
                                flex: 1, marginRight: 5

                            }}
                            title="Track your Order"
                            onPress={() => {navigation.navigate('TrackScreen') }} ></Button>

                    </View>
                    <View
                        style={{

                            marginRight: 10,
                            marginLeft: 10,
                            flexDirection: "row",
                            justifyContent: 'center',
                            marginTop: 10

                        }}>
                        <Button style={{
                            flex: 1, marginRight: 5,
                            backgroundColor: "#fff"

                        }} title="Confirm" onPress={() => { setModalVisible(true) }}></Button>
                    </View>
                </View>
                <Modal isVisible={ModalVisible} animationType="slide" transparent={true}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 90,

                    }}>
                        <View
                            style={{




                            }}
                        >


                            <View style={{
                                alignItems: 'center',
                                margin: 18,
                                backgroundColor: "white",
                                marginTop: 80,
                                justifyContent: "center",
                                borderRadius: 10,
                                paddingBottom: 40,
                                shadowColor: '#000000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.50,
                                shadowRadius: 4,
                                elevation: 5
                            }}>
                                <Image source={require('../../../assets/images/ch.png')} />
                                <Text style={{ fontFamily: "Montserrat-ExtraBold" }}>Congratulations !</Text>
                                <Text style={{ marginRight: 20, fontFamily: 'Montserrat-Bold', fontSize: 12 }}>Thanks for your payment! You have won a free fastFood</Text>
                                <TouchableOpacity style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 50,
                                    width: 100,
                                    backgroundColor: "yellow",
                                    borderRadius: 10,
                                    alignContent: 'center',
                                    marginTop: 10
                                }} onPress={() => {
                                    setModalVisible(false);
                                }}>
                                    <Text style={{
                                        fontFamily: 'Montserrat-Bold',
                                        fontSize: 18,

                                    }}>OK</Text>


                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </Background>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },

})
export default ConfirmedScreen;