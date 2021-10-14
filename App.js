import React from 'react';
import Intro from "./screens/Intro";
import {Dimensions} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 310});

export default function App() {
    return (
        <Intro/>
    )
}
