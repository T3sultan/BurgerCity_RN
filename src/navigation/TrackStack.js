import React from 'react';
import {View,Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import TrackScreen from '../screens/track/TrackScreen'
import HeaderTitle from '../components/HeaderTitle';



const TrackStack = ({params})=>{
    const Stack = createStackNavigator();
    return (
       <Stack.Navigator>
           <Stack.Screen name="TrackScreen" component={TrackScreen}
               options={{headerTitle:props=><HeaderTitle/>}}
           />
        </Stack.Navigator>
    );
};
export default TrackStack;