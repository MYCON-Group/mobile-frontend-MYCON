import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.label}>{this.props.keyName}:</Text>
        <View key={this.props.name} style={styles.container}>
          <TextInput
            underlineColorAndroid="transparent"
            multiline={true}
            style={styles.textInput}
            value={this.props.details}
            onChangeText={text =>
              this.props.handleChange(text, this.props.stallInfoParam)
            }
          />
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
    marginLeft: 10,
    marginRight: 10,
    maxHeight: 150,
    borderRadius: 3,
    backgroundColor: "#2196F3"
  },
  textInput: {
    fontSize: 15
  },
  label: {
    marginLeft: 10
  }
});
