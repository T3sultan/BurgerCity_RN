import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack';
import BurgerStack from './BurgerStack';
import FavouritesStack from './FavouritesStack';
import TrackStack from './TrackStack';
import WalletStack from './WalletStack';


const TabNavigator = ({ params }) => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName="HomeStack">
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    title: '', headerTransparent: true,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image style={{ height: 30, width: 30 }}
                            source={
                                focused
                                    ? require('../../assets/images/home1.png')
                                    : require('../../assets/images/home-inactive.png')
                            }
                        >

                        </Image>
                    ),
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="Burger"
                component={BurgerStack}
                options={{
                    title: '', headerTransparent: true,
                    tabBarLabel: 'Burger',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image style={{ height: 30, width: 30 }}
                            source={
                                focused
                                    ? require('../../assets/images/burger-active.png')
                                    : require('../../assets/images/burgerInactive.png')
                            }
                        >

                        </Image>
                    ),
                }}
            ></Tab.Screen>
            <Tab.Screen 
            name="favourites"
            component={FavouritesStack}
            options={{
                title: '', headerTransparent: true,
                    tabBarLabel: 'favourites',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image style={{ height: 30, width: 30 }}
                            source={
                                focused
                                    ? require('../../assets/images/favourites-active.png')
                                    : require('../../assets/images/favorites-inactive.png')
                            }
                        >

                        </Image>
                    ),
                }}

            />
            <Tab.Screen 
            name="track" 
            component={TrackStack}
            options={{
                title: '', headerTransparent: true,
                    tabBarLabel: 'track',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image style={{ height: 30, width: 30 }}
                            source={
                                focused
                                    ? require('../../assets/images/track-active.png')
                                    : require('../../assets/images/track-inactive.png')
                            }
                        >

                        </Image>
                    ),
                }}
            />
            <Tab.Screen 
            name="wallet" 
            component={WalletStack}
            options={{
                title: '', headerTransparent: true,
                    tabBarLabel: 'wallet',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image style={{ height: 30, width: 30 }}
                            source={
                                focused
                                    ? require('../../assets/images/wallet-active.png')
                                    : require('../../assets/images/wallet-inactive.png')
                            }
                        >

                        </Image>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
export default TabNavigator;