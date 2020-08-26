import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import HelloWorld from "./components/HelloWorld";
// GreetingGroup.js
import GreetingGroup from "./components/GreetingGroup";
import Blink from "./components/Blink";
import StyleApp from "./components/StyleApp";
import Styleblock from "./components/Styleblock";
import FlexDimensions from "./components/FlexDimensions";
export default function Root(props) {
  return (
    <View style={styles.container}>
      {/* <GreetingGroup>
        nameList ={["임대찬", "조재호", "김호경", ""]}
      </GreetingGroup> */}
      {/* </View><Blink innerText="깜빡입니다." /> */}
      {/* <Styleblock> </Styleblock> */}
      <FlexDimensions></FlexDimensions>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
