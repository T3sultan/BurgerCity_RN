import React from 'react';
import {View,Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import BurgerScreen from '../screens/burgers/BurgerScreen';
import HeaderTitle from '../components/HeaderTitle';


const BurgerStack = ({params})=>{
    const Stack = createStackNavigator();
    return (
       <Stack.Navigator>
           <Stack.Screen name="BurgerScreen" component={BurgerScreen}
               options={{headerTitle:props=><HeaderTitle/>}}
           />
        </Stack.Navigator>
    );
};
export default BurgerStack;