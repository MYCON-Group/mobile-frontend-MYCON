import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <View key={this.props.name}>
        <TextInput
          value={this.props.details}
          onChangeText={text =>
            this.props.handleChange(text, this.props.stallInfoParam)
          }
        />
      </View>
    );
  }
}
