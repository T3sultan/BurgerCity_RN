import React from 'react';
import {View,Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import HeaderTitle from '../components/HeaderTitle';
import OrderMethod from '../screens/burgers/OrderMethod';
import DeliveryAddress from '../screens/burgers/DeliveryAddress';
import DeliveryAddressConfirmed from '../screens/burgers/DeliveryAddressConfirmed';


const BurgerStack = ({params})=>{
    const Stack = createStackNavigator();
    return (
       <Stack.Navigator initialRouteName="OrderMethod">
           <Stack.Screen name="OrderMethod" component={OrderMethod}
               options={{headerTitle:props=><HeaderTitle/>}}
           />
           <Stack.Screen
               name="DeliveryAddress" component={DeliveryAddress}
               options={{headerTitle:props=><HeaderTitle/>}}
           />
           <Stack.Screen
               name="DeliveryAddressConfirmed" component={DeliveryAddressConfirmed}
               options={{headerTitle:props=><HeaderTitle/>}}
           />
        </Stack.Navigator>
    );
};
export default BurgerStack;