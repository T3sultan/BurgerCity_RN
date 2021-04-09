import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Onbording from './src/screens/Onbording';


const customfonts={
  'Montserrat-Bold':require('./assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-SemiBold':require('./assets/fonts/Montserrat-SemiBold.ttf'),
}

export default function App() {
  const [assetsLoaded,setAssetsLoaded] = useState(false);
  const _loadAssetsAsync = async () =>{
    await Font.loadAsync(customfonts);
    setAssetsLoaded(true);
  }
  useEffect(()=>{
    _loadAssetsAsync();
  });

  return (
    <View style={styles.container}>
     {assetsLoaded ? <Onbording/> : <ActivityIndicator size="large"/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
});
