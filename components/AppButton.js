import React from 'react';
import {Text, TouchableOpacity} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";


const AppButton = ({ onPress, title }) => (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.appButtonContainer}
    >
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);


const styles = EStyleSheet.create({
    appButtonContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        height: "44rem",
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: "#fff",
        borderRadius: "30rem",
        alignItems: "center",
        justifyContent: "center",
    },
    appButtonText: {
        color: "#056FDD",
        alignSelf: "center",
        fontSize: "20rem",
        lineHeight: "25rem",
        fontFamily: "Roboto",
        fontWeight: "normal"
    },
    '@media (max-width: 360)': {
        appButtonContainer: {
            height: "40rem",
            borderRadius: "30rem",
        },
        appButtonText: {
            fontSize: "15rem",
            lineHeight: "20rem",
        },
    }
})

export default AppButton
