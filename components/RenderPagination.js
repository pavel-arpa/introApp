import React from 'react';
import AppButton from "./AppButton";
import {StyleSheet, View} from "react-native";
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const RenderPagination = ({activeIndex, data, slider}) => {
  return (
      <SafeAreaView style={styles.paginationContainer}>
          <SafeAreaView>
              <View style={styles.paginationDots}>
                  {data.length > 1 &&
                  data.map((it, i) => (
                      <Pressable
                          key={i}
                          style={[
                              styles.dot,
                              i === activeIndex
                                  ? {backgroundColor: "white"}
                                  : {backgroundColor: "rgba(255,255,255,0.2)"},
                          ]}
                          onPress={() => slider?.goToSlide(i, true)}
                      />
                  ))}
              </View>
              <View style={{marginBottom: 10, marginHorizontal: 10}}>
                  <AppButton title={data[activeIndex].buttonText} onPress={() => {
                      if (activeIndex !== data.length - 1) {
                          slider.goToSlide(activeIndex + 1, true)
                      }
                  }}/>
              </View>
          </SafeAreaView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    paginationContainer: {
        position: "absolute",
        bottom: 16,
        left: 16,
        right: 16,
    },
    paginationDots: {
        height: 16,
        margin: 16,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 4,
    },
})

export default RenderPagination
