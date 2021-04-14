import React from 'react';
import {View,Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FavouritesScreen from '../screens/favourites/FavouritesScreen'
import { useLinkProps } from '@react-navigation/native';
import HeaderTitle from '../components/HeaderTitle';


const FavouritesStack = ({params})=>{
    const Stack = createStackNavigator();
    return (
       <Stack.Navigator>
           <Stack.Screen name="FavouritesScreen" component={FavouritesScreen}
               options={{headerTitle:props=><HeaderTitle/>}}
           />
        </Stack.Navigator>
    );
};
export default FavouritesStack;