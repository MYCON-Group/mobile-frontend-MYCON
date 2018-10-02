import React from "react";
import { View, Text, Button } from "react-native";

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <View key={this.props.details}>
        <View>
          <Text>{this.props.details}</Text>
        </View>
        <Button title="Edit" />
      </View>
    );
  }
}
