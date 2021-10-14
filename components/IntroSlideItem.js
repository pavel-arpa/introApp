import React from 'react';
import {Dimensions, Text, View} from "react-native";
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import EStyleSheet from "react-native-extended-stylesheet";

export default function IntroSlideItem(it) {
    let item = it.props
    let thirdSlideTexts
    if (item.key === "three") {
        thirdSlideTexts = item.text[0].text.split("\n").map((el, i) => {
            if (i === 2) return <Text style={[styles.text, styles.text_medium, {flex: 1.5}]} key={"thirdSlideTexts" + i}>{el}</Text>
            return (<Text style={[styles.text, styles.text_medium, {flex: 1}]} key={"thirdSlideTexts" + i}>{el}</Text>)

        })
    }
    return (
        <SafeAreaView style={styles.slide} key={"l" + item.key}>
            <View style={{flex: 1}}>
                {item.key === "one" && (
                    <View style={{flex: 1, marginBottom: 90}}>
                        {item.text.map((dataItem, i) => (
                            <View key={"t" + i} style={{flex: 1}}>
                                <Text style={[styles.text, styles.text_big, styles.text_faded]}>{dataItem.title}</Text>
                                <Text style={[styles.text, styles.text_big]}>{dataItem.text}</Text>
                            </View>
                        ))}
                    </View>)}
                {item.key === "two" && (
                    <View style={{flex: 1, marginBottom: 90}}>
                        {item.text.map((dataItem, i) => (
                            <View key={"q" + i} style={{flex: 1}}>
                                <Text style={[styles.text, styles.text_medium, styles.text_faded]}>{dataItem.title}</Text>
                                <Text style={[styles.text, styles.text_small]}>{dataItem.text}</Text>
                                <Text style={[styles.text, styles.text_small, styles.text_normal]}>{dataItem.adl}</Text>
                            </View>
                        ))}
                    </View>)}
                {item.key === "three" && (
                    <View style={{flex: 1, marginBottom: 90}}>
                        <Text style={[styles.text, styles.text_big, styles.text_faded, {flex: 1}]}>{item.text[0].title}</Text>
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
        fontSize: "36rem",
        lineHeight: "38rem"
    },

    text_medium: {
        fontSize: "25rem",
        lineHeight: "30rem"
    },
    text_small: {
        fontSize: "18rem",
        lineHeight: "22rem"
    },
    '@media (max-width: 360)': {
        text_big: {
            fontSize: "30rem",
            lineHeight: "32rem"
        },
        text_medium: {
            fontSize: "20rem",
            lineHeight: "25rem"
        },
        text_small: {
            fontSize: "15rem",
            lineHeight: "20rem"
        },
    }
})
