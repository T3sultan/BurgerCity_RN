import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GroupButton = ({
    activeColor, buttons, ...rest
}) => (
    <View style={styles.container}>
        {buttons.map((button) => {
            return (

                <TouchableOpacity onPress={button.onPress}
                    style={{
                        flex: 1,
                        height: 49,
                        backgroundColor: button.activated ? activeColor : "#FFFFFFFF",
                        borderRadius: 9,
                        justifyContent: "center",
                        alignItems: 'center',
                        marginTop: 20
                    }}
                >
                    <Text
                        style={[{ color: button.activated ? "#FFFFFF" : "#000000" }, styles.text]}
                    >{button.text}</Text>

                </TouchableOpacity>
            )

        })}
    </View>

);
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: 'transparent'
    },
    text: {
        color: "#000000",
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        lineHeight: 16,
        //justifyContent: 'space-between'
    }

})
export default GroupButton;