import React from "react";
import { View, Text } from "react-native";

export default class StallUpdateCard extends React.Component {
  render() {
    return (
      <View>
        <Text> {this.props.update.updates_body} </Text>
        <Text> {this.props.update.updates_time} </Text>
      </View>
    );
  }
}
