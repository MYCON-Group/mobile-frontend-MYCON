import React from "react";
import { View, Text } from "react-native";

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <View>
        <Text> {this.props.details.company} </Text>
        <Text> {this.props.details.body} </Text>
        <Text> {this.props.details.logo} </Text>
      </View>
    );
  }
}
