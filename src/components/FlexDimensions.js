import React, { Component } from "react";
import { View, Text } from "react-native";

export default class FlexDimensions extends Component {
  render() {
    return (
      //아래 view flex:1을 지우면 안보이게 됨.
      <View
        style={{
          flex: 1,
          width: "100%",
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1, backgroundColor: "red" }} />
        <View style={{ flex: 2, backgroundColor: "black" }} />
        <View style={{ flex: 3, backgroundColor: "blue" }} />
      </View>
    );
  }
}
// const styles = StyleSheet.create({
//   blue: {
//     color: "blue",
//   },
//   red: {
//     color: "red",
//   },
//   black: {
//     color: "black",
//   },
// });
