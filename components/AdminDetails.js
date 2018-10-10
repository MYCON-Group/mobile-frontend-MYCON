import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.label}>{this.props.keyName}:</Text>
        <View key={this.props.details} style={styles.container}>
          <Text style={styles.textInput}>{this.props.details}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingLeft: 10,
    flex: 1,
    marginTop: 5,
    marginBottom: 10,
    maxHeight: 150,
    backgroundColor: "#2196F3"
  },
  textInput: {
    fontSize: 15
  },
  label: {
    marginLeft: 10
  }
});
