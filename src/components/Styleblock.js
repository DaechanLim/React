import React, { Component } from "react";

import { View, Text, StyleSheet } from "react-native";
// import { Component } from "react";

export default class StyleApp extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          flexDirextion: "column",
        }}
      >
        <View style={{ width: 50, height: 50, backgroundColor: "blue" }}></View>
        <View
          style={{ width: 100, height: 100, backgroundColor: "black" }}
        ></View>
        <View
          style={{ width: 150, height: 150, backgroundColor: "red" }}
        ></View>
        {/* <Text style={{ color: "red" }}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blue: {
    color: "blue",
  },
  red: {
    color: "red",
  },
  black: {
    color: "black",
  },
});
