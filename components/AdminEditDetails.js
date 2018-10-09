import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <View key={this.props.name} style={styles.container}>
        <Text>{this.props.keyName}</Text>
        <TextInput
          underlineColorAndroid="transparent"
          style={styles.textInput}
          value={this.props.details}
          onChangeText={text =>
            this.props.handleChange(text, this.props.stallInfoParam)
          }
        />
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
