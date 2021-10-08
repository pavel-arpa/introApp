import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from "react-native";


const AppButton = ({ onPress, title }) => (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.appButtonContainer}
    >
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    appButtonContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        height: 50,
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: "#fff",
        borderRadius: 28,
        alignItems: "center",
        justifyContent: "center",
    },
    appButtonText: {
        color: "#056FDD",
        alignSelf: "center",
        fontSize: 22,
        fontFamily: "Roboto",
        fontWeight: "normal"
    }
})

export default AppButton
