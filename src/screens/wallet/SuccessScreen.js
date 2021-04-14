import React,{useLayoutEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeadeerBack from '../../components/HeaderBack';
import HeaderRight from '../../components/HeaderRight';

const SuccessScreen = ({ navigation,route }) => {
    // useLayoutEffect(()=>{
    //     navigation.setOptions({
    //         headerRight:()=>(<HeaderRight onPress={()=>{navigation.navigate("WalletScreen")}}/>),
    //         headerLeft:()=>(<HeadeerBack onPress={()=>{navigation.navigate("HomeScreen")}}/>)
    //     })

    // })
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.textStyle}>Success Screen</Text>

            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    container1:{
        width:250,
        height:100,
        backgroundColor:"#000000",
        justifyContent:'center',
        alignItems:'center',
    },
    textStyle:{
        color:'cyan',
        fontSize:25
    }
})
export default SuccessScreen;