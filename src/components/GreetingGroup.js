import React from "react";

import Greeting from "./Greeting";

import { View } from "react-native";

export default class GreetingGroup extends React.Component {
  render() {
    const nameList = this.props.nameList;
    return (
      <View>
        {nameList.map((name) => {
          return <Greeting name={name} key={name} />;
        })}
        {/* <Greeting name="김현수"></Greeting>
        <Greeting name="신윤수"></Greeting>
        <Greeting name="김현수"></Greeting>
        <Greeting name="김철수"></Greeting> */}
      </View>
    );
  }
}
