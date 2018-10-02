import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <View key={this.props.details}>
        <View>
          <Text>{this.props.details}</Text>
        </View>
        <TouchableOpacity onPress={this.props.edit}>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
