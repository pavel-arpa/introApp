import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";

export default function IntroSlideItem(it) {
    let item = it.props
    return (
        <View style={styles.slide} key={"l" + item.key}>
            <SafeAreaView style={{flex: 1}}>
                {item.key === "one" && (
                    <View style={{flex: 1, justifyContent: "space-around", marginBottom: 200}}>
                        {item.text.map((dataItem, i) => (
                            <View key={"t" + i}>
                                <Text style={[styles.title, {
                                    fontSize: 44,
                                    lineHeight: 52
                                }]}>{dataItem.title}</Text>
                                <Text style={[styles.text, {
                                    fontSize: 44,
                                    lineHeight: 52
                                }]}>{dataItem.text}</Text>
                            </View>
                        ))}
                    </View>)}
                {item.key === "two" && (
                    <View style={{flex: 1, justifyContent: "space-around", marginBottom: 200}}>
                        {item.text.map((dataItem, i) => (
                            <View key={"q" + i}>
                                <Text style={[styles.title, {
                                    fontSize: 34,
                                    lineHeight: 40
                                }]}>{dataItem.title}</Text>
                                <Text style={[styles.text, {
                                    fontSize: 24,
                                    lineHeight: 28
                                }]}>{dataItem.text}</Text>
                                <Text style={styles.adl}>{dataItem.adl}</Text>
                            </View>
                        ))}
                    </View>)}
                {item.key === "three" && (
                    <View style={{flex: 1, justifyContent: "space-around", marginBottom: 200}}>
                        <Text style={[styles.title, {
                            fontSize: 44,
                            lineHeight: 52
                        }]}>{item.text[0].title}</Text>
                        <Text style={[styles.text, {
                            fontSize: 36,
                            lineHeight: 42
                        }]}>{item.text[0].text}</Text>
                    </View>
                )}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        flexDirection: "column",
        padding: 20,
        justifyContent: "space-around"
    },
    title: {
        fontFamily: "Roboto",
        color: "rgba(255,255,255,0.4)",
        fontWeight: "bold"
    },
    text: {
        fontFamily: "Roboto",
        color: "#fff",
        fontWeight: "bold",
        display: "flex"
    },
    adl: {
        fontFamily: "Roboto",
        fontSize: 24,
        fontWeight: "normal",
        color: "#fff",
        lineHeight: 28
    }
})
