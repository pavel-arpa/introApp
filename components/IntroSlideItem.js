import React from 'react';
import {Dimensions, Text, View} from "react-native";
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import EStyleSheet from "react-native-extended-stylesheet";

export default function IntroSlideItem(it) {
    let item = it.props
    let thirdSlideTexts
    if (item.key === "three") {
        thirdSlideTexts = item.text[0].text.split("\n").map((el, i) => (
            <Text style={[styles.text, styles.text_medium]} key={"thirdSlideTexts" + i}>{el}</Text>
        ))
    }
    return (
        <SafeAreaView style={styles.slide} key={"l" + item.key}>
            <View style={{flex: 1}}>
                {item.key === "one" && (
                    <View style={{flex: 1, justifyContent: "space-around", marginBottom: 90}}>
                        {item.text.map((dataItem, i) => (
                            <View key={"t" + i}>
                                <Text style={[styles.text, styles.text_big, styles.text_faded]}>{dataItem.title}</Text>
                                <Text style={[styles.text, styles.text_big]}>{dataItem.text}</Text>
                            </View>
                        ))}
                    </View>)}
                {item.key === "two" && (
                    <View style={{flex: 1, justifyContent: "space-around", marginBottom: 90}}>
                        {item.text.map((dataItem, i) => (
                            <View key={"q" + i}>
                                <Text style={[styles.text, styles.text_medium, styles.text_faded]}>{dataItem.title}</Text>
                                <Text style={[styles.text, styles.text_small]}>{dataItem.text}</Text>
                                <Text style={[styles.text, styles.text_small, styles.text_normal]}>{dataItem.adl}</Text>
                            </View>
                        ))}
                    </View>)}
                {item.key === "three" && (
                    <View style={{flex: 1, justifyContent: "space-around", marginBottom: 90}}>
                        <Text style={[styles.text, styles.text_big, styles.text_faded]}>{item.text[0].title}</Text>
                        {thirdSlideTexts}
                    </View>
                )}
            </View>
        </SafeAreaView>
    )
}


const styles = EStyleSheet.create({
    slide: {
        flex: 1,
        flexDirection: "column",
        padding: 20,
        justifyContent: "space-around"
    },
    text: {
        fontFamily: "Roboto",
        color: "#fff",
        fontWeight: "bold",
    },
    text_faded: {
        color: "rgba(255,255,255,0.4)"
    },
    text_normal: {
        fontWeight: "normal"
    },
    text_big: {
        fontSize: "32rem",
        lineHeight: "38rem"
    },
    text_medium: {
        fontSize: "25rem",
        lineHeight: "30rem"
    },
    text_small: {
        fontSize: "18rem",
        lineHeight: "22rem"
    }
})
