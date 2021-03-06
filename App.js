import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Onbording from './src/screens/Onbording';
import Login from './src/screens/Login';
import ForgetPassword from './src/screens/ForgetPassword';
import Otp from './src/screens/Otp';
import MobileNumber from './src/screens/MobileNumber';
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './src/navigation/TabNavigator';
import { createSwitchNavigator } from '@react-navigation/compat'
import SettingsStack from './src/navigation/SettingsStack';


const customfonts = {
  'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
  'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
}

const AppNavigator = createSwitchNavigator({
  Onbording: { screen: Onbording },
  Login: { screen: Login },
  ForgetPassword: { screen: ForgetPassword },
  Otp: { screen: Otp },
  MobileNumber: { screen: MobileNumber },
  Settings:SettingsStack,
  HomeScreen: TabNavigator
}, {
  initialRouteName: 'Onbording'
})




export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const _loadAssetsAsync = async () => {
    await Font.loadAsync(customfonts);
    setAssetsLoaded(true);
  }
  useEffect(() => {
    _loadAssetsAsync();
  });

  // return (
  //   <View style={styles.container}>
  //    {assetsLoaded ? <Login/> : <ActivityIndicator size="large"/>}
  //   </View>
  // );

  return assetsLoaded ? (
    <NavigationContainer>
      <StatusBar />
      <AppNavigator />

    </NavigationContainer>
  ) : (
    <ActivityIndicator size="small" />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
