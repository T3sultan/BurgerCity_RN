import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';


const { width, height } = Dimensions.get("window");

const Call = ({
    style, data, renderItem, onPress
}) => {
    return data ? (
        data.map((entry, index) => {
            return (
                <TouchableOpacity key={index} style={styles.container} onPress={() => onPress(entry, index)}>
                    <View style={styles.leftView}>
                        {renderItem(entry, index)}
                    </View>
                    <View style={styles.rightView}>
                        <Image
                            style={{ height: 20, width: 20 }}
                            source={entry.selected ? entry.activeIcon : entry.icon} />

                    </View>

                </TouchableOpacity>

            )

        })

    ) : (
        <View />
    );
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#ffff",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 5,
    },
    leftView: {
        marginLeft: 20,


    },
    rightView: {
        marginRight: 20,

    }

})

export default Call;