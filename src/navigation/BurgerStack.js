import React from 'react';
import {View,Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import HeaderTitle from '../components/HeaderTitle';
import OrderMethod from '../screens/burgers/OrderMethod';
import DeliveryAddress from '../screens/burgers/DeliveryAddress';
import DeliveryAddressConfirmed from '../screens/burgers/DeliveryAddressConfirmed';
import Menu from '../screens/burgers/Menu';
import Burgers from '../screens/burgers/Burgers';
import SelectItem from '../screens/burgers/SelectItem';
import Choices from '../screens/burgers/Choices';
import AddToCart from '../screens/burgers/AddToCart';
import MainItems from '../screens/burgers/MainItems';
import FullItems from '../screens/burgers/FullItems';


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
           <Stack.Screen
               name="Menu" component={Menu}
               options={{headerTitle:props=><HeaderTitle/>}}
           />
           <Stack.Screen
               name="Burgers" component={Burgers}
               options={{headerTitle:props=><HeaderTitle/>}}
           />
           <Stack.Screen
               name="SelectItem" component={SelectItem}
               options={{headerTitle:props=><HeaderTitle/>}}
           />
           <Stack.Screen
               name="Choices" component={Choices}
               options={{headerTitle:props=><HeaderTitle/>}}
           />
           <Stack.Screen
               name="AddToCart" component={AddToCart}
               options={{headerTitle:props=><HeaderTitle/>}}
           />
           <Stack.Screen
               name="MainItems" component={MainItems}
               options={{headerTitle:props=><HeaderTitle/>}}
           />
           <Stack.Screen
               name="FullItems" component={FullItems}
               options={{headerTitle:props=><HeaderTitle/>}}
           />
        </Stack.Navigator>
    );
};
export default BurgerStack;