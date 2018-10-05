import React from "react";
import { Text, ScrollView, TouchableOpacity } from "react-native";

export default class ShowStallInfo extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text>Hello!</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("")}>
          <Text> BACK </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
