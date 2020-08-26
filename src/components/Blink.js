import React from "react";
import { View, Text } from "react-native";

export default class Blink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };

    setInterval(() => {
      this.setState({ visible: !this.state.visible }); //객체를 소환할떄는 set !!
    }, 2000);
  }
  render() {
    const { innerText } = this.props;
    return (
      <View>
        <Text>{this.state.visible ? innerText : " "}</Text>
      </View>
    );
  }
}
