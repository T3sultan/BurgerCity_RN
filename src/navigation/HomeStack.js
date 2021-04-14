import React from 'react';
import {View,Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import HeaderTitle from '../components/HeaderTitle';


const HomeStack = ({params})=>{
    const Stack = createStackNavigator();
    return (
       <Stack.Navigator>
           <Stack.Screen name="HomeScreen" component={HomeScreen}
               options={{headerTitle:props=><HeaderTitle/>}}
           />

        </Stack.Navigator>
    );
};
export default HomeStack;