import LinearGradient from "react-native-linear-gradient";
import {Text, View, StyleSheet} from "react-native";
import Icon from "../components/Icon";
import AppIntroSlider from "react-native-app-intro-slider";
import RenderPagination from "../components/RenderPagination";
import React, {useRef} from "react";
import IntroSlideItem from "../components/IntroSlideItem";
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";



const data = [
    {
        key: 'one',
        text: [
            {
                title: 'You have',
                text: 'millions of questions...',
            },
            {
                title: 'We have',
                text: "answers in the stars!"
            }
        ],
        buttonText: 'Cool!'
    },
    {
        key: 'two',
        text: [
            {
                title: 'Love',
                text: 'When will I meet my soulmate?\nWhen will I get married?',
                adl: 'and others...'
            },
            {
                title: 'Self',
                text: 'What I am here to learn in life?\nAm I on the right path?',
                adl: 'and others...'
            },
            {
                title: 'Daily life',
                text: 'What is going to happen next?\n Any insight for today?',
                adl: 'and others...'
            },
        ],
        buttonText: 'Awesome!'
    },
    {
        key: 'three',
        text: [
            {
                title: 'How it works',
                text: 'Share birth details\nAsk a question\nAn astrologer will make a prediction\nGet your answer',
            },
        ],
        buttonText: 'Try now!'
    }
];


export default function Intro() {
    const sliderEl = useRef(null);
    let _renderItem = ({item}) => {
        return (
            <IntroSlideItem props={item} key={"j" + item.key}/>
        );
    }
    let _keyExtractor = (item) => item.key;

    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#6B73FF', '#000DFF']} style={{flex: 1}}>
            <SafeAreaView style={{flex: 1}}>
                <SafeAreaView style={styles.logoLine}>
                    <Icon/>
                    <Text style={styles.logoText}>Calm</Text>
                </SafeAreaView>
                <AppIntroSlider renderItem={_renderItem}
                                data={data}
                                keyExtractor={_keyExtractor}
                                renderPagination={(activeIndex) => (
                                    <RenderPagination
                                        data={data}
                                        activeIndex={activeIndex}
                                        slider={sliderEl.current}
                                    />
                                )}
                                ref={sliderEl}
                />
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    logoLine: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 20
    },
    logoText: {
        fontSize: 30,
        fontFamily: "Roboto",
        fontWeight: "bold",
        marginLeft: 10,
        lineHeight: 33,
        color: "#fff"
    }
})
