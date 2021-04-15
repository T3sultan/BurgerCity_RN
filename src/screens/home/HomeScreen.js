import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Alert, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Swiper from 'react-native-swiper';
import Coupon from '../../components/Coupon';
import HeaderLanguageChange from '../../components/HeaderLanguageChange';
import HeaderRight from '../../components/HeaderRight';


const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation, route }) => {


    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight
                onPress={() => { navigation.navigate("WalletPayment") }} />),
            headerLeft: () => (<HeaderLanguageChange onPress={() => { Alert.alert("Do Someting") }} />)
        })

    })


    const slides = [
        { id: 1, image: require('../../../assets/images/burger20.jpg') },
        { id: 2, image: require('../../../assets/images/burger21.jpg') },
        { id: 3, image: require('../../../assets/images/burger22.jpg') },
        { id: 4, image: require('../../../assets/images/burger23.jpg') }
    ];

    const coupons = [
        {
            id: 1, icon: require('../../../assets/images/logo.png'),
            title: "Order Here",
            description: "Login to continue Burger City"
        },
        {
            id: 2, icon: require('../../../assets/images/logo.png'),
            title: "Track Here",
            description: "Login to continue Burger City"

        },

    ];

    const offers = [
        { id: 1, image: require('../../../assets/images/burger27.jpg') },
        { id: 2, image: require('../../../assets/images/burger26.jpg') },
        { id: 3, image: require('../../../assets/images/burger25.jpg') },
        { id: 4, image: require('../../../assets/images/burger24.jpg') },
        { id: 1, image: require('../../../assets/images/burger23.jpg') },
        { id: 2, image: require('../../../assets/images/burger22.jpg') },
        { id: 3, image: require('../../../assets/images/burger21.jpg') },
        { id: 4, image: require('../../../assets/images/burger20.jpg') },
        { id: 1, image: require('../../../assets/images/burger14.jpg') },
        { id: 2, image: require('../../../assets/images/burger26.jpg') },
        { id: 3, image: require('../../../assets/images/burger21.jpg') },
        { id: 4, image: require('../../../assets/images/burger23.jpg') },

    ];
    const _renderItem = ({ item, index }) => {
        return (
            <View key={item.id}>
                <Image source={item.image} />
            </View>

        )
    }


    return (
        <View style={styles.container}>
            <View style={{ width: width, height: 180 }}>
                <Swiper autoplay={true}
                    dot={<View style={styles.dot} />}
                    activeDot={<View style={styles.activedot} />}
                >
                    {
                        slides.map((slide) => {
                            return (
                                <View key={slide.id} style={styles.slide}>
                                    <Image
                                        source={slide.image}
                                        style={styles.image}

                                    />
                                    <View style={styles.slideTextWrapper}>
                                        <Text style={styles.slideText}>Biggest Burger's House</Text>

                                    </View>

                                </View>

                            )
                        })
                    }
                </Swiper>
            </View>
            <View style={{ marginTop: 0 }}>

                {
                    coupons.map((coupon) => {
                        return (
                            <Coupon
                                key={coupon.id}
                                icon={coupon.icon}
                                title={coupon.title}
                                description={coupon.description}

                            />
                        )
                    })
                }

            </View>
            <View style={styles.offerStyle}>
                <Text style={styles.textStyle}>Best Burger Offers</Text>
                <Carousel
               
                firstItem={1}
                    data={offers}
                    renderItem={_renderItem}
                    sliderWidth={width}
                    itemWidth={140}
                >

                </Carousel>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    offerStyle: {
        marginTop: 3,
        marginLeft: 20

    },
    textStyle: {
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 20

    },
    dot: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        width: 7,
        height: 7,
        borderRadius: 7,
        marginLeft: 3,
        marginRight: 3

    },
    activedot: {
        backgroundColor: "#FFFFFF",
        width: 7,
        height: 7,
        borderRadius: 7,
        marginRight: 3,
        marginLeft: 3

    },
    slideTextWrapper: {
        position: 'relative',
        bottom: 160,
        width: width - 200,
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: 9

    },
    slideText: {
        color: '#ffffffff',
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 26,


    },
    image: {
        width: width,
        height: 200

    },
    slide: {
        width: width,
        height: 200

    },
    container: {
        flex: 1,


    },

})
export default HomeScreen;