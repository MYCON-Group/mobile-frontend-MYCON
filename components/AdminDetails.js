import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <View key={this.props.details} style={styles.container}>
        <Text>{this.props.keyName}</Text>
        <Text style={styles.textInput}>{this.props.details}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingLeft: 10,
    flex: 1,
    margin: 10,
    backgroundColor: "#2196F3"
  },
  textInput: {
    height: 40,
    fontSize: 30
  }
});
