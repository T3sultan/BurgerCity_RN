import React from 'react';
import {View,Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import WalletPayment from '../screens/wallet/WalletPayment';
import ConfirmedScreen from '../screens/wallet/ConfirmedScreen';
import SuccessScreen from '../screens/wallet/SuccessScreen';
import HeaderTitle from '../components/HeaderTitle';




const WalletStack = ({params})=>{
    const Stack = createStackNavigator();
    return (
       <Stack.Navigator
          initialRouteName="WalletPayment"
       >
           <Stack.Screen name="WalletPayment" component={WalletPayment}
               options={{headerTitle:props=><HeaderTitle/>}}
           />
           <Stack.Screen name="ConfirmedScreen" component={ConfirmedScreen}
               options={{headerTitle:props=><HeaderTitle/>}}
           />
           <Stack.Screen name="SuccessScreen" component={SuccessScreen}
               options={{headerTitle:props=><HeaderTitle/>}}
           />
        </Stack.Navigator>
    );
};
export default WalletStack;