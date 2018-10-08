import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <View key={this.props.details}>
        <View>
          <Text>{this.props.details}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#2196F3"
  },
  textInput: {
    height: 40,
    fontSize: 30
  }
});
