import React,{useLayoutEffect} from 'react';
import { View, Text, StyleSheet ,Alert} from 'react-native';
import HeaderLanguageChange from '../../components/HeaderLanguageChange';
import HeaderRight from '../../components/HeaderRight';

const BurgerScreen = ({ navigation, route }) => {

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>(<HeaderRight onPress={()=>{navigation.navigate("WalletPayment")}}/>),
            headerLeft:()=>(<HeaderLanguageChange onPress={()=>{Alert.alert("Do Someting")}}/>)
        })
    })


    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.textStyle}>Burger Screen</Text>

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
export default BurgerScreen;